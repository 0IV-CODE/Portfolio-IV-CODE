<template>
  <v-container>
    <!-- Credits PG -->
    <v-row class="d-none d-sm-flex">
      <v-col cols="12" align="center" justify="center">
        <v-card
          class="white black--text pa-4 rounded-xl mt-16"
          width="600"
          elevation="4"
        >
          <v-img
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Scaffold-pana_0YxNMw8Yg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656479845474"
            contain
            class=""
            alt="Web illustrations by Storyset"
          ></v-img>
          <p class="blue--text">
            <v-icon color="blue">mdi-information</v-icon>
            <b>
              This Page is under development, please use the menu or click home
            </b>
          </p>
          <v-row>
            <v-col cols="12" align="center">
              <v-btn class="blue--text rounded-pill px-10" outlined link to="/">
                Home
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- xs -->
    <v-row class="d-flex d-sm-none">
      <v-col cols="12" align="center" justify="center">
        <v-card
          class="white black--text pa-4 rounded-xl"
          width="300"
          elevation="4"
        >
          <v-img
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Scaffold-pana_0YxNMw8Yg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656479845474"
            contain
            class=""
            alt="Web illustrations by Storyset"
          ></v-img>
          <p class="blue--text">
            <b> Page is in development! </b>
          </p>
          <v-row>
            <v-col cols="12" align="center">
              <v-btn class="blue--text rounded-pill" outlined link to="/">
                Home
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Credits",
};
</script>
