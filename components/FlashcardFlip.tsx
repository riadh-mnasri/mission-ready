"use client";

import { motion } from "framer-motion";

interface FlashcardFlipProps {
  question: string;
  answer: string;
  flipped: boolean;
  onFlip: () => void;
  accent: string;
}

export default function FlashcardFlip({
  question,
  answer,
  flipped,
  onFlip,
  accent,
}: FlashcardFlipProps) {
  return (
    <div className="perspective mx-auto w-full max-w-xl">
      <motion.button
        type="button"
        onClick={onFlip}
        className="preserve-3d card-shadow relative block h-72 w-full cursor-pointer rounded-3xl text-left focus:outline-none sm:h-80"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass backface-hidden absolute inset-0 flex flex-col justify-between rounded-3xl p-8">
          <span
            className="w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{ background: `${accent}22`, color: accent }}
          >
            Question
          </span>
          <p className="text-xl font-medium leading-snug text-white">{question}</p>
          <span className="text-sm text-slate-400">Tap to reveal the answer</span>
        </div>

        <div
          className="glass backface-hidden absolute inset-0 flex flex-col justify-between rounded-3xl p-8"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            Answer
          </span>
          <p className="text-lg leading-relaxed text-slate-100">{answer}</p>
          <span className="text-sm text-slate-400">Tap to flip back</span>
        </div>
      </motion.button>
    </div>
  );
}
