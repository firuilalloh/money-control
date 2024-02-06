/* eslint-disable no-param-reassign */
import { createStore } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap"

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    bootstrap
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector("#app");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    }
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    }
  },
  getters: {}
});
