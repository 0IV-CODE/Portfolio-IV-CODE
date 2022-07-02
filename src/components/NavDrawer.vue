<template>
  <div>
    <!-- Side Left Pill -->
    <!-- lg-xl -->
    <v-navigation-drawer
      mini-variant-width="70"
      expand-on-hover
      class="transparent mt-14 ml-5 rounded-pill d-none d-lg-flex"
      app
    >
      <v-card height="600" class="black rounded-pill pr-2" align="center">
        <v-divider class="my-16 transparent"></v-divider>
        <v-app-bar-nav-icon link to="/">
          <v-avatar class="ml-2">
            <img
              width="45"
              height="45"
              src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451"
              alt="Portfolio Logo - Wolf"
            />
          </v-avatar>
        </v-app-bar-nav-icon>
        <!-- Main Nav  -->
        <v-row>
          <v-col cols="12" v-if="hideMainMenu">
            <v-list class="transparent" v-if="mainNav" dense>
              <v-list-item
                v-for="item in mainMenu"
                :key="item.title"
                class="ma-4 hovcolor rounded-pill"
                link
                :to="`${item.page}`"
              >
                <v-list-item-icon>
                  <v-icon color="blue" size="35">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title
                    v-on:click="`${item.action}`"
                    class="blue--text text-h6"
                  >
                    <b>{{ item.title }}</b>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- Nested PG's Action -->
              <v-list-item
                class="ma-4 hovcolor rounded-pill"
                @click="activateRevInner()"
              >
                <v-list-item-icon>
                  <v-icon color="blue" size="35"
                    >mdi-information-outline</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-title class="blue--text text-h6"
                  >More</v-list-item-title
                >
                <v-list-item-icon>
                  <v-icon color="blue">mdi-chevron-right</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-col>
          <!-- Nested PG's Sub-Menu -->
          <v-col v-if="revInner" cols="12" align="center">
            <v-list nav dense>
              <v-list-item
                class="ma-4 hovcolor rounded-pill"
                @click="activateRevInner()"
              >
                <v-list-item-icon>
                  <v-icon color="blue" size="35">mdi-chevron-left</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="blue--text text-h6"
                  >Go Back</v-list-item-title
                >
              </v-list-item>
              <v-list-item
                v-for="item in nestedMenu"
                :key="item.title"
                class="ma-4 hovcolor rounded-pill"
                link
                :to="`${item.page}`"
              >
                <v-list-item-icon>
                  <v-icon color="blue" size="35">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title
                    v-on:click="`${item.action}`"
                    class="blue--text text-h6"
                  >
                    <b>{{ item.title }}</b>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-navigation-drawer>
    <!-- xs-md -->
    <div class="d-flex d-lg-none">
      <v-app-bar
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        fixed
        height="65"
        color="black rounded-pill mx-2 mt-2 "
        dark
        app
      >
        <v-app-bar-nav-icon class="ma-1" link to="/">
          <v-avatar size="60">
            <img
              src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451"
              alt=""
            />
          </v-avatar>
        </v-app-bar-nav-icon>

        <v-spacer />
        <v-toolbar-title
          ><a href="/">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;</v-toolbar-title
        >
        <v-app-bar-nav-icon>
          <v-btn @click="show()" icon
            ><v-icon color="white" size="55">mdi-menu</v-icon></v-btn
          ></v-app-bar-nav-icon
        >&nbsp;&nbsp;&nbsp;
      </v-app-bar>
    </div>
  </div>
</template>

<style>
a {
  color: white !important;
  text-decoration: none;
}
.hovcolor:hover {
  background-color: white !important;
}
.theme--light.v-list-item--active:hover::before,
.theme--light.v-list-item--active::before {
  opacity: 0 !important;
}
</style>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NavDrawer",

  data() {
    return {
      collapseOnScroll: true,
      mainNav: true,
      mainMenu: [
        { title: "Home", icon: "mdi-home-outline", page: "/" },
        {
          title: "Projects",
          icon: "mdi-image-multiple-outline",
          page: "/Projects",
        },
        {
          title: "Services",
          icon: "mdi-briefcase",
          page: "/Services",
        },
        {
          title: "Contact Me",
          icon: "mdi-email-fast-outline",
          page: "/Contact",
        },
      ],
      nestedMenu: [
        {
          title: "About Me",
          icon: "mdi-account-tie",
          page: "/About",
        },
        {
          title: "FAQ",
          icon: "mdi-frequently-asked-questions",
          page: "/Faq",
        },
        {
          title: "Privacy",
          icon: "mdi-lock",
          page: "/PrivacyPolicy",
        },
        {
          title: "Credits",
          icon: "mdi-script-text",
          page: "/Credits",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      reveal: (state) => state.reveal,
      revInner: (state) => state.revInner,
      hideMainMenu: (state) => state.hideMainMenu,
    }),
  },
  methods: {
    ...mapActions({
      updateSidebar: "updateSidebar",
      activateRevInner: "activateRevInner",
    }),
    show() {
      this.updateSidebar(true);
    },
  },
};
</script>
