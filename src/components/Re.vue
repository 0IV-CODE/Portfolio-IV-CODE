<template>
  <v-container>
    <v-spacer class="py-4" />
    <v-card class="white" flat>
      <!-- Carousel & Facts Section -->
      <v-row>
        <v-col col="0" xl="2" class="d-none d-xl-flex"></v-col>
        <!-- Carousel sm-xl -->
        <v-col cols="0" sm="12" md="6" lg="5" xl="4" class="d-none d-sm-flex">
          <v-card elevation="8" max-width="500" height="485" class="mx-auto">
            <v-carousel
              :continuous="true"
              :cycle="cycle"
              :show-arrows="false"
              delimiter-icon="mdi-minus"
              height="400"
              interval="4000"
            >
              <v-carousel-item
                v-for="(item, i) in card.items"
                :key="i"
                class="white"
              >
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-img
                      width="500"
                      :key="i"
                      :src="item.src"
                      :alt="item.alt"
                    ></v-img>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <!-- Company Logo Here -->
                  <v-img
                    v-for="(item, i) in card.items.slice(0, 1)"
                    :key="i"
                    width="400"
                    class="rounded-xl"
                    :src="item.src"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-action>
                  <v-switch
                    v-model="cycle"
                    label="Cycle Slides"
                    inset
                  ></v-switch>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <!-- Carousel xs -->
        <v-col cols="12" sm="0" class="d-flex d-sm-none">
          <v-card elevation="8" max-width="320" height="400" class="mx-auto">
            <v-carousel
              :continuous="true"
              :cycle="cycle"
              :show-arrows="false"
              delimiter-icon="mdi-minus"
              height="300"
              interval="4000"
            >
              <v-carousel-item
                v-for="(item, i) in card.items"
                :key="i"
                class="white"
              >
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-img
                      width="320"
                      :key="i"
                      :src="item.src"
                      :alt="item.alt"
                    ></v-img>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <!-- Company Logo Here -->
                  <v-img
                    v-for="(item, i) in card.items.slice(0, 1)"
                    :key="i"
                    width="400"
                    class="rounded-xl"
                    :src="item.src"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-action>
                  <v-switch
                    v-model="cycle"
                    label="Cycle Slides"
                    inset
                  ></v-switch>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <!-- Intro Top Section -->
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="7"
          xl="4"
          class="pa-4 pa-sm-7 pa-md-14"
        >
          <!-- Title Section -->
          <v-row>
            <v-col cols="12" align="center">
              <p class="text-h5 text-sm-h3 text-xl-h2 blue--text mr-6 mr-sm-0">
                <b>{{ card.name }}</b>
              </p>
            </v-col>
          </v-row>
          <!-- About Skill -->
          <v-row>
            <v-col cols="12">
              <p><b>Definition:</b> {{ card.definition }}</p>
              <p><b>Skills:</b> {{ card.knownSkill }}</p>
              <p>
                <b>What Made me interested in {{ card.name }}?</b>
              </p>
              <p>
                {{ card.whyInterest }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- Tabs Section -->
      <v-row>
        <v-col col="0" xl="2" class="d-none d-xl-flex"></v-col>
        <v-col cols="12" xl="8">
          <v-tabs
            v-model="tab"
            background-color="black rounded-pill"
            centered
            dark
            icons-and-text
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#tab-1" class="pa-1 pa-sm-2">
              <p>Documentation</p>
              <v-icon class="d-none d-sm-flex">mdi-image-multiple</v-icon>
            </v-tab>
            <v-tab href="#tab-2" class="pa-1 pa-sm-2">
              <p class="d-none d-sm-flex">Used Resources</p>
              <p class="d-flex d-sm-none mt-2 mt-sm-0 grey--text">Resources</p>
              <v-icon class="d-none d-sm-flex">mdi-link</v-icon>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <!-- Documentation -->
            <v-tab-item value="tab-1">
              <v-card flat>
                <!-- Section 1 -->
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    lg="7"
                    align="center"
                    class="pa-10"
                  >
                    <!-- 
                      Note: img pulled from items array via slice
                      Need: possibly have logo indexed for pull
                    -->
                    <v-img
                      v-for="(item, i) in card.items.slice(4, 5)"
                      :key="i"
                      width="400"
                      class="rounded-xl"
                      :src="item.src"
                      alt="UI/UX Image"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="5" class="pa-10">
                    <p>
                      <b>{{ card.projectTitleOne }}</b>
                    </p>
                    <p>
                      {{ card.projectOneDesc }}
                    </p>
                  </v-col>
                </v-row>
                <!-- Section 2 -->
                <v-row
                  class="blue rounded-xl ma-7 pa-2 flex-column-reverse flex-sm-column-reverse flex-lg-row"
                >
                  <v-col cols="12" sm="12" md="12" lg="5" class="pa-4 pa-sm-10">
                    <p class="white--text">
                      <b>{{ card.projectTitleTwo }}</b>
                    </p>
                    <p class="white--text">
                      {{ card.projectTwoDesc }}
                    </p>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    lg="7"
                    align="center"
                    class="pa-2 pa-sm-10"
                  >
                    <v-img
                      v-for="(item, i) in card.items.slice(1, 2)"
                      :key="i"
                      width="400"
                      class="rounded-xl"
                      :src="item.src"
                      alt="UI/UX Image"
                    ></v-img>
                  </v-col>
                </v-row>
                <!-- Call to Action -->
                <v-row>
                  <v-col cols="12" align="end">
                    <v-btn
                      link
                      to="/Projects"
                      class="black white--text rounded-pill mr-4"
                    >
                      Projects
                    </v-btn>
                    <v-btn
                      link
                      to="/Services"
                      outlined
                      class="black--text rounded-pill"
                    >
                      Services
                    </v-btn>
                    <v-btn
                      link
                      to="/Resources"
                      outlined
                      class="black--text rounded-pill ml-4"
                      >Go Back</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
            <!-- Used Resources -->
            <v-tab-item value="tab-2">
              <v-card flat>
                <!-- Video Section -->
                <v-row>
                  <v-col cols="12" align="center">
                    <v-spacer class="py-7" />
                    <!-- link video via src change -->
                    <v-card
                      width="575"
                      height="315"
                      elevation="8"
                      class="rounded-lg d-none d-sm-flex"
                    >
                      <iframe
                        width="575"
                        height="315"
                        :src="card.video"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </v-card>
                    <v-card
                      width="375"
                      height="215"
                      elevation="8"
                      class="rounded-lg d-flex d-sm-none"
                    >
                      <iframe
                        width="375"
                        height="215"
                        :src="card.video"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe
                    ></v-card>
                  </v-col>
                </v-row>
                <v-spacer class="py-7" />
                <!-- Resource #1 -->
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="8">
                    <v-card
                      class="white pa-4 pa-sm-7 mx-4"
                      shaped
                      elevation="4"
                    >
                      <p>
                        <b>{{ card.resourceTitleOne }}</b>
                      </p>
                      <p>
                        {{ card.resourceOnePar1 }}
                      </p>
                      <p>
                        {{ card.resourceOnePar2 }}
                      </p>
                    </v-card>
                  </v-col>
                  <!-- Useful Links -->
                  <v-col cols="12" sm="12" md="12" lg="4" align="center">
                    <p><b>Useful Links</b></p>
                    <p v-for="(link, i) in card.links" :key="i">
                      <a :href="link.src" class="black--text" target="_blank">
                        <v-btn class="rounded-pill black white--text">
                          {{ link.name }}
                        </v-btn>
                      </a>
                    </p>
                  </v-col>
                </v-row>
                <!-- Call to Action -->
                <v-row>
                  <v-col cols="12" align="end">
                    <v-btn
                      link
                      to="/Projects"
                      class="black white--text rounded-pill mr-4"
                    >
                      Projects
                    </v-btn>
                    <v-btn
                      link
                      to="/Services"
                      outlined
                      class="black--text rounded-pill"
                    >
                      Services
                    </v-btn>
                    <v-btn
                      link
                      to="/Resources"
                      outlined
                      class="black--text rounded-pill ml-4"
                      >Go Back</v-btn
                    >
                  </v-col>
                </v-row>
                <v-spacer class="py-7" />
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Re",
  data() {
    return {
      tab: null,
      cycle: false,
    };
  },
  components: {},
  computed: {
    ...mapState({
      cardsInfo: (state) => state.cardsInfo,
    }),
    Id() {
      return this.$route.params.id;
    },
    card() {
      return this.cardsInfo[this.Id];
    },
  },
};
</script>
