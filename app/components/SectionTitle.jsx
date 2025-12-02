export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-500">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
