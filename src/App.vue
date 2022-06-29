<template>
  <v-app fluid>
    <Sidebar v-if="reveal" />
    <NavDrawer />

    <v-main>
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>
    </v-main>

    <v-footer class="white" padless><Footer /> </v-footer>
  </v-app>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity;
  transition-timing-function: ease-in-out;
  overflow: 0.25;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
import "./styles/global.scss";
import { mapState } from "vuex";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import NavDrawer from "@/components/NavDrawer.vue";

export default {
  name: "App",
  data() {
    return {
      prevHeight: 0,
    };
  },
  components: {
    Footer,
    NavDrawer,
    Sidebar,
  },
  computed: {
    ...mapState({
      reveal: (state) => state.reveal,
    }),
  },
  //Everything in methods for nav transitions
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
};
</script>
