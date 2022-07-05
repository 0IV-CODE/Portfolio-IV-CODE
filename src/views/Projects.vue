<template>
  <v-container>
    <v-row class="mt-0">
      <v-col cols="12" class="pa-4">
        <!-- xs-sm Card nav -->
        <div class="d-flex d-md-none">
          <v-menu
            offset-x
            offset-y
            rounded
            max-width="200"
            transition="scroll-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-row class="flex-row-reverse pr-2">
                <v-btn
                  dark
                  class="mt-12 mr-4 rounded-pill"
                  color="blue"
                  v-bind="attrs"
                  v-on="on"
                >
                  Filter <v-icon>{{ chevronDown }}</v-icon>
                </v-btn>
              </v-row>
            </template>
            <v-tabs vertical v-model="tab" light color="blue" show-arrows>
              <v-tabs-slider color="blue"></v-tabs-slider>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-tab class="text-h6">
                      <v-row>
                        <v-col cols="12">ALL</v-col>
                      </v-row>
                    </v-tab>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <v-tab class="text-h6">
                      <v-row>
                        <v-col cols="12">UI/UX</v-col>
                      </v-row>
                    </v-tab>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <v-tab class="text-h6">
                      <v-row>
                        <v-col cols="12">Front-End</v-col>
                      </v-row>
                    </v-tab>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <v-tab class="text-h6">
                      <v-row>
                        <v-col cols="12">Back-End</v-col>
                      </v-row>
                    </v-tab>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-tabs>
          </v-menu>
        </div>
        <!-- md-xl Card nav -->
        <div class="d-none d-md-flex">
          <v-tabs v-model="tab" dark color="blue" class="rounded-pill" centered>
            <v-tabs-slider color="blue"></v-tabs-slider>

            <v-tab class="text-h6">
              <v-row>
                <v-col cols="12"><b>ALL</b></v-col>
              </v-row>
            </v-tab>
            <v-tab class="text-h6">
              <v-row>
                <v-col cols="3">
                  <v-icon color="blue">{{ monitorEdit }}</v-icon>
                </v-col>
                <v-col cols="9">UI/UX</v-col>
              </v-row>
            </v-tab>
            <v-tab class="text-h6">
              <v-row>
                <v-col cols="3">
                  <v-icon color="blue">{{ monitorDashboard }}</v-icon>
                </v-col>
                <v-col cols="9">Front-End</v-col>
              </v-row>
            </v-tab>
            <v-tab class="text-h6">
              <v-row>
                <v-col cols="3">
                  <v-icon color="blue">{{ xml }}</v-icon>
                </v-col>
                <v-col cols="9">Back-End</v-col>
              </v-row>
            </v-tab>
          </v-tabs>
        </div>
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-tabs-items v-model="tab" class="white">
          <!-- All Projects -->
          <v-tab-item>
            <v-row class="pa-5 mt-4 white justify-center justify-lg-start">
              <v-col cols="12" class="pa-0 my-0 ml-14 d-flex d-md-none">
                <p class="pa-0 ma-0 text-h6 text-sm-h4 text-xl-h3">
                  <b>All Projects</b>
                </p>
              </v-col>
              <v-col
                v-for="(project, index) in projectsInfo"
                :key="project.id"
                cols="auto"
                class="py-1 px-1"
              >
                <ProjectCard :index="index" :project="project" />
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- UI/UX -->
          <v-tab-item>
            <v-row class="pa-5 mt-4 white justify-center justify-lg-start">
              <v-col cols="12" class="pa-0 my-0 ml-14 d-flex d-md-none">
                <p class="pa-0 ma-0 text-h6 text-sm-h4 text-xl-h3">
                  <b>UI/UX Projects</b>
                </p>
              </v-col>
              <v-col
                v-for="(project, index) in uiUX"
                :key="project.id"
                cols="auto"
                class="py-1 px-1"
              >
                <ProjectCard :index="index" :project="project" />
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- Front-End -->
          <v-tab-item>
            <v-row class="pa-5 mt-4 white justify-center justify-lg-start">
              <v-col cols="12" class="pa-0 my-0 ml-14 d-flex d-md-none">
                <p class="pa-0 ma-0 text-h6 text-sm-h4 text-xl-h3">
                  <b>Front-End Projects</b>
                </p>
              </v-col>
              <v-col
                v-for="(project, index) in frontEnd"
                :key="project.id"
                cols="auto"
                class="py-1 px-1"
              >
                <ProjectCard :index="index" :project="project" />
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- Back-End -->
          <v-tab-item>
            <v-row class="pa-5 mt-4 white justify-center justify-lg-start">
              <v-col cols="12" class="pa-0 my-0 ml-14 d-flex d-md-none">
                <p class="pa-0 ma-0 text-h6 text-sm-h4 text-xl-h3">
                  <b>Back-End Projects</b>
                </p>
              </v-col>
              <v-col
                v-for="(project, index) in backEnd"
                :key="project.id"
                cols="auto"
                class="py-1 px-1"
              >
                <ProjectCard :index="index" :project="project" />
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import { mapState } from "vuex";
//Icons
import { mdiMonitorDashboard } from "@mdi/js";
import { mdiMonitorEdit } from "@mdi/js";
import { mdiXml } from "@mdi/js";
import { mdiChevronDown } from "@mdi/js";

export default {
  name: "Projects",
  data: () => ({
    tab: null,
    monitorDashboard: mdiMonitorDashboard,
    monitorEdit: mdiMonitorEdit,
    xml: mdiXml,
    chevronDown: mdiChevronDown,
  }),

  components: {
    ProjectCard,
  },
  computed: {
    frontEnd() {
      return this.projectsInfo.filter(
        (projectsInfo) => projectsInfo.category === "Front-End"
      );
    },
    uiUX() {
      return this.projectsInfo.filter(
        (projectsInfo) => projectsInfo.category === "UI-UX"
      );
    },
    backEnd() {
      return this.projectsInfo.filter(
        (projectsInfo) => projectsInfo.category === "Back-End"
      );
    },
    ...mapState({
      projectsInfo: (state) => state.projectsInfo,
    }),
  },
};
</script>
