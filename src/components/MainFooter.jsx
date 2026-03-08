import { Link } from "react-router-dom";
import {
  companyProfile,
  contactDetails,
  coreServices,
  navLinks,
} from "../data/siteData.js";

function MainFooter() {
  return (
    <footer className="mt-16 bg-[var(--midnight-950)] pt-16 text-white">
      <div className="container-shell grid gap-10 pb-12 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-[var(--teal-200)]">
            {companyProfile.name}
          </p>
          <h2 className="mt-4 max-w-sm text-2xl font-semibold leading-tight">
            {companyProfile.tagline}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/[0.74]">
            {companyProfile.summary}
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Start an enquiry
          </Link>
        </div>

        <div>
          <h3 className="text-base font-semibold">Quick Links</h3>
          <div className="mt-4 space-y-3 text-sm text-white/[0.74]">
            {navLinks.map((item) => (
              <Link key={item.path} to={item.path} className="block transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold">Service Focus</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/[0.74]">
            {coreServices.slice(0, 4).map((item) => (
              <Link key={item.title} to="/services" className="transition hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold">Contact</h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-white/[0.74]">
            <a href={`mailto:${contactDetails.email}`} className="block transition hover:text-white">
              {contactDetails.email}
            </a>
            <p>{contactDetails.location}</p>
            <p className="text-[var(--teal-200)]">{contactDetails.responseWindow}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/[0.58]">
        Copyright {new Date().getFullYear()} Zynovex Technologies. All rights reserved.
      </div>
    </footer>
  );
}

export default MainFooter;
