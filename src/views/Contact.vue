<template>
  <v-container>
    <!-- To-Do: 
    - figure out why when linked dispoportionate 
    - figure out how to create embedded link of website page on a btn
    - form not working
    -->
    <!-- Form & Reviews-->
    <v-row>
      <v-col
        cols="0"
        sm="1"
        md="2"
        lg="0"
        xl="2"
        class="d-none d-sm-flex"
      ></v-col>
      <v-col cols="12" sm="10" md="8" lg="5" xl="4" align="center">
        <v-img
          max-height="500"
          contain
          class="d-none d-sm-flex"
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Email-capture-bro_wLYBXvLrM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025603885"
          alt="Online illustrations by Storyset"
        />
        <v-img
          height="300"
          contain
          class="d-flex d-sm-none mt-8"
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Email-capture-bro_wLYBXvLrM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025603885"
          alt="Online illustrations by Storyset"
        />
        <v-row>
          <!-- Change text to standard you decide on -->
          <v-col cols="12" align="center">
            <p class="text-h3 blue--text"><b>Contact Me</b></p>
          </v-col>
        </v-row>
        <!-- Reviews Carousel -->
        <v-carousel
          hide-delimiter-background
          hide-delimiters
          show-arrows-on-hover
          height="360"
          cycle
        >
          <v-carousel-item v-for="(it, i) in item" :key="i" class="px-6">
            <v-spacer class="pa-12 d-flex d-sm-none"></v-spacer>
            <v-card
              class="white pa-3 pa-sm-4 ma-4 ma-sm-10"
              shaped
              elevation="10"
            >
              <v-row>
                <v-col cols="12" class="px-1 py-1 px-sm-2 py-sm-2">
                  <p class="mb-0" :style="it.style">
                    <v-avatar size="50" tile class="mx-1 mx-sm-4">
                      <v-img contain :src="it.src" alt="" />
                    </v-avatar>
                    <b>{{ it.company }}</b>
                  </p>
                  <p class="mb-0 mt-2 d-none d-sm-flex">
                    {{ it.comment }}
                  </p>
                </v-col>
                <v-col cols="12" align="center" class="pt-0 pb-4">
                  <v-rating
                    color="black"
                    background-color="black"
                    length="5"
                    readonly
                    size="25"
                    :value="it.stars"
                  ></v-rating>
                  <v-btn
                    :href="it.website"
                    class="black--text rounded-pill"
                    outlined
                    target="_blank"
                    >View Live</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="0" sm="1" md="2" class="d-none d-sm-flex d-lg-none"></v-col>
      <!-- Form -->
      <v-col cols="0" md="1" class="d-none d-sm-flex d-lg-none"></v-col>
      <v-col cols="12" md="10" lg="5" xl="4" align="center" justify="center">
        <!--
        <v-card class="white rounded-lg" flat>
          <v-card-text>
            <v-form
              v-model="valid"
              ref="form"
              lazy-validation
              @submit.prevent="submit"
            >
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-row class="pa-sm-2 pa-md-4 rounded-lg">
                      <v-col cols="12" align="center">
                        <p class="text-h6 text-sm-h5 text-xl-4 blue--text my-2">
                          <b>Fill out the form to contact me</b>
                        </p>
                      </v-col>
                      <v-col cols="12" class="py-0">
                        <v-text-field
                          solo
                          outlined
                          background-color="white"
                          class="rounded-lg"
                          v-model="firstName"
                          name="firstName"
                          :rules="requiredRules"
                          color="blue"
                          label="First Name"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" class="py-0">
                        <v-text-field
                          solo
                          outlined
                          background-color="white"
                          class="rounded-lg"
                          v-model="lastName"
                          name="lastName"
                          :rules="requiredRules"
                          color="blue"
                          label="Last Name"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" class="py-0">
                        <v-text-field
                          solo
                          outlined
                          background-color="white"
                          class="rounded-lg"
                          v-model="email"
                          color="blue"
                          :rules="emailRules"
                          label="Email"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" class="py-0">
                        <v-autocomplete
                          solo
                          outlined
                          background-color="white"
                          class="rounded-lg"
                          v-model="reason"
                          chips
                          :rules="requiredRules"
                          deletable-chips
                          color="blue"
                          item-color="blue"
                          :items="[
                            'Service Request',
                            'Interview',
                            'Business Inqury',
                            'Comment',
                            'Leave Review',
                            'Other',
                          ]"
                          label="Reason"
                          multiple
                        ></v-autocomplete>
                        <v-textarea
                          class="d-none"
                          v-model="message"
                          name="message"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="6" class="py-0">
                        <v-text-field
                          solo
                          outlined
                          background-color="white"
                          class="rounded-lg"
                          v-model="city"
                          name="city"
                          color="blue"
                          label="City"
                          required
                        ></v-text-field
                      ></v-col>
                      <v-col cols="6" class="py-0">
                        <v-text-field
                          solo
                          outlined
                          background-color="white"
                          class="rounded-lg"
                          v-model="state"
                          name="state"
                          color="blue"
                          label="State"
                          required
                        ></v-text-field
                      ></v-col>
                      <v-col cols="12">
                        <v-textarea
                          height="200"
                          solo
                          outlined
                          background-color="white"
                          class="rounded-lg"
                          v-model="commentSection"
                          name="commentSection"
                          clearable
                          color="blue"
                          clear-icon="mdi-close-circle"
                          label="Leave your comment here..."
                        ></v-textarea>
                        <v-row>
                          <v-col cols="12" align="center">
                            <v-btn
                              class="blue--text rounded-pill"
                              outlined
                              @click="submit()"
                            >
                              Submit Form
                            </v-btn></v-col
                          >
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
        -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Contact",
  computed: {
    ...mapState({
      reviewsInfo: (state) => state.reviewsInfo,
    }),
    item() {
      return this.reviewsInfo;
    },
  },
};
</script>
