export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.4em] text-white/50">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base text-white/65">{subtitle}</p>
      ) : null}
    </div>
  );
}
