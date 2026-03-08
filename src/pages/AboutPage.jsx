import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn.jsx";
import HeroBand from "../components/HeroBand.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { aboutPageContent, heroPanels, stats } from "../data/siteData.js";

function AboutPage() {
  return (
    <>
      <HeroBand
        badge={aboutPageContent.hero.badge}
        title={aboutPageContent.hero.title}
        text={aboutPageContent.hero.text}
        ctaPrimary={aboutPageContent.hero.ctaPrimary}
        ctaSecondary={aboutPageContent.hero.ctaSecondary}
        panel={heroPanels.about}
      />

      <section className="page-section">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.88fr]">
          <FadeIn>
            <SectionTitle
              eyebrow={aboutPageContent.story.eyebrow}
              title={aboutPageContent.story.title}
            />
            {aboutPageContent.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base leading-8 text-[var(--ink-700)]">
                {paragraph}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="surface-muted rounded-[2rem] p-8">
              <p className="eyebrow text-[var(--gold-700)]">What You Can Expect</p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--ink-700)]">
                {aboutPageContent.commitments.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[rgba(223,214,199,0.9)] bg-white/[0.72] px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Operating Principles"
            title="The company approach is simple: keep the goal clear, build practically, and stay useful after launch."
            subtitle="These principles guide how Zynovex plans, designs, develops, and supports each project."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {aboutPageContent.principles.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="surface-card h-full rounded-[1.75rem] p-6">
                  <p className="pill-tag bg-[rgba(73,178,165,0.12)] text-[var(--teal-600)]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--midnight-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-700)]">{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container-shell rounded-[2rem] surface-dark px-8 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <FadeIn>
              <SectionTitle
                eyebrow="Business Snapshot"
                title="A startup-focused delivery model built for clarity, speed, and dependable follow-through."
                subtitle="This is the working shape behind Zynovex: focused service coverage, practical communication, and continued support."
                tone="light"
              />
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item, index) => (
                <FadeIn key={item.label} delay={index * 0.08}>
                  <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/[0.66]">
                      {item.label}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.06] px-6 py-5">
              <p className="text-sm leading-7 text-white/[0.76]">{aboutPageContent.closing}</p>
              <Link
                to="/contact"
                className="mt-5 inline-flex rounded-full border border-white/18 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Start an enquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
