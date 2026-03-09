import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
}

export default SiteLayout;
