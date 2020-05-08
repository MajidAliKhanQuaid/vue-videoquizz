import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
// import Qa from "@/components/Qa";
import Practice from "@/components/Practice";
import Courses from "@/components/Courses";
import Quizz from "@/components/Quizz";
import Certificates from "@/components/Certificates";

Vue.use(Router);
export default new Router({
  routes: [
    // {
    //   path: "/",
    //   component: Vue.component("main", {
    //     render() {
    //       return (
    //         <div>
    //           <h1>Hey! Welcome to JSX</h1>
    //         </div>
    //       );
    //     },
    //   }),
    // },
    // ,
    { path: "/", component: Welcome },
    { path: "/courses", component: Courses },
    { path: "/quizz", component: Quizz },
    { path: "/certificates", component: Certificates },
    { path: "/practice", component: Practice },
  ],
});
