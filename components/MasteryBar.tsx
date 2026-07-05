interface MasteryBarProps {
  ratio: number;
  color?: string;
}

export default function MasteryBar({ ratio, color = "#f0b429" }: MasteryBarProps) {
  const pct = Math.round(ratio * 100);

  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-[width] duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="w-9 text-right text-xs font-medium text-slate-400">{pct}%</span>
    </div>
  );
}
