const tones = {
  dark: {
    eyebrow: "text-[var(--teal-600)]",
    title: "text-[var(--ink-900)]",
    subtitle: "text-[var(--ink-700)]",
  },
  warm: {
    eyebrow: "text-[var(--gold-700)]",
    title: "text-[var(--ink-900)]",
    subtitle: "text-[var(--ink-700)]",
  },
  light: {
    eyebrow: "text-[var(--teal-200)]",
    title: "text-white",
    subtitle: "text-white/[0.76]",
  },
};

function SectionTitle({ eyebrow, title, subtitle, tone = "dark", className = "" }) {
  const palette = tones[tone] ?? tones.dark;

  return (
    <div className={`section-intro ${className}`}>
      <p className={`eyebrow ${palette.eyebrow}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-balance text-3xl font-semibold md:text-4xl ${palette.title}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-base leading-8 ${palette.subtitle}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}

export default SectionTitle;
