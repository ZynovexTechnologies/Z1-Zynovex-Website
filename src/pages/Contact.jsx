import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";

export default function Contact() {
  return (
    <div className="space-y-16">
      <SectionHeader
        eyebrow="Contact"
        title="Start a Zynovex engagement"
        subtitle="Share your goals and we will assemble the right team within a day."
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="glass rounded-3xl p-8">
          <p className="text-sm text-white/70">
            Email us, request a discovery call, or send a short brief. We focus
            on long-term partnerships with teams that prioritize quality.
          </p>
          <div className="mt-6 space-y-4 text-sm text-white/65">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Email
              </p>
              <p className="mt-2">hello@zynovex.tech</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Availability
              </p>
              <p className="mt-2">Currently booking March-May 2026</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Locations
              </p>
              <p className="mt-2">Seattle / Austin / Remote</p>
            </div>
          </div>
        </div>
        <form className="glass-strong rounded-3xl p-8">
          <div className="grid gap-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
                placeholder="First name"
                aria-label="First name"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
              placeholder="Email address"
              type="email"
              aria-label="Email address"
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
              placeholder="Company / Product"
              aria-label="Company or product"
            />
            <textarea
              className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
              placeholder="Tell us about your project"
              aria-label="Project details"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Submit request
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
