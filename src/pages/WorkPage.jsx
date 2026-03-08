import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn.jsx";
import HeroBand from "../components/HeroBand.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import {
  caseStudies,
  heroPanels,
  testimonials,
  workPageContent,
  workSignals,
} from "../data/siteData.js";

function WorkPage() {
  return (
    <>
      <HeroBand
        badge={workPageContent.hero.badge}
        title={workPageContent.hero.title}
        text={workPageContent.hero.text}
        ctaPrimary={workPageContent.hero.ctaPrimary}
        ctaSecondary={workPageContent.hero.ctaSecondary}
        panel={heroPanels.work}
      />

      <section className="page-section">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Representative Engagements"
            title="Previous and ongoing projects across startup websites, web apps, and Android products."
            subtitle="Each example focuses on the business need, the build response, and the practical result."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {caseStudies.map((project, index) => (
              <FadeIn key={project.title} delay={(index % 2) * 0.08}>
                <article className="surface-card h-full rounded-[1.75rem] p-6">
                  <p className="pill-tag bg-[rgba(73,178,165,0.12)] text-[var(--teal-600)]">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--midnight-900)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-700)]">{project.summary}</p>
                  <div className="mt-5 rounded-2xl bg-[var(--mist-100)] px-4 py-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-700)]">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--midnight-900)]">
                      {project.result}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow="What Improves"
            title="The strongest projects improve first impression, workflow clarity, and follow-up support."
            subtitle="Zynovex focuses on work that helps the business launch better, operate more cleanly, and keep improving."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {workSignals.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="surface-muted h-full rounded-[1.75rem] p-6">
                  <p className="pill-tag bg-[rgba(214,154,90,0.12)] text-[var(--gold-700)]">
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
        <div className="container-shell">
          <SectionTitle
            eyebrow="Client Feedback"
            title="The work is judged by clarity, usability, and how well support continues after launch."
            subtitle="These are the areas clients tend to value most once a product is live and being used."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="surface-card h-full rounded-[1.75rem] p-6">
                  <p className="pill-tag bg-[rgba(214,154,90,0.12)] text-[var(--gold-700)]">
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
          <FadeIn>
            <SectionTitle
              eyebrow="Next Step"
              title={workPageContent.cta.title}
              subtitle={workPageContent.cta.text}
              tone="light"
            />
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={workPageContent.cta.primary.path} className="btn-primary">
              {workPageContent.cta.primary.label}
            </Link>
            <Link to={workPageContent.cta.secondary.path} className="btn-secondary">
              {workPageContent.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkPage;
