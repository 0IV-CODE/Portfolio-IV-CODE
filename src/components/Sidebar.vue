<template>
  <v-navigation-drawer class="opacityH mt-14 mr-5" v-model="drawer" app right>
    <v-card height="600" class="black rounded-pill pr-2" align="center">
      <v-divider class="my-14 transparent"></v-divider>
      <v-row>
        <!-- Side Right Pill -->
        <!-- Main Side Bar Options -->
        <v-col v-if="revSideBod" cols="12" align="center">
          <v-row>
            <v-col cols="12" class="pa-0" align="center">
              <v-btn icon large @click="drawer = false" class="hovcolor">
                <v-icon color="blue" size="35">mdi-close</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" v-if="hidesideMenu">
              <v-list nav dense>
                <v-list-item-group>
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
                    @click="activateRevInSidebar()"
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
                </v-list-item-group>
              </v-list>
            </v-col>
            <!-- Nested PG's Sub-Menu -->
            <v-col v-if="revSide" cols="12" align="center">
              <v-list nav dense>
                <v-list-item
                  class="ma-4 hovcolor rounded-pill"
                  @click="activateRevInSidebar()"
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
        </v-col>
      </v-row>
    </v-card>
  </v-navigation-drawer>
</template>

<style scoped>
.opacityH {
  background-color: rgba(0, 0, 0, 0) !important;
  box-shadow: none !important;
}
</style>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Sidebar",
  props: {
    imgSrc: String,
    id: Number,
  },
  data() {
    return {
      zIndex: 10,
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
      revSideBod: (state) => state.revSideBod,
      revSide: (state) => state.revSide,
      hidesideMenu: (state) => state.hidesideMenu,
    }),
    drawer: {
      get() {
        return this.reveal;
      },
      set(newValue) {
        return this.updateSidebar(newValue);
      },
      overlay: false,
      zIndex: 0,
    },
  },
  methods: {
    ...mapActions({
      updateSidebar: "updateSidebar",
      activateRevInSidebar: "activateRevInSidebar",
    }),
  },
};
</script>
