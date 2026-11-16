"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Slice = { label: string; value: number; color: string };

type DonutChartProps = {
  title: string;
  slices: Slice[];
  size?: number;
};

const RADIUS = 70;
const STROKE = 22;
const CIRC = 2 * Math.PI * RADIUS;

export default function DonutChart({ title, slices, size = 220 }: DonutChartProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const total = slices.reduce((sum, s) => sum + s.value, 0);

  const prefixSums = slices.reduce<number[]>((acc, s, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + slices[i - 1].value);
    return acc;
  }, []);

  const segments = slices.map((s, i) => {
    const fraction = s.value / total;
    const dash = fraction * CIRC;
    return {
      ...s,
      dash,
      gap: CIRC - dash,
      rotation: (prefixSums[i] / total) * 360,
      index: i,
      pct: Math.round(fraction * 100),
    };
  });

  const active = hovered !== null ? segments[hovered] : null;

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs uppercase tracking-wide text-white/60 font-semibold mb-4 text-center">
        {title}
      </p>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 160 160"
          width={size}
          height={size}
          className="-rotate-90"
        >
          <circle
            cx="80"
            cy="80"
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            className="text-white/10"
            strokeWidth={STROKE}
          />
          {segments.map((s) => (
            <motion.circle
              key={s.label}
              cx="80"
              cy="80"
              r={RADIUS}
              fill="none"
              stroke={s.color}
              strokeWidth={hovered === s.index ? STROKE + 6 : STROKE}
              strokeDasharray={`${s.dash} ${s.gap}`}
              strokeDashoffset={0}
              style={{ rotate: `${s.rotation}deg`, transformOrigin: "80px 80px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: hovered === null || hovered === s.index ? 1 : 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHovered(s.index)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer transition-all duration-200"
              strokeLinecap="round"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <motion.span
            key={active ? active.label : "total"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="font-serif text-2xl text-white font-bold"
          >
            {active ? `${active.pct}%` : total}
          </motion.span>
          <span className="text-[11px] text-white/50 mt-1 leading-tight">
            {active ? active.label : "menciones totales"}
          </span>
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-5 max-w-[240px]">
        {segments.map((s) => (
          <li
            key={s.label}
            onMouseEnter={() => setHovered(s.index)}
            onMouseLeave={() => setHovered(null)}
            className={`flex items-center gap-1.5 text-xs cursor-pointer transition-opacity duration-200 ${
              hovered !== null && hovered !== s.index ? "opacity-40" : "opacity-100"
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: s.color }}
              aria-hidden="true"
            />
            <span className="text-white/75">{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
