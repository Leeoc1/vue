import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import InputText from "../views/InputText.vue";
import inputNumber from "../views/inputNumber.vue";
import TextArea from "../views/TextArea.vue";
import SelectView from "../views/SelectView.vue";
import CheckBox from "../views/CheckBox.vue";
import CheckBox2 from "../views/CheckBox2.vue";
import RadioView from "../views/RadioView.vue";
import AttributeView from "../views/AttributeView.vue";
import ButtonView from "../views/ButtonView.vue";
import ClassView from "../views/ClassView.vue";
import ClassView2 from "../views/ClassView2.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding,
  },
  {
    path: "/inputtext",
    name: "InputText",
    component: InputText,
  },
  {
    path: "/inputnumber",
    name: "inputNumber",
    component: inputNumber,
  },
  {
    path: "/textarea",
    name: "TextArea",
    component: TextArea,
  },
  {
    path: "/select",
    name: "Select",
    component: SelectView,
  },
  {
    path: "/check",
    name: "Check",
    component: CheckBox,
  },
  {
    path: "/check2",
    name: "Check2",
    component: CheckBox2,
  },
  {
    path: "/radio",
    name: "Radio",
    component: RadioView,
  },
  {
    path: "/att",
    name: "Attribute",
    component: AttributeView,
  },
  {
    path: "/button",
    name: "Button",
    component: ButtonView,
  },
  {
    path: "/class",
    name: "Class",
    component: ClassView,
  },
  {
    path: "/class2",
    name: "Class2",
    component: ClassView2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
