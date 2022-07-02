import Vue from "vue";
import VueRouter from "vue-router";
// Main Pages
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
// Looped Pages
import Project from "../components/Project.vue";
import Service from "../components/Service.vue";
// Nested Pages
import IndexPg from "../views/Page/IndexPg.vue";
import About from "../views/Page/About.vue";
import Faq from "../views/Page/Faq.vue";
import PrivacyPolicy from "../views/Page/PrivacyPolicy.vue";
import Credits from "../views/Page/Credits.vue";
// Error Page
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

// Possibly add General Route Guards
const routes = [
  // Main Pages
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Services",
    name: "Services",
    component: Services,
  },
  // Looped Pages
  {
    path: "/Project/:id",
    name: "Project",
    component: Project,
  },
  {
    path: "/Service/:id",
    name: "Service",
    component: Service,
  },
  // Nested Pages
  {
    path: "/Page/IndexPg",
    name: "IndexPg",
    component: IndexPg,
    children: [
      {
        path: "/About",
        name: "About",
        component: About,
      },
      {
        path: "/Faq",
        name: "Faq",
        component: Faq,
      },
      {
        path: "/PrivacyPolicy",
        name: "PrivacyPolicy",
        component: PrivacyPolicy,
      },
      {
        path: "/Credits",
        name: "Credits",
        component: Credits,
      },
    ],
  },
  // Error Page
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = new VueRouter({
  routes,
  mode: "history",
  //Scroll to top of page for same route & savedPosition
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition nav too last y position if back
      return savedPosition;
    } else {
      //vueRouter Scroll behavior
      return document
        .getElementById("app")
        .scrollIntoView({ behavior: "smooth" });
    }
  },
});

//beforeEach used in naming search engine tab with route
//    to = info of where we are going too
//    from = info of where we came from
//    next = method fired to send to next route
router.beforeEach((to, from, next) => {
  // Use to Check path details if needed console.log(to);
  let documentTitle = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  if (to.params.title) {
    documentTitle += ` - ${to.params.title}`;
  }
  document.title = documentTitle;
  next();
});

export default router;
