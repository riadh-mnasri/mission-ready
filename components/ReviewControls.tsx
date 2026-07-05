"use client";

import { motion } from "framer-motion";

interface ReviewControlsProps {
  visible: boolean;
  onKnew: () => void;
  onMissed: () => void;
}

export default function ReviewControls({ visible, onKnew, onMissed }: ReviewControlsProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto mt-6 flex max-w-xl gap-3"
    >
      <button
        type="button"
        onClick={onMissed}
        className="flex-1 rounded-2xl border border-rose-400/25 bg-rose-400/10 px-5 py-3.5 font-semibold text-rose-300 transition-colors hover:bg-rose-400/20"
      >
        I did not know it
      </button>
      <button
        type="button"
        onClick={onKnew}
        className="flex-1 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 px-5 py-3.5 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-transform hover:scale-[1.02]"
      >
        I knew it
      </button>
    </motion.div>
  );
}
