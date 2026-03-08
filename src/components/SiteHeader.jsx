import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { companyProfile, contactDetails, navLinks } from "../data/siteData.js";

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(223,214,199,0.9)] bg-[rgba(248,245,238,0.92)] backdrop-blur-xl">
      <div className="border-b border-white/10 bg-[var(--midnight-950)] text-[0.76rem] text-white/[0.78]">
        <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-2.5">
          <a href={`mailto:${contactDetails.email}`} className="transition hover:text-white">
            {contactDetails.email}
          </a>
          <p className="hidden md:block">{companyProfile.region}</p>
        </div>
      </div>

      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Zynovex Technologies logo"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-xl border border-[rgba(20,34,56,0.12)] bg-white/80 p-2.5 text-[var(--midnight-900)] lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[var(--midnight-900)] lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition hover:text-[var(--gold-700)] ${
                  isActive ? "text-[var(--gold-700)]" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-dark min-w-[9rem] px-5 py-2.5">
            Start an enquiry
          </Link>
        </nav>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[rgba(223,214,199,0.9)] bg-[rgba(248,245,238,0.96)] px-4 pb-5 pt-2 lg:hidden">
          <div className="container-shell space-y-2 px-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-[var(--sand-100)] text-[var(--gold-700)]"
                      : "text-[var(--midnight-900)] hover:bg-[var(--sand-50)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-dark mt-3 w-full">
              Start an enquiry
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default SiteHeader;
