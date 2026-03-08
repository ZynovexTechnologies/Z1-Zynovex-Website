import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="container-shell">
        <div className="surface-card rounded-[2rem] px-8 py-12 text-center md:px-12">
          <p className="eyebrow text-[var(--gold-700)]">Not Found</p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--midnight-900)]">
            This page does not exist.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--ink-700)]">
            The page may have moved or the address may be incorrect. Use the main navigation, return home, or send an enquiry if you were trying to reach Zynovex.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-dark">
              Back to home
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Zynovex
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
