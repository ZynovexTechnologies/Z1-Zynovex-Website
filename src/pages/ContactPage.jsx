import { Layers3, Mail, MapPin, Users } from "lucide-react";
import FadeIn from "../components/FadeIn.jsx";
import HeroBand from "../components/HeroBand.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import {
  caseStudies,
  contactDetails,
  contactMethods,
  contactPageContent,
  heroPanels,
  testimonials,
} from "../data/siteData.js";

const iconMap = {
  mail: Mail,
  location: MapPin,
  fit: Users,
  scope: Layers3,
};

function ContactPage() {
  return (
    <>
      <HeroBand
        badge={contactPageContent.hero.badge}
        title={contactPageContent.hero.title}
        text={contactPageContent.hero.text}
        ctaPrimary={contactPageContent.hero.ctaPrimary}
        ctaSecondary={contactPageContent.hero.ctaSecondary}
        panel={heroPanels.contact}
      />

      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <FadeIn>
            <div className="surface-dark rounded-[2rem] p-8 text-white md:p-10">
              <SectionTitle
                eyebrow="Direct Contact"
                title="Use the fastest route for a serious project conversation."
                subtitle={contactDetails.responseWindow}
                tone="light"
              />
              <div className="mt-6 space-y-4">
                {contactMethods.map((item) => {
                  const Icon = iconMap[item.icon];

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-[1.5rem] border border-white/10 bg-white/[0.06] px-5 py-4 transition hover:bg-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="mt-1 text-[var(--teal-200)]" />
                        <div>
                          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--teal-200)]">
                            {item.label}
                          </p>
                          <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                          <p className="mt-1 text-sm leading-6 text-white/[0.72]">{item.note}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] px-5 py-4"
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="mt-1 text-[var(--teal-200)]" />
                        <div>
                          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--teal-200)]">
                            {item.label}
                          </p>
                          <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                          <p className="mt-1 text-sm leading-6 text-white/[0.72]">{item.note}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="surface-muted rounded-[2rem] p-8 md:p-10">
              <SectionTitle
                eyebrow="Project Brief"
                title="The best enquiry emails make the scope easy to understand."
                subtitle="Include the points below and we can respond with something practical instead of sending a vague questionnaire."
                tone="warm"
              />
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--ink-700)]">
                {contactPageContent.checklist.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[rgba(223,214,199,0.9)] bg-white/[0.72] px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[1.75rem] bg-[var(--mist-100)] px-5 py-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-700)]">
                  Suggested opening line
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--midnight-900)]">
                  {contactPageContent.mailPrompt}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${contactDetails.email}`} className="btn-dark">
                  Email Zynovex
                </a>
                <a
                  href={`mailto:${contactDetails.email}?subject=Project%20Enquiry`}
                  className="btn-outline"
                >
                  Use project subject
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Previous And Ongoing Projects"
            title="Recent work and live support that show the kind of enquiries Zynovex handles."
            subtitle="From websites to web apps and Android delivery, the focus stays on usable systems and visible business improvement."
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
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-700)]">
                    {project.summary}
                  </p>
                  <div className="mt-5 rounded-2xl bg-[var(--mist-100)] px-4 py-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-700)]">
                      Result
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
            eyebrow="Client Feedback"
            title="Clients usually value clarity, responsiveness, and support after launch."
            subtitle="These feedback themes reflect what strong delivery looks like once the product starts being used."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
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
            eyebrow="Service Enquiry Types"
            title="Most enquiries fall into website creation, web app development, or Android app work."
            subtitle="If your requirement fits one of these, email the scope and target timeline so we can reply with the right next step."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {contactPageContent.supportCards.map((item, index) => (
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
    </>
  );
}

export default ContactPage;
