export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const barWidth = size === "lg" ? 18 : 20;
  const textSize = size === "lg" ? "text-xl" : "text-[22px]";
  return (
    <span className={`flex items-center gap-2.5 font-bold ${textSize} tracking-[-0.02em]`}>
      <span className="flex flex-col items-center gap-[2px]" style={{ width: barWidth }}>
        <span
          className="block rounded-t-[10px] bg-gold"
          style={{ width: barWidth, height: barWidth / 2 }}
        />
        <span className="block h-[3px] rounded bg-ink" style={{ width: barWidth }} />
        <span className="block h-[3px] rounded bg-ink" style={{ width: barWidth * 0.8 }} />
      </span>
      kossiarou
    </span>
  );
}
