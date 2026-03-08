import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function Layout() {

  return (
    <div className="min-h-screen">
      <div className="mesh-bg">
        <header className="site-header sticky top-0 z-30">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <div className="h-12 w-32 overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--glass-strong)] px-3 py-2">
                <img
                  src="/logo.png"
                  alt="Zynovex Technologies"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />
              <Link
                to="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Start a Project
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
              Menu
            </button>
          </div>
          {menuOpen ? (
            <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden">
              <div className="glass-strong mx-6 mt-6 rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                    Navigation
                  </p>
                  <button
                    type="button"
                    className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:border-white/40 hover:bg-white/10"
                    onClick={closeMenu}
                    aria-label="Close menu"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <nav className="mt-6 grid gap-3 text-base font-semibold text-white">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `rounded-2xl border border-white/10 px-4 py-3 transition ${
                          isActive
                            ? "border-white/40 bg-white/10"
                            : "bg-white/5 hover:bg-white/10"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <ThemeToggle />
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </header>
        <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
          {children}
        </main>
        <footer className="border-t border-white/5 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Zynovex Technologies. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <span>hello@zynovex.tech</span>
              <span>Seattle / Austin / Remote</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
