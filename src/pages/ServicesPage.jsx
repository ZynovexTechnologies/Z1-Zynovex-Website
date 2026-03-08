import { Bot, Braces, Database, Layers3, Rocket, ShieldCheck } from "lucide-react";
import CapabilityCard from "../components/CapabilityCard.jsx";
import FadeIn from "../components/FadeIn.jsx";
import HeroBand from "../components/HeroBand.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import {
  coreServices,
  deliveryLanes,
  engagementModels,
  heroPanels,
  servicesPageContent,
} from "../data/siteData.js";

const iconMap = {
  strategy: Rocket,
  design: Layers3,
  engineering: Braces,
  ai: Bot,
  platform: Database,
  delivery: ShieldCheck,
};

function ServicesPage() {
  return (
    <>
      <HeroBand
        badge={servicesPageContent.hero.badge}
        title={servicesPageContent.hero.title}
        text={servicesPageContent.hero.text}
        ctaPrimary={servicesPageContent.hero.ctaPrimary}
        ctaSecondary={servicesPageContent.hero.ctaSecondary}
        panel={heroPanels.services}
      />

      <section className="page-section">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Service Lines"
            title="Core services for startups that need more than just design or just code."
            subtitle="Zynovex combines product thinking, design, development, and support across website creation, web apps, Android delivery, and integrations."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service, index) => (
              <FadeIn key={service.title} delay={(index % 3) * 0.08}>
                <CapabilityCard
                  icon={iconMap[service.icon]}
                  eyebrow={service.eyebrow}
                  title={service.title}
                  body={service.body}
                  footer={service.footer}
                  tone={index % 2 === 0 ? "default" : "muted"}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Build Coverage"
            title="From first impression to day-to-day product workflows."
            subtitle="Public-facing websites and internal product systems are handled together so the business story and the actual software stay aligned."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {deliveryLanes.map((lane, index) => (
              <FadeIn key={lane.title} delay={index * 0.08}>
                <article className="surface-card rounded-[1.75rem] p-6">
                  <p className="pill-tag bg-[rgba(214,154,90,0.12)] text-[var(--gold-700)]">
                    {lane.eyebrow}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--midnight-900)]">
                    {lane.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-700)]">{lane.text}</p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--ink-700)]">
                    {lane.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-[rgba(223,214,199,0.9)] bg-white/[0.72] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
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
                eyebrow="Engagement Models"
                title="Pick the working model that matches your product stage."
                subtitle="Some clients need a full new build. Others need a revamp or steady support for a live product."
                tone="light"
              />
            </FadeIn>
            <div className="grid gap-4">
              {engagementModels.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <CapabilityCard
                    icon={iconMap[item.icon]}
                    eyebrow={item.eyebrow}
                    title={item.title}
                    body={item.text}
                    footer={item.footer}
                    tone="dark"
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
