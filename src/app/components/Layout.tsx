import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { PageTransition } from "./PageTransition";
import { ScrollToTop } from "./ScrollToTop";
import { CustomCursor } from "./CustomCursor";
import { LoadingScreen } from "./LoadingScreen";

export function Layout() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        <CustomCursor />
        <Navigation />
        <main className="relative">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <ScrollToTop />
      </div>
    </>
  );
}
