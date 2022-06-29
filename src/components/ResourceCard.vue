<template>
  <v-container>
    <!-- Card xs-xl -->
    <v-row>
      <v-col cols="12" class="px-0">
        <v-card class="white pa-2 pa-sm-4 pa-md-6 rounded-xl" elevation="4">
          <!-- Resource Name & IMG -->
          <v-row>
            <v-col cols="6" align="center">
              <v-avatar size="120">
                <v-img :src="card.img"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="6">
              <p>
                <b>{{ card.name }}</b>
              </p>
              <v-btn
                :to="{
                  name: 'Re',
                  params: { id: index, title: card.shortName },
                }"
                class="black rounded-pill white--text mb-4"
              >
                Overview
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ResourceCard",
  props: ["card", "index"],
  data() {
    return {
      value: 0,
    };
  },

  computed: {
    ...mapState({
      cardsInfo: (state) => state.cardsInfo,
    }),
  },

  methods: {
    goTo() {
      return this.$router.push(`/Re/${this.index}`);
    },
  },
};
</script>
