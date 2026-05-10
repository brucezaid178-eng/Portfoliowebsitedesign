import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Achievements } from "./pages/Achievements";
import { Certifications } from "./pages/Certifications";
import { Projects } from "./pages/Projects";
import { Drones } from "./pages/Drones";
import { EVs } from "./pages/EVs";
import { Contact } from "./pages/Contact";
import { SocialService } from "./pages/SocialService";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "achievements", Component: Achievements },
      { path: "certifications", Component: Certifications },
      { path: "projects", Component: Projects },
      { path: "drones", Component: Drones },
      { path: "evs", Component: EVs },
      { path: "contact", Component: Contact },
      { path: "social-service", Component: SocialService },
    ],
  },
]);
