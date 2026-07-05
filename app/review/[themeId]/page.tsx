"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAppState, updateAppState, readPersistedState } from "@/lib/storage";
import { dueCards, reviewCorrect, reviewIncorrect } from "@/lib/leitner";
import type { Flashcard } from "@/lib/types";
import NavBar from "@/components/NavBar";
import FlashcardFlip from "@/components/FlashcardFlip";
import ReviewControls from "@/components/ReviewControls";

function buildQueue(themeId: string, cards: Flashcard[]) {
  const scoped = themeId === "all" ? cards : cards.filter((c) => c.themeId === themeId);
  return dueCards(scoped).map((c) => c.id);
}

export default function ReviewPage({
  params,
}: {
  params: Promise<{ themeId: string }>;
}) {
  const { themeId } = use(params);
  const [state] = useAppState();
  const { themes, cards } = state;

  const theme = themeId === "all" ? null : themes.find((t) => t.id === themeId);
  if (themeId !== "all" && !theme) {
    notFound();
  }

  // Seed the session queue from localStorage directly rather than the `cards`
  // snapshot, since that snapshot can still be the pre-hydration default state
  // on the render right after a full page load/reload.
  const [queue, setQueue] = useState<string[] | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [stats, setStats] = useState({ reviewed: 0, correct: 0 });

  useEffect(() => {
    // One-time read from localStorage (an external system) to seed the
    // session queue with the real persisted Leitner progress.
    const persistedCards = readPersistedState()?.cards ?? cards;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQueue(buildQueue(themeId, persistedCards));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeId]);

  const currentId = queue?.[0];
  const currentCard = cards.find((c) => c.id === currentId);
  const currentTheme = currentCard
    ? themes.find((t) => t.id === currentCard.themeId)
    : null;

  function advance(remembered: boolean) {
    if (!currentCard) return;

    updateAppState((prev) => ({
      ...prev,
      cards: prev.cards.map((c) =>
        c.id === currentCard.id
          ? remembered
            ? reviewCorrect(c)
            : reviewIncorrect(c)
          : c,
      ),
    }));

    setStats((s) => ({
      reviewed: s.reviewed + 1,
      correct: s.correct + (remembered ? 1 : 0),
    }));

    setQueue((q) => {
      if (!q) return q;
      const rest = q.slice(1);
      return remembered ? rest : [...rest, currentCard.id];
    });
    setFlipped(false);
  }

  const title = theme ? theme.name : "All due cards";
  const accent = currentTheme?.color ?? theme?.color ?? "#f0b429";

  return (
    <>
      <NavBar />
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Review session</p>
            <h1 className="text-xl font-bold text-white">{title}</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-slate-300 hover:text-white"
          >
            Exit
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {queue === null ? null : currentCard ? (
            <motion.div
              key={currentCard.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              {currentTheme && themeId === "all" && (
                <div className="mb-3 flex justify-center">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                    style={{ background: `${currentTheme.color}22`, color: currentTheme.color }}
                  >
                    {currentTheme.name}
                  </span>
                </div>
              )}

              <FlashcardFlip
                question={currentCard.question}
                answer={currentCard.answer}
                flipped={flipped}
                onFlip={() => setFlipped((f) => !f)}
                accent={accent}
              />

              <ReviewControls
                visible={flipped}
                onKnew={() => advance(true)}
                onMissed={() => advance(false)}
              />

              <p className="mt-6 text-center text-sm text-slate-500">
                {queue!.length} card{queue!.length > 1 ? "s" : ""} left in this session
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="recap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass card-shadow rounded-3xl p-10 text-center"
            >
              <p className="text-4xl">🎯</p>
              <h2 className="mt-4 text-xl font-bold text-white">Session complete</h2>
              <p className="mt-2 text-slate-400">
                {stats.reviewed === 0
                  ? "Nothing was due here. Come back later."
                  : `${stats.correct} / ${stats.reviewed} known on the first try.`}
              </p>
              <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-2.5 font-semibold text-slate-900 transition-transform hover:scale-105"
              >
                Back to dashboard
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
