<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          NAVIGATION
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Dashboard" :to="{ name: 'Dashboard' }">
          <template #icon>
            <Shop />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Tables" :to="{ name: 'Tables' }">
          <template #icon>
            <Office />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Billing" :to="{ name: 'Billing' }">
          <template #icon>
            <CreditCard />
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          SHARED
        </h6>
      </li>
      <!-- Staff Management Tools V1 -->
      <li class="nav-item">
        <sidenav-collapse navText="Staff Man. Tool" :to="{ name: 'Staff Management Tool' }">
          <template #icon>
            <StaffManTool />
          </template>
        </sidenav-collapse>
      </li>
      <!-- KNIT-ID -->
      <li class="nav-item">
        <sidenav-collapse navText="KNIT - ID Note" :to="{ name: 'KNIT ID' }">
          <template #icon>
            <StaffManTool />
          </template>
        </sidenav-collapse>
      </li>
      <!-- ITID-Asset List -->
      <li class="nav-item">
        <sidenav-collapse navText="ITID - Asset List" :to="{ name: 'IT ID' }">
          <template #icon>
            <StaffManTool />
          </template>
        </sidenav-collapse>
      </li>
      <!-- KPI Progress ID -->
      <li class="nav-item">
        <sidenav-collapse navText="KPI Progress ID" :to="{ name: 'KPI ID' }">
          <template #icon>
            <StaffManTool />
          </template>
        </sidenav-collapse>
      </li>
      <!-- Cost Tracker 2021-2022 -->
      <li class="nav-item">
        <sidenav-collapse navText="Cost Tracker" :to="{ name: 'Cost Tracker' }">
          <template #icon>
            <StaffManTool />
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          ADMINISTRATOR TOOLS
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Users List" :to="{ name: 'Users List' }">
          <template #icon>
            <UsersList />
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import Shop from "../../components/Icon/Shop.vue";
import Office from "../../components/Icon/Office.vue";
import CreditCard from "../../components/Icon/CreditCard.vue";
import UsersList from "../../components/Icon/CustomerSupport.vue";
import StaffManTool from "../../components/Icon/Document.vue";

export default {
 
  components: {
    SidenavCollapse,
    Shop,
    Office,
    CreditCard,
    UsersList,
    StaffManTool,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
