import SectionHeader from "../components/SectionHeader.jsx";

const values = [
  {
    title: "Precision",
    body: "We obsess over systems thinking, architecture, and long-term maintainability.",
  },
  {
    title: "Momentum",
    body: "Our teams ship on aggressive timelines without compromising reliability.",
  },
  {
    title: "Human-Centric AI",
    body: "Every automation layer is designed to amplify, not replace, your teams.",
  },
];

export default function About() {
  return (
    <div className="space-y-16">
      <SectionHeader
        eyebrow="About"
        title="A studio for builders who demand more"
        subtitle="Zynovex partners with founders, CTOs, and innovation teams to deliver transformative software."
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="glass rounded-3xl p-8">
          <p className="text-sm text-white/70">
            We are a distributed collective of designers, engineers, and AI
            specialists. Our approach blends product strategy with deep
            execution, ensuring your brand feels premium while the platform
            performs flawlessly.
          </p>
          <p className="mt-4 text-sm text-white/70">
            From Fortune 500 modernization to zero-to-one launches, we deploy
            custom systems that scale with your ambition.
          </p>
        </div>
        <div className="glass-strong rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Founded
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">2021</p>
          <p className="mt-2 text-sm text-white/60">Global, remote-first</p>
          <div className="mt-6 grid gap-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">{value.title}</p>
                <p className="mt-2 text-xs text-white/60">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
