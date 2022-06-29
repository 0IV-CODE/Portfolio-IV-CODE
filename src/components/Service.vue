<template>
  <v-container>
    <!-- intro sec xs-xl -->
    <v-row>
      <!-- Left img -->
      <v-col cols="12" sm="12" md="6" align="center">
        <v-img
          width="500"
          class="d-none d-md-flex"
          :src="service.src1"
          alt=""
        ></v-img>
        <v-img
          width="300"
          class="d-none d-sm-flex d-md-none"
          :src="service.src1"
          alt=""
        ></v-img>
      </v-col>
      <!-- Right title -->
      <v-col cols="12" sm="12" md="6" align="center">
        <v-spacer class="py-sm-0 py-md-14 my-sm-0 my-md-14"></v-spacer>
        <v-icon size="160" color="black" class="d-flex d-sm-none mx-16">{{
          service.icon
        }}</v-icon>
        <p class="black--text text-h5 text-sm-h3 text-xl-h2 mb-0 mb-sm-1">
          <b>{{ service.name }}</b>
        </p>
        <p class="blue--text">
          <v-icon color="blue" class="mx-2 d-none d-sm-inline-flex">{{
            service.icon
          }}</v-icon
          ><b>Why Choose me?</b>
        </p>
      </v-col>
    </v-row>
    <!-- 4 cards sm-xl -->
    <v-row justify="center" class="d-none d-sm-flex">
      <v-col
        v-for="(card, index) in service.cards"
        :key="index"
        cols="auto"
        class="py-2 px-2"
      >
        <v-card width="250" height="300" :class="card.style" elevation="4">
          <v-icon size="100" :color="card.iconStyle" class="">{{
            card.icon
          }}</v-icon>
          <p class="text-h6 text-lg-h5 mb-0">{{ card.title }}</p>
          <p>
            <i>{{ card.caption }}</i>
          </p>
          <v-row class="mt-2">
            <v-col
              cols="auto"
              v-for="(button, index) in card.buttons"
              :key="index"
              class="pa-1"
            >
              <v-btn outlined :class="button.style">
                {{ button.fact }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- 4 cards xs -->
    <v-row justify="center" class="d-flex d-sm-none">
      <v-col
        v-for="(card, index) in service.cards"
        :key="index"
        cols="auto"
        align="center"
      >
        <v-card width="220" height="320" :class="card.style" elevation="4">
          <v-icon size="80" :color="card.iconStyle">{{ card.icon }}</v-icon>
          <p class="text-h6 text-lg-h5 mb-0">{{ card.title }}</p>
          <p>
            <i>{{ card.caption }}</i>
          </p>
          <v-row class="mt-2" justify="center">
            <v-col
              cols="auto"
              v-for="(button, index) in card.buttons"
              :key="index"
              class="pa-1"
            >
              <v-btn outlined :class="button.style">
                {{ button.fact }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- Summary xs-xl -->
    <v-row class="mt-16 flex-column-reverse flex-sm-column-reverse flex-md-row">
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="12" md="6" xl="4" align="center">
        <v-card
          max-width="400"
          class="white--text pa-4 rounded-xl mt-16"
          elevation="4"
          align="center"
        >
          <p class="blue--text mb-0"><b>In Summary</b></p>
          <p class="black--text caption--text"><i>Consider</i></p>
          <p class="black--text" align="start">
            <b class="blue--text">{{ service.sum1 }}</b
            >{{ service.sum2 }}<b class="blue--text">{{ service.sum3 }}</b>
            {{ service.sum4 }}
          </p>
          <v-row>
            <v-col cols="12" align="center">
              <v-btn
                link
                to="/Contact"
                class="white--text rounded-pill blue mr-4"
                >Contact Me</v-btn
              >
              <v-btn
                link
                to="/Services"
                class="blue--text rounded-pill"
                outlined
                >Back</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" align="center">
        <v-img
          width="500"
          class="d-none d-xl-flex"
          :src="service.src2"
          alt=""
        ></v-img>
        <v-img
          width="400"
          class="d-none d-sm-flex d-xl-none"
          :src="service.src2"
          alt=""
        ></v-img>
        <v-img
          width="300"
          class="d-flex d-sm-none"
          :src="service.src2"
          alt=""
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Service",

  computed: {
    ...mapState({
      servicesInfo: (state) => state.servicesInfo,
    }),
    Id() {
      return this.$route.params.id;
    },
    service() {
      return this.servicesInfo[this.Id];
    },
  },
};
</script>
