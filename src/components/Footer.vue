<template>
  <!-- Map Footer Menu with more intuative UI & overal design-->
  <v-container>
    <v-card class="black rounded-pill pa-3 ml-0 ml-md-14">
      <!-- nav sm-xl -->
      <v-row class="d-none d-sm-flex">
        <!-- Footer Enacter -->
        <v-col cols="0" sm="3" md="4" lg="6" xl="8">
          <v-btn @click="sheet = !sheet" class="rounded-pill blue white--text">
            More Info <v-icon class="mx-1">{{ chevronUp }}</v-icon>
          </v-btn>
        </v-col>
        <!-- Skills List -->
        <v-col cols="0" sm="9" md="8" lg="6" xl="4" align="center">
          <v-icon color="white" size="35" class="mx-1">{{
            languageHtml5
          }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{
            languageCss3
          }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{
            languageJavascript
          }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{ vuejs }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{ vuetify }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{ alphaXBox }}</v-icon>

          <v-icon color="white" size="35" class="mx-1">{{ alphaRBox }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{
            jellyfishOutline
          }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{ github }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{
            microsoftVisualStudioCode
          }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{
            pencilRuler
          }}</v-icon>
        </v-col>
      </v-row>
      <!-- nav sm-xl btm-sheet -->
      <v-bottom-sheet v-model="sheet">
        <v-sheet
          class="text-center rounded-tr-xl pa-4"
          width="600px"
          elevation="4"
        >
          <v-row>
            <v-col cols="12" align="start">
              <v-btn
                class="rounded-pill blue white--text ml-2"
                text
                @click="sheet = !sheet"
              >
                Less Info <v-icon class="mx-1">{{ chevronDown }}</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" align="center">
              <!-- Condensed Info Panels-->
              <v-expansion-panels focusable class="width">
                <v-expansion-panel
                  class="blue--text rounded-xl pa-2 my-2"
                  v-for="headers in footerSections"
                  :key="headers.id"
                >
                  <v-expansion-panel-header>
                    <b>{{ headers.header }}</b>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row class="mt-1" justify="center">
                      <v-col
                        cols="auto"
                        class="pa-0"
                        v-for="info in qa(headers.id)"
                        :key="info.index"
                      >
                        <v-btn
                          link
                          :to="info.link"
                          :href="info.href"
                          :target="info.target"
                          class="ma-1 pa-4 blue white--text"
                          >{{ info.name }}</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <!-- Auto Year & Legal -->
            <v-col cols="12" class="py-0">
              <p class="text-center black--text mb-0">
                <strong
                  >{{ new Date().getFullYear() }} — Copyright &copy; iv-code.io,
                </strong>
              </p>
              <p class="mb-0 black--text">All Rights Reserved</p>
              <v-avatar class="my-2">
                <img
                  src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451"
                  alt="IVCODE Logo with white Background"
                />
              </v-avatar>
            </v-col>
          </v-row>
        </v-sheet>
      </v-bottom-sheet>
      <!-- nav xs -->
      <v-row class="d-flex d-sm-none mt-n4">
        <!-- Footer Enacter -->
        <v-col cols="6">
          <v-btn
            @click="sheetxs = !sheetxs"
            class="rounded-pill blue white--text"
          >
            More Info <v-icon class="mx-1">{{ chevronUp }}</v-icon>
          </v-btn>
        </v-col>
        <!-- Skills List -->
        <v-col cols="6" align="center">
          <v-icon color="white" size="35" class="mx-1">{{
            pencilRuler
          }}</v-icon>
          <v-icon color="white" size="35" class="mx-1">{{ vuejs }}</v-icon>
        </v-col>
      </v-row>
      <!-- nav xs btm-sheet -->
      <v-bottom-sheet v-model="sheetxs">
        <v-sheet class="text-center rounded-lg pa-2" elevation="2">
          <v-row>
            <!-- Footer Enacter -->
            <v-col cols="12" align="start">
              <v-btn
                class="rounded-pill blue white--text ml-2"
                text
                @click="sheetxs = !sheetxs"
              >
                Less Info <v-icon class="mx-1">{{ chevronDown }}</v-icon>
              </v-btn>
            </v-col>
            <!-- Condensed Info Panels-->
            <v-col cols="12" align="center">
              <v-expansion-panels focusable class="">
                <v-expansion-panel
                  class="blue--text rounded-xl pa-2 my-2"
                  v-for="headers in footerSections"
                  :key="headers.id"
                >
                  <v-expansion-panel-header>
                    <b>{{ headers.header }}</b>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row class="mt-1" justify="center">
                      <v-col
                        cols="auto"
                        class="pa-0"
                        v-for="info in qa(headers.id)"
                        :key="info.index"
                      >
                        <v-btn
                          link
                          :to="info.link"
                          :href="info.href"
                          :target="info.target"
                          class="ma-1 pa-4 blue white--text"
                          >{{ info.name }}</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <!-- Auto Year & Legal -->
            <v-col cols="12" class="py-0">
              <p class="text-center black--text mb-0">
                <strong
                  >{{ new Date().getFullYear() }} — Copyright &copy; iv-code.io,
                </strong>
              </p>
              <p class="mb-0">All Rights Reserved</p>
              <v-avatar class="my-2">
                <img
                  src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451"
                  alt="IVCODE Logo with white Background"
                />
              </v-avatar>
            </v-col>
          </v-row>
        </v-sheet>
      </v-bottom-sheet>
    </v-card>
  </v-container>
</template>

<style>
.width {
  max-width: 80% !important;
}
.v-dialog {
  box-shadow: none !important;
}
</style>

<script>
import { mapState } from "vuex";
// Imported Icons
import { mdiLanguageHtml5 } from "@mdi/js";
import { mdiLanguageCss3 } from "@mdi/js";
import { mdiLanguageJavascript } from "@mdi/js";
import { mdiVuejs } from "@mdi/js";
import { mdiVuetify } from "@mdi/js";
import { mdiAlphaXBox } from "@mdi/js";
import { mdiAlphaRBox } from "@mdi/js";
import { mdiJellyfishOutline } from "@mdi/js";
import { mdiGithub } from "@mdi/js";
import { mdiMicrosoftVisualStudioCode } from "@mdi/js";
import { mdiPencilRuler } from "@mdi/js";
import { mdiChevronUp } from "@mdi/js";
import { mdiChevronDown } from "@mdi/js";

export default {
  name: "Footer",
  data: () => ({
    sheetxs: false,
    sheet: false,
    //Iconstyle
    languageHtml5: mdiLanguageHtml5,
    languageCss3: mdiLanguageCss3,
    languageJavascript: mdiLanguageJavascript,
    vuejs: mdiVuejs,
    vuetify: mdiVuetify,
    alphaXBox: mdiAlphaXBox,
    alphaRBox: mdiAlphaRBox,
    jellyfishOutline: mdiJellyfishOutline,
    github: mdiGithub,
    microsoftVisualStudioCode: mdiMicrosoftVisualStudioCode,
    pencilRuler: mdiPencilRuler,
    chevronUp: mdiChevronUp,
    chevronDown: mdiChevronDown,
  }),
  computed: {
    ...mapState({
      footerSections: (state) => state.footerSections,
      footerInfo: (state) => state.footerInfo,
    }),
  },
  methods: {
    qa(id) {
      return this.footerInfo.filter((item) => item.id === id);
    },
  },
};
</script>
