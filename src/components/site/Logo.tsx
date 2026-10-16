export function Logo({ size = "md" }: { size?: "md" | "lg" | "header" }) {
  const barWidth = size === "lg" ? 18 : 20;
  const textSize =
    size === "lg" ? "text-xl" : size === "header" ? "text-[clamp(16px,4.6vw,22px)]" : "text-[22px]";
  const gap = size === "header" ? "gap-2 flex-none" : "gap-2.5";
  return (
    <span className={`flex items-center ${gap} font-bold ${textSize} tracking-[-0.02em]`}>
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
