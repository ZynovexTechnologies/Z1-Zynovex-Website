import { motion } from "framer-motion";

const tones = {
  default: {
    container: "surface-card",
    badge: "bg-[rgba(73,178,165,0.12)] text-[var(--teal-600)]",
    iconWrap: "border-[rgba(31,49,72,0.08)] bg-[var(--mist-100)]",
    icon: "text-[var(--midnight-900)]",
    title: "text-[var(--midnight-900)]",
    body: "text-[var(--ink-700)]",
    footer: "text-[var(--ink-500)]",
  },
  muted: {
    container: "surface-muted",
    badge: "bg-[rgba(214,154,90,0.12)] text-[var(--gold-700)]",
    iconWrap: "border-[rgba(31,49,72,0.08)] bg-white/[0.72]",
    icon: "text-[var(--midnight-900)]",
    title: "text-[var(--midnight-900)]",
    body: "text-[var(--ink-700)]",
    footer: "text-[var(--ink-500)]",
  },
  dark: {
    container: "border border-white/10 bg-white/[0.06]",
    badge: "bg-white/10 text-[var(--teal-200)]",
    iconWrap: "border-white/10 bg-white/[0.08]",
    icon: "text-[var(--teal-200)]",
    title: "text-white",
    body: "text-white/[0.74]",
    footer: "text-white/[0.56]",
  },
};

function CapabilityCard({ icon: Icon, eyebrow, title, body, footer, tone = "default" }) {
  const palette = tones[tone] ?? tones.default;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`${palette.container} flex h-full flex-col gap-4 rounded-[1.75rem] p-6 text-left`}
    >
      <div className={`pill-tag w-fit ${palette.badge}`}>{eyebrow}</div>
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${palette.iconWrap}`}>
        {Icon ? <Icon className={`h-5 w-5 ${palette.icon}`} aria-hidden="true" /> : null}
      </div>
      <div>
        <h3 className={`text-xl font-semibold ${palette.title}`}>{title}</h3>
        <p className={`mt-3 text-sm leading-7 ${palette.body}`}>{body}</p>
      </div>
      {footer ? (
        <div className={`mt-auto text-xs font-semibold uppercase tracking-[0.18em] ${palette.footer}`}>
          {footer}
        </div>
      ) : null}
    </motion.article>
  );
}

export default CapabilityCard;
