import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Braces, Cpu, Smartphone } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    title: "Custom Web Apps",
    body: "High-performance platforms built for scale, security, and clarity from day one.",
    icon: Braces,
    accent: "rgba(127, 90, 240, 1)",
  },
  {
    title: "Android Support",
    body: "Native Kotlin expertise with modern UX patterns and ruthless performance tuning.",
    icon: Smartphone,
    accent: "rgba(76, 224, 255, 1)",
  },
  {
    title: "AI Integrations",
    body: "Bring automation and intelligence into your workflows with safe, guided adoption.",
    icon: Cpu,
    accent: "rgba(180, 109, 255, 1)",
  },
];

const techStack = [
  "React",
  "Node.js",
  "Kotlin",
  "Python",
  "PostgreSQL",
  "Supabase",
  "AWS",
  "Framer Motion",
  "Tailwind CSS",
  "Figma",
  "Docker",
];

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p
            variants={heroItem}
            className="text-xs uppercase tracking-[0.4em] text-white/50"
          >
            Zynovex Technologies
          </motion.p>
          <motion.h1
            variants={heroItem}
            className="text-4xl font-semibold leading-tight text-white md:text-5xl"
          >
            Build AI-ready platforms with the polish of Apple and the ambition
            of cyberpunk.
          </motion.h1>
          <motion.p variants={heroItem} className="text-lg text-white/65">
            We design and engineer premium digital experiences for teams that
            want bold aesthetics without sacrificing usability, accessibility, or
            speed.
          </motion.p>
          <motion.div variants={heroItem} className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </motion.div>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="glass-strong rounded-3xl p-6">
            <p className="text-sm text-white/60">AI Core</p>
            <div className="mt-6 flex items-center justify-center">
              <div className="ai-core">
                <div className="core-inner" />
              </div>
            </div>
            <p className="mt-6 text-sm text-white/65">
              Adaptive intelligence layers calibrated to your workflows.
            </p>
          </div>
          <div className="glass rounded-3xl p-6">
            <p className="text-sm text-white/60">Performance</p>
            <p className="mt-4 text-3xl font-semibold">99.98%</p>
            <p className="mt-2 text-sm text-white/65">
              Uptime and reliability for mission-critical products.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Response
                </p>
                <p className="mt-2 text-xl font-semibold">90ms</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Launch Cycle
                </p>
                <p className="mt-2 text-xl font-semibold">6 weeks</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl p-6 sm:col-span-2">
            <p className="text-sm text-white/60">Vision</p>
            <p className="mt-3 text-lg text-white/70">
              A modular product studio built for the next decade of digital
              transformation. We combine human-centered design, AI tooling, and
              full-stack engineering.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Services"
          title="Full-spectrum product engineering"
          subtitle="From discovery to deployment, we orchestrate every layer of modern software delivery."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8 md:p-10">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Built with the tools your teams already trust"
          subtitle="A curated mix of modern frameworks, infrastructure, and UX systems."
        />
        <div className="overflow-hidden">
          <div className="flex gap-8">
            <div className="marquee">
              {techStack.concat(techStack).map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something that feels inevitable"
            subtitle="Tell us about your product vision. We will respond within 24 hours."
          />
          <div className="grid gap-4 text-sm text-white/65 md:grid-cols-2">
            <div className="glass rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Response Time
              </p>
              <p className="mt-2 text-lg text-white">Under 24 hours</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Engagement
              </p>
              <p className="mt-2 text-lg text-white">Global, remote-first</p>
            </div>
          </div>
        </div>
        <form className="glass-strong rounded-3xl p-6">
          <div className="grid gap-4">
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
              placeholder="Name"
              aria-label="Name"
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
              placeholder="Email"
              type="email"
              aria-label="Email"
            />
            <textarea
              className="h-28 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
              placeholder="Project details"
              aria-label="Project details"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Send request
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
