import Home from "pages/Home";
import News from "pages/News";
import Lore from "pages/Lore";
import Music from "pages/Music";
import Mascots from "pages/Mascots";
import Quiz from "pages/Quiz";
import Achievements from "pages/Achievements";
import Customization from "pages/Customization";
import NotFound from "pages/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    exact: true,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/lore",
    name: "Lore",
    component: Lore,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/mascots",
    name: "Interactive Mascots",
    component: Mascots,
  },
  {
    path: "/quiz",
    name: "Quizzes & Games",
    component: Quiz,
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: Achievements,
  },
  {
    path: "/customization",
    name: "Customization",
    component: Customization,
  },
  {
    path: "*",
    name: "Not Found",
    component: NotFound,
  },
];

export default routes;
