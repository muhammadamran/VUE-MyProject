import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import ShowKNITID from "@/views/KNITID.vue";
import ShowITID from "@/views/ITID.vue";
import ShowKPIID from "@/views/KPIID.vue";
import CostTracker from "@/views/CostTracker.vue";
import StaffManagementTool from "@/views/StaffManagementTool.vue";
import UsersList from "@/views/UsersList.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/staff-management-tool",
    name: "Staff Management Tool",
    component: StaffManagementTool,
  },
  {
    path: "/KNIT-ID",
    name: "KNIT ID",
    component: ShowKNITID,
  },
  {
    path: "/IT-ID",
    name: "IT ID",
    component: ShowITID,
  },
  {
    path: "/KPI-ID",
    name: "KPI ID",
    component: ShowKPIID,
  },
  {
    path: "/Cost-Tracker",
    name: "Cost Tracker",
    component: CostTracker,
  },
  {
    path: "/users-list",
    name: "Users List",
    component: UsersList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
