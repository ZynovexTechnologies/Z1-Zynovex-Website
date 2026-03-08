import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fallbackPanel = {
  eyebrow: "Working Model",
  title: "Strategy, interface quality, engineering discipline, and AI delivery in one partner model.",
  points: [
    "Clear scope before serious build work starts",
    "Product UI systems designed for real-world use",
    "Measured AI adoption tied to workflow outcomes",
  ],
};

function HeroBand({ badge, title, text, ctaPrimary, ctaSecondary, panel }) {
  const panelContent = panel ?? fallbackPanel;

  return (
    <section className="hero-grid overflow-hidden pb-16 pt-24 text-white md:pb-20 md:pt-28">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="pill-tag mb-5 border border-white/25 bg-white/10 text-white/90">
            {badge}
          </p>
          <h1 className="text-balance max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.82] md:text-lg">
            {text}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={ctaPrimary.path} className="btn-primary">
              {ctaPrimary.label}
            </Link>
            {ctaSecondary ? (
              <Link to={ctaSecondary.path} className="btn-secondary">
                {ctaSecondary.label}
              </Link>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          className="glass-card grid-accent relative rounded-[2rem] border border-white/18 p-8 text-[var(--ink-900)] md:p-10"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="eyebrow text-[var(--teal-600)]">{panelContent.eyebrow}</p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-[var(--ink-900)]">
            {panelContent.title}
          </h2>
          <div className="mt-6 grid gap-3">
            {panelContent.points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[rgba(20,34,56,0.08)] bg-white/[0.72] px-4 py-3 text-sm leading-7 text-[var(--ink-700)]"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBand;
