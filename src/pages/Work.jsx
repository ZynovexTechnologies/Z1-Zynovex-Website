import SectionHeader from "../components/SectionHeader.jsx";

const projects = [
  {
    name: "Aurora Finance",
    focus: "AI-assisted portfolio intelligence",
    result: "Reduced analyst research time by 41% with real-time synthesis.",
  },
  {
    name: "Helios Health",
    focus: "Patient experience redesign",
    result: "Improved patient onboarding completion by 2.3x.",
  },
  {
    name: "Vanta Mobility",
    focus: "Fleet management platform",
    result: "Scaled to 120k vehicles with 99.99% uptime.",
  },
];

export default function Work() {
  return (
    <div className="space-y-16">
      <SectionHeader
        eyebrow="Work"
        title="Proof that vision and execution can coexist"
        subtitle="A few snapshots of what our teams build when ambition meets a disciplined delivery engine."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              {project.focus}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-4 text-sm text-white/65">{project.result}</p>
            <div className="mt-6 h-28 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10" />
          </div>
        ))}
      </div>
      <div className="glass-strong rounded-3xl p-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Innovation Lab
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Rapid experiments, measurable outcomes
            </h3>
            <p className="mt-3 text-sm text-white/65">
              Our internal R&D cell ships prototypes every week. The best ones
              become production-ready accelerators for client teams.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-white/60">
            <li>AI copilots for ops and support teams</li>
            <li>Secure vector search for private knowledge</li>
            <li>Edge-ready dashboards for real-time systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
