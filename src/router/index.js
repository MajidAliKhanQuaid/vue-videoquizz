import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/pages/Welcome";
// import Qa from "@/components/Qa";
import Practice from "@/pages/Practice";
import Courses from "@/pages/Courses";
import Course from "@/pages/Course";
import CourseQuizz from "@/pages/CourseQuizz";
import Quizz from "@/pages/Quizz";
import Certificates from "@/pages/Certificates";
import AnswerSheet from "@/pages/AnswerSheet";

Vue.use(Router);
export default new Router({
  mode: "history",
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
    { name: "Home", path: "/", component: Welcome },
    {
      name: "CourseQuizz",
      path: "/course/:id/quizz",
      component: CourseQuizz,
    },
    { name: "AnswerSheet", path: "/answersheet", component: AnswerSheet },
    { name: "Course", path: "/course/:id", component: Course },
    { name: "CourseList", path: "/courses", component: Courses },
    { name: "QuizzList", path: "/quizz", component: Quizz },
    { name: "CertificateList", path: "/certificates", component: Certificates },
    { name: "Practice", path: "/practice", component: Practice },
    {
      path: "*",
      component: Vue.component("NotFound", {
        render() {
          return <h1>404 ! Not Found</h1>;
        },
      }),
    },
  ],
});
