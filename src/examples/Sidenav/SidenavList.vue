<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="mt-3 nav-item"></li>
      <li class="nav-item">
        <sidenav-item
          url="/sales"
          :class="getRoute() === 'sales' ? 'active' : ''"
          :navText="'Sales'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-lg opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/purchase"
          :class="getRoute() === 'purchase' ? 'active' : ''"
          :navText="'Purchase'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-money-coins text-warning text-lg opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/warehouse"
          :class="getRoute() === 'warehouse' ? 'active' : ''"
          :navText="'Warehouse'"
        >
          <template v-slot:icon>
            <i class="ni ni-shop text-warning text-lg opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/manufacturing"
          :class="getRoute() === 'manufacturing' ? 'active' : ''"
          :navText="'Manufacturing'"
        >
          <template v-slot:icon>
            <i class="ni ni-planet text-warning text-lg opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/inventory"
          :class="getRoute() === 'inventory' ? 'active' : ''"
          :navText="'Inventory'"
        >
          <template v-slot:icon>
            <i class="ni ni-app text-warning text-lg opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/sad"
          :class="getRoute() === 'shipping and sad' ? 'active' : ''"
          :navText="'Shipping And Distribution'"
        >
          <template v-slot:icon>
            <i class="ni ni-box-2 text-warning text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/finance"
          :class="getRoute() === 'finance' ? 'active' : ''"
          :navText="'Finance'"
        >
          <template v-slot:icon>
            <i class="ni ni-credit-card text-warning text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavItem,
    SidenavCard,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
