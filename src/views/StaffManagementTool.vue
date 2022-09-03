<template>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import NavPill from "./components/NavStaffManTool.vue";

export default {
  name: "StaffManagementTool",
  components: {
    NavPill,
  },
  mounted() {
    setTooltip();
  },
};
</script>
