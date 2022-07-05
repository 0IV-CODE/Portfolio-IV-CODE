<template>
  <v-container class="px-0 px-sm-1">
    <!-- Card sm-xl -->
    <v-row class="d-none d-sm-flex">
      <v-col cols="12">
        <v-card
          :width="projectCardWidth"
          :height="projectCardHeight"
          class="white rounded-xl"
          elevation="4"
        >
          <v-row>
            <v-col cols="12" class="pt-0 pb-0">
              <v-img
                v-for="(item, i) in project.items.slice(0, 1)"
                :key="i"
                :width="projectIMGWidth"
                :height="projectIMGHeight"
                class="pa-0 rounded-t-xl"
                :src="item.src"
                :alt="item.alt"
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="py-4">
              <p class="mb-0 ml-4">
                <b>{{ project.name }}</b>
              </p>
              <p class="ml-4">{{ project.used }}</p>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-row>
              <v-col cols="12" align="center" class="py-1">
                <!--
                  this uses vue router:
                    -name is componet passed too
                    -id index is passed to grab data from State
                    -project.mobname is short name of project & later in tab
                    *For path name used on browser tab
                -->
                <v-btn
                  :to="{
                    name: 'Project',
                    params: { id: index, title: project.mobName },
                  }"
                  class="black rounded-pill white--text mr-4"
                >
                  View Project
                </v-btn>
                <v-btn
                  link
                  to="/Services"
                  outlined
                  class="black--text rounded-pill"
                >
                  Services
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- Card xs -->
    <v-row class="d-flex d-sm-none">
      <v-col cols="12">
        <v-card width="220" height="220" class="black rounded-lg" elevation="4">
          <v-img
            class="align-start hoverOn pa-0 rounded-lg"
            v-for="(item, i) in project.items.slice(0, 1)"
            :key="i"
            width="220"
            height="220"
            :src="item.src"
            :alt="item.alt"
            @click="goTo(index, project.mobName)"
          >
            <v-row>
              <v-col cols="12" class="px-5 py-5">
                <v-avatar size="40" color="black">
                  <v-icon color="white" size="25">{{
                    messageImageOutline
                  }}</v-icon>
                </v-avatar>
              </v-col>
            </v-row>
            <v-overlay absolute color="black">
              <v-row>
                <v-col cols="12">
                  <v-btn max-width="50" text>
                    <p class="white--text">
                      <b>{{ project.mobName }}</b>
                    </p>
                  </v-btn>
                </v-col>
              </v-row>
            </v-overlay>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.hoverOn:hover {
  cursor: pointer !important;
}
</style>
<script>
import { mapState } from "vuex";
// Imported Icons
import { mdiMessageImageOutline } from "@mdi/js";

export default {
  name: "ProjectCard",
  props: ["project", "index"],
  data() {
    return {
      overlay: false,
      messageImageOutline: mdiMessageImageOutline,
    };
  },

  computed: {
    ...mapState({
      projectsInfo: (state) => state.projectsInfo,
    }),
    // Project Card dynamic width
    projectCardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return NaN;
        case "sm":
          return 300;
        case "md":
          return 350;
        case "lg":
          return 350;
        case "xl":
          return 400;
        default:
          // fallback
          return 350;
      }
    },
    // Project Card dynamic Height
    projectCardHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return NaN;
        case "sm":
          return 350;
        case "md":
          return 350;
        case "lg":
          return 350;
        case "xl":
          return 375;
        default:
          // fallback
          return 350;
      }
    },
    // Project Card Image dynamic width
    projectIMGWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return NaN;
        case "sm":
          return 300;
        case "md":
          return 350;
        case "lg":
          return 350;
        case "xl":
          return 400;
        default:
          // fallback
          return 350;
      }
    },
    // Project Card Image dynamic Height
    projectIMGHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return NaN;
        case "sm":
          return 220;
        case "md":
          return 220;
        case "lg":
          return 220;
        case "xl":
          return 250;
        default:
          // fallback
          return 220;
      }
    },
  },

  methods: {
    // Not Sure if I passed this correctly
    // goTo function is passed params from btn
    goTo(index, mobName) {
      return this.$router.push({
        name: "Project",
        params: { id: index, title: mobName },
      });
    },
  },
};
</script>
