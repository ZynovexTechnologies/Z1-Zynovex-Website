import { Cpu, Layers, Rocket, Shield } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

const offerings = [
  {
    title: "Product Strategy",
    body: "Roadmaps, technical audits, and platform architecture aligned to your business model.",
    icon: Rocket,
    accent: "rgba(127, 90, 240, 1)",
  },
  {
    title: "Experience Design",
    body: "Interface systems and design languages built for clarity, delight, and conversion.",
    icon: Layers,
    accent: "rgba(76, 224, 255, 1)",
  },
  {
    title: "AI + Automation",
    body: "LLM tooling, workflow intelligence, and data integration with responsible guardrails.",
    icon: Cpu,
    accent: "rgba(180, 109, 255, 1)",
  },
  {
    title: "Security & Scale",
    body: "Infrastructure hardening, compliance-ready deployments, and observability stacks.",
    icon: Shield,
    accent: "rgba(127, 90, 240, 1)",
  },
];

export default function Services() {
  return (
    <div className="space-y-16">
      <SectionHeader
        eyebrow="Services"
        title="Capabilities for every stage of growth"
        subtitle="From early prototypes to enterprise-scale platforms, Zynovex adapts to your timeline."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {offerings.map((offer) => (
          <ServiceCard key={offer.title} {...offer} />
        ))}
      </div>
      <div className="glass rounded-3xl p-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["0-1 Build", "Launch in 6-10 weeks with our embedded sprint team."],
            ["Modernization", "Refactor legacy stacks without disrupting users."],
            ["AI Enablement", "Ship intelligent features with measured risk."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-2 text-sm text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
