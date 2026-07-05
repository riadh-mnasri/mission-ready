"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppState, updateAppState } from "@/lib/storage";
import { createCard, masteryRatio } from "@/lib/leitner";
import type { Theme } from "@/lib/types";
import NavBar from "@/components/NavBar";
import MasteryBar from "@/components/MasteryBar";

const THEME_COLORS = [
  "#f0b429",
  "#38bdf8",
  "#6366f1",
  "#a78bfa",
  "#34d399",
  "#f43f5e",
  "#fb923c",
  "#d946ef",
];

export default function ThemesPage() {
  const [state] = useAppState();
  const { themes, cards } = state;

  const [expandedThemeId, setExpandedThemeId] = useState<string | null>(null);
  const [newThemeOpen, setNewThemeOpen] = useState(false);

  function addTheme(name: string, color: string) {
    const theme: Theme = {
      id: `custom-${crypto.randomUUID()}`,
      name,
      color,
      isCustom: true,
    };
    updateAppState((prev) => ({ ...prev, themes: [...prev.themes, theme] }));
    setNewThemeOpen(false);
    setExpandedThemeId(theme.id);
  }

  function deleteTheme(themeId: string) {
    if (!confirm("Delete this theme and all its cards?")) return;
    updateAppState((prev) => ({
      themes: prev.themes.filter((t) => t.id !== themeId),
      cards: prev.cards.filter((c) => c.themeId !== themeId),
    }));
    if (expandedThemeId === themeId) setExpandedThemeId(null);
  }

  function addCard(themeId: string, question: string, answer: string) {
    const card = createCard(themeId, question, answer);
    updateAppState((prev) => ({ ...prev, cards: [...prev.cards, card] }));
  }

  function updateCard(cardId: string, question: string, answer: string) {
    updateAppState((prev) => ({
      ...prev,
      cards: prev.cards.map((c) => (c.id === cardId ? { ...c, question, answer } : c)),
    }));
  }

  function deleteCard(cardId: string) {
    if (!confirm("Delete this card?")) return;
    updateAppState((prev) => ({
      ...prev,
      cards: prev.cards.filter((c) => c.id !== cardId),
    }));
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Themes</h1>
          <button
            type="button"
            onClick={() => setNewThemeOpen((v) => !v)}
            className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-900 transition-transform hover:scale-105"
          >
            {newThemeOpen ? "Cancel" : "New theme"}
          </button>
        </div>

        <AnimatePresence>
          {newThemeOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <NewThemeForm onCreate={addTheme} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-3">
          {themes.map((theme) => {
            const themeCards = cards.filter((c) => c.themeId === theme.id);
            const expanded = expandedThemeId === theme.id;

            return (
              <div key={theme.id} className="glass card-shadow rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedThemeId(expanded ? null : theme.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ background: theme.color }}
                    />
                    <span className="font-semibold text-white">{theme.name}</span>
                    <span className="text-sm text-slate-400">
                      {themeCards.length} card{themeCards.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex w-40 items-center gap-3">
                    <MasteryBar ratio={masteryRatio(themeCards)} color={theme.color} />
                  </div>
                </button>

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="space-y-3 p-5">
                        {themeCards.map((card) => (
                          <CardRow
                            key={card.id}
                            question={card.question}
                            answer={card.answer}
                            onSave={(q, a) => updateCard(card.id, q, a)}
                            onDelete={() => deleteCard(card.id)}
                          />
                        ))}
                        <NewCardForm onCreate={(q, a) => addCard(theme.id, q, a)} />
                        {theme.isCustom && (
                          <button
                            type="button"
                            onClick={() => deleteTheme(theme.id)}
                            className="mt-2 text-sm text-rose-400 hover:text-rose-300"
                          >
                            Delete this theme
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

function NewThemeForm({ onCreate }: { onCreate: (name: string, color: string) => void }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState(THEME_COLORS[0]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onCreate(name.trim(), color);
        setName("");
      }}
      className="glass card-shadow flex flex-col gap-4 rounded-2xl p-5"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Theme name, e.g. GraphQL"
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-amber-400/50 focus:outline-none"
      />
      <div className="flex items-center gap-2">
        {THEME_COLORS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setColor(c)}
            className="h-7 w-7 rounded-full transition-transform"
            style={{
              background: c,
              outline: color === c ? "2px solid white" : "none",
              outlineOffset: 2,
              transform: color === c ? "scale(1.1)" : "scale(1)",
            }}
          />
        ))}
      </div>
      <button
        type="submit"
        className="self-start rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-900"
      >
        Create theme
      </button>
    </form>
  );
}

function NewCardForm({ onCreate }: { onCreate: (question: string, answer: string) => void }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-xl border border-dashed border-white/15 py-2.5 text-sm text-slate-400 hover:border-amber-400/40 hover:text-amber-300"
      >
        + Add a card
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!question.trim() || !answer.trim()) return;
        onCreate(question.trim(), answer.trim());
        setQuestion("");
        setAnswer("");
        setOpen(false);
      }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3"
    >
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        rows={2}
        className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-amber-400/50 focus:outline-none"
      />
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        rows={3}
        className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-amber-400/50 focus:outline-none"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-slate-900"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-full px-4 py-1.5 text-sm text-slate-400 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function CardRow({
  question,
  answer,
  onSave,
  onDelete,
}: {
  question: string;
  answer: string;
  onSave: (question: string, answer: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [q, setQ] = useState(question);
  const [a, setA] = useState(answer);

  if (editing) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(q, a);
          setEditing(false);
        }}
        className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3"
      >
        <textarea
          value={q}
          onChange={(e) => setQ(e.target.value)}
          rows={2}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-amber-400/50 focus:outline-none"
        />
        <textarea
          value={a}
          onChange={(e) => setA(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-amber-400/50 focus:outline-none"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-slate-900"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="rounded-full px-4 py-1.5 text-sm text-slate-400 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
      <p className="text-sm font-medium text-white">{question}</p>
      <p className="mt-1 text-sm text-slate-400">{answer}</p>
      <div className="mt-3 flex gap-4">
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="text-xs font-medium text-amber-300 hover:text-amber-200"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="text-xs font-medium text-rose-400 hover:text-rose-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
