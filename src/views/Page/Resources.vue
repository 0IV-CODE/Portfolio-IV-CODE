<template>
  <v-container>
    <!-- Intro IMG & Title -->
    <v-row>
      <v-col cols="12" align="center">
        <!-- intro img md-xl -->
        <v-img
          max-width="900"
          class="rounded-xl red align-end d-none d-md-flex"
          contain
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/azamat-e-ooCoR8x0MmY-unsplash_UtuaJBIyE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051490"
          alt="Image From Unsplash"
        >
          <v-row>
            <v-col cols="12">
              <p class="white--text text-h4"><b>Resources Used</b></p>
              <p class="white--text subtitle-2">
                <v-icon color="white">mdi-information</v-icon>The image above
                pretty much sums it up...
              </p>
            </v-col>
          </v-row>
        </v-img>
        <!-- intro img sm -->
        <v-img
          max-width="525"
          class="rounded-xl red align-end d-none d-sm-flex d-md-none"
          contain
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/azamat-e-ooCoR8x0MmY-unsplash_UtuaJBIyE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051490"
          alt="Image From Unsplash"
        >
          <v-row>
            <v-col cols="12">
              <p class="white--text text-h4"><b>Resources Used</b></p>
              <p class="white--text subtitle-2">
                <v-icon color="white">mdi-information</v-icon>The image above
                pretty much sums it up...
              </p>
            </v-col>
          </v-row>
        </v-img>
        <!-- intro img xs -->
        <v-img
          class="rounded-xl red align-end d-flex d-sm-none"
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/azamat-e-ooCoR8x0MmY-unsplash_UtuaJBIyE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026051490"
          alt="Image From Unsplash"
        >
        </v-img>
        <v-row class="d-flex d-sm-none">
          <v-col cols="12">
            <p class="black--text text-h5"><b>Resources Used</b></p>
            <p class="black--text caption">
              <v-icon size="15" color="black">mdi-information</v-icon>The image
              above pretty much sums it up...
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- Resources Section -->
    <v-row justify="center">
      <v-col
        v-for="(card, index) in resourceItems"
        :key="card.id"
        cols="auto"
        class="py-1 px-1"
      >
        <!-- Looped Resources Card -->
        <ResourceCard :index="index" :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResourceCard from "@/components/ResourceCard.vue";
import { mapState } from "vuex";

export default {
  name: "Resources",
  components: {
    ResourceCard,
  },
  computed: {
    resourceItems() {
      return this.cardsInfo.slice(0, 3);
    },
    ...mapState({
      cardsInfo: (state) => state.cardsInfo,
    }),
  },
};
</script>
