"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Flashcard, Theme } from "@/lib/types";
import { dueCards, masteryRatio } from "@/lib/leitner";
import MasteryBar from "./MasteryBar";

interface ThemeCardProps {
  theme: Theme;
  cards: Flashcard[];
}

export default function ThemeCard({ theme, cards }: ThemeCardProps) {
  const due = dueCards(cards).length;
  const mastery = masteryRatio(cards);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/review/${theme.id}`}
        className="card-shadow card-shadow-hover glass block rounded-2xl p-5 transition-shadow"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: theme.color, boxShadow: `0 0 12px ${theme.color}` }}
            />
            <h3 className="font-semibold text-white">{theme.name}</h3>
          </div>
          {due > 0 ? (
            <span className="rounded-full bg-amber-400/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
              {due} due
            </span>
          ) : (
            <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
              up to date
            </span>
          )}
        </div>

        <p className="mt-3 text-sm text-slate-400">{cards.length} cards</p>

        <div className="mt-4">
          <MasteryBar ratio={mastery} color={theme.color} />
        </div>
      </Link>
    </motion.div>
  );
}
