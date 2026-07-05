"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAppState } from "@/lib/storage";
import { dueCards } from "@/lib/leitner";
import NavBar from "@/components/NavBar";
import ThemeCard from "@/components/ThemeCard";

export default function DashboardPage() {
  const [state] = useAppState();
  const { themes, cards } = state;

  const totalDue = dueCards(cards).length;

  return (
    <>
      <NavBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Ready for your next interview?
            </h1>
            <p className="mt-1 text-slate-400">
              {totalDue > 0
                ? `${totalDue} card${totalDue > 1 ? "s" : ""} due for review across all themes.`
                : "Everything is up to date. Add a theme or come back later."}
            </p>
          </div>
          {totalDue > 0 && (
            <Link
              href="/review/all"
              className="animate-glow whitespace-nowrap rounded-full bg-amber-400 px-6 py-3 text-center font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-transform hover:scale-105"
            >
              Review all due
            </Link>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
            >
              <ThemeCard
                theme={theme}
                cards={cards.filter((c) => c.themeId === theme.id)}
              />
            </motion.div>
          ))}
        </div>

        {themes.length === 0 && (
          <div className="glass card-shadow rounded-2xl p-10 text-center text-slate-400">
            No themes yet.{" "}
            <Link href="/themes" className="text-amber-300 underline underline-offset-4">
              Create one
            </Link>{" "}
            to start building your deck.
          </div>
        )}
      </main>
    </>
  );
}
