import { Bot, Braces, Database, Layers3, Rocket, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import CapabilityCard from "../components/CapabilityCard.jsx";
import FadeIn from "../components/FadeIn.jsx";
import HeroBand from "../components/HeroBand.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import {
  caseStudies,
  coreServices,
  heroPanels,
  homeHighlights,
  homePageContent,
  stats,
} from "../data/siteData.js";

const iconMap = {
  strategy: Rocket,
  design: Layers3,
  engineering: Braces,
  ai: Bot,
  platform: Database,
  delivery: ShieldCheck,
};

function HomePage() {
  const featuredServices = coreServices.slice(0, 4);
  const featuredWork = caseStudies.slice(0, 3);

  return (
    <>
      <HeroBand
        badge={homePageContent.hero.badge}
        title={homePageContent.hero.title}
        text={homePageContent.hero.text}
        ctaPrimary={homePageContent.hero.ctaPrimary}
        ctaSecondary={homePageContent.hero.ctaSecondary}
        panel={heroPanels.home}
      />

      <section className="page-section">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <SectionTitle
              eyebrow={homePageContent.intro.eyebrow}
              title={homePageContent.intro.title}
              subtitle={homePageContent.intro.text}
            />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {homeHighlights.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.08}
                className={index === 2 ? "sm:col-span-2" : ""}
              >
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
        <div className="container-shell">
          <SectionTitle
            eyebrow="Core Services"
            title="Services built around launch, product use, and post-launch growth."
            subtitle="Zynovex covers website creation, custom web apps, Android development, and the planning or support work that keeps delivery clean."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service, index) => (
              <FadeIn key={service.title} delay={(index % 4) * 0.08}>
                <CapabilityCard
                  icon={iconMap[service.icon]}
                  eyebrow={service.eyebrow}
                  title={service.title}
                  body={service.body}
                  footer={service.footer}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <FadeIn>
              <SectionTitle
                eyebrow="Representative Work"
                title="Recent project examples across websites, web apps, and Android delivery."
                subtitle="Selected project highlights focused on stronger launch credibility, cleaner operations, and support after release."
              />
            </FadeIn>
            <Link to="/work" className="btn-outline">
              See more work
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredWork.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="surface-muted h-full rounded-[1.75rem] p-6">
                  <p className="pill-tag bg-[rgba(73,178,165,0.12)] text-[var(--teal-600)]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--midnight-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-700)]">{item.summary}</p>
                  <p className="mt-5 text-sm font-semibold text-[var(--gold-700)]">{item.result}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell rounded-[2rem] surface-dark px-8 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <FadeIn>
              <SectionTitle
                eyebrow="Delivery Process"
                title="A simple workflow for startups that need speed without confusion."
                subtitle="The process stays business-first: understand the goal, define the right screens and features, build what matters, and keep improving after launch."
                tone="light"
              />
            </FadeIn>

            <div className="grid gap-4">
              {homePageContent.process.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--teal-200)]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/[0.74]">{item.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>

      <section className="page-section pt-0">
        <div className="container-shell">
          <FadeIn>
            <div className="surface-muted rounded-[2rem] px-8 py-10 md:px-12 md:py-12">
              <SectionTitle
                eyebrow="Start A Project"
                title={homePageContent.cta.title}
                subtitle={homePageContent.cta.text}
                tone="warm"
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to={homePageContent.cta.primary.path} className="btn-dark">
                  {homePageContent.cta.primary.label}
                </Link>
                <Link to={homePageContent.cta.secondary.path} className="btn-outline">
                  {homePageContent.cta.secondary.label}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default HomePage;
