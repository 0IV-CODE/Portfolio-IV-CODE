<template>
  <v-container>
    <v-row>
      <!-- Left IMG Section lg-xl -->
      <v-col cols="0" sm="0" md="0" lg="0" xl="1" class="pa-0"></v-col>
      <v-col cols="12" sm="12" md="12" lg="5">
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-card class="grey rounded-xl mt-0 mt-xl-14 ml-1 ml-lg-8 ml-xl-1">
              <v-img
                height="480"
                contain
                src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Cyborg-bro_Lg8AJTJk-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025603900"
                class="ma-14 ma-md-7 ma-lg-0 d-none d-sm-flex"
                alt="Data illustrations by Storyset"
              /> </v-card
          ></v-col>
          <v-col cols="12" sm="12" md="12" lg="12" class="py-0 py-md-1">
            <p
              class="black--text text-h5 text-sm-h3 text-xl-h2 px-8 mt-1 mt-lg-0 pt-1 pt-lg-0"
              align="center"
            >
              <b>What can I solve?</b>
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="0" sm="0" md="0" lg="1" xl="1" class="pa-0 pa-md-2"></v-col>
      <!-- Right Cards Section -->
      <v-col cols="12" sm="12" md="12" lg="6" xl="5" align="center">
        <!-- Service Cards xs-xl -->
        <v-card
          class="blue rounded-xl mb-2 mt-2 mb-md-6 mb-lg-2 mt-xl-14"
          :width="containerCardWidth"
          align="center"
        >
          <v-row>
            <!-- UI/UX Card -->
            <v-col
              cols="6"
              v-for="(service, index) in uiCard"
              :key="service.id"
              class="pa-1 mt-8 mb-8 pa-sm-4"
            >
              <v-card
                :height="serviceCardHeight"
                class="white rounded-lg pa-2 ml-n3 mr-0 pa-sm-6 ml-sm-n7 ml-md-n14 mr-sm-7"
                elevation="8"
                align="center"
                :index="index"
              >
                <v-icon :size="serviceIconSize" color="blue">{{
                  service.icon
                }}</v-icon>
                <v-row>
                  <v-col cols="12">
                    <p class="blue--text mb-0">
                      <b>{{ service.name }}</b>
                    </p></v-col
                  >
                  <v-col cols="12">
                    <v-btn
                      :to="`/Service/0`"
                      outlined
                      class="blue--text rounded-pill mt-4 px-4 px-sm-8 mt-sm-0"
                    >
                      {{ service.status }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <!-- Front-End Card -->
            <v-col
              cols="6"
              v-for="(service, index) in frontEndCard"
              :key="service.id"
              class="pa-1 mt-8 mb-8 pa-sm-4"
            >
              <v-card
                :height="serviceCardHeight"
                class="white rounded-lg pa-2 ml-n3 mr-0 pa-sm-6 ml-sm-n7 ml-md-n14 mr-sm-7"
                elevation="8"
                align="center"
                :index="index"
              >
                <v-icon :size="serviceIconSize" color="blue">{{
                  service.icon
                }}</v-icon>
                <v-row>
                  <v-col cols="12">
                    <p class="blue--text mb-0">
                      <b>{{ service.name }}</b>
                    </p></v-col
                  >
                  <v-col cols="12">
                    <v-btn
                      :to="`/Service/1`"
                      outlined
                      class="blue--text rounded-pill mt-n2 px-4 px-sm-8 mt-sm-0"
                    >
                      {{ service.status }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <!-- Back-End Card -->
            <v-col
              cols="6"
              v-for="(service, index) in backEndCard"
              :key="service.id"
              class="pa-1 mb-8 pa-sm-2 pa-md-0"
            >
              <v-card
                :height="serviceCardHeight"
                class="grey rounded-lg pa-2 ml-n4 pa-sm-6 mr-sm-n7 ml-sm-7"
                elevation="8"
                align="center"
                :index="index"
              >
                <v-icon :size="serviceIconSize" color="white">{{
                  service.icon
                }}</v-icon>
                <v-row>
                  <v-col cols="12">
                    <p class="white--text mb-0">
                      <b>{{ service.name }}</b>
                    </p></v-col
                  >
                  <v-col cols="12">
                    <v-btn
                      disabled
                      outlined
                      class="white--text rounded-pill px-4 px-sm-8"
                    >
                      {{ service.status }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <!-- Photographer Card -->
            <v-col
              cols="6"
              v-for="(service, index) in photographerCard"
              :key="service.id"
              class="pa-1 mb-8 pa-sm-2 pa-md-0"
            >
              <v-card
                :height="serviceCardHeight"
                class="grey rounded-lg pa-2 ml-n4 pa-sm-6 mr-sm-n7 mr-md-n14 ml-sm-7"
                elevation="8"
                align="center"
                :index="index"
              >
                <v-icon :size="serviceIconSize" color="white">{{
                  service.icon
                }}</v-icon>
                <v-row>
                  <v-col cols="12">
                    <p class="white--text mb-0">
                      <b>{{ service.name }}</b>
                    </p></v-col
                  >
                  <v-col cols="12">
                    <v-btn
                      disabled
                      outlined
                      class="white--text rounded-pill px-4 mt-6 px-sm-8 mt-sm-0"
                    >
                      {{ service.status }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Services",

  computed: {
    uiCard() {
      return this.servicesInfo.filter(
        (servicesInfo) => servicesInfo.service === "UI/UX"
      );
    },
    frontEndCard() {
      return this.servicesInfo.filter(
        (servicesInfo) => servicesInfo.service === "Front-End-DEV"
      );
    },
    backEndCard() {
      return this.servicesInfo.filter(
        (servicesInfo) => servicesInfo.service === "Back-End-Dev"
      );
    },
    photographerCard() {
      return this.servicesInfo.filter(
        (servicesInfo) => servicesInfo.service === "Photographer"
      );
    },
    ...mapState({
      servicesInfo: (state) => state.servicesInfo,
    }),
    // Services Container Card Width
    containerCardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 280;
        case "sm":
          return 480;
        case "md":
          return 480;
        case "lg":
          return 480;
        case "xl":
          return 480;
        default:
          // fallback
          return 300;
      }
    },
    // Services Card Height
    serviceCardHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 200;
        case "sm":
          return 280;
        case "md":
          return 280;
        case "lg":
          return 280;
        case "xl":
          return 280;
        default:
          // fallback
          return 220;
      }
    },
    // Services Card Icon Size
    serviceIconSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 75;
        case "sm":
          return 110;
        case "md":
          return 110;
        case "lg":
          return 110;
        case "xl":
          return 110;
        default:
          // fallback
          return 90;
      }
    },
  },
};
</script>
