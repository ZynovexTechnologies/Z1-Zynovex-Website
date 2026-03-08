import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, body, accent }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileFocus={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="border-beam glass flex h-full flex-col gap-4 rounded-3xl p-6 text-left outline-none"
      tabIndex={0}
      aria-label={title}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accent}55, transparent 70%)`,
        }}
      >
        {Icon ? (
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="h-6 w-6 text-white/90" aria-hidden="true" />
          </motion.div>
        ) : null}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/65">{body}</p>
      </div>
      <div className="mt-auto text-xs uppercase tracking-[0.3em] text-white/40">
        Zynovex Systems
      </div>
    </motion.article>
  );
}
