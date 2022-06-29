<template>
  <!-- ProjectCard -->
  <v-container>
    <v-spacer class="py-4" />
    <v-card class="white" flat>
      <v-spacer class="py-4" />
      <!-- Carousel & Facts Section -->
      <v-row>
        <!-- Carousel sm-xl -->
        <v-col cols="0" sm="12" lg="7" class="d-none d-sm-flex">
          <v-card elevation="8" max-width="500" height="485" class="mx-auto">
            <v-carousel
              :continuous="true"
              :cycle="cycle"
              :show-arrows="false"
              delimiter-icon="mdi-minus"
              height="400"
              interval="4000"
            >
              <!-- loop used for showing each item in project items -->
              <v-carousel-item
                v-for="(item, i) in project.items"
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
                    v-for="(item, i) in project.items.slice(0, 1)"
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
          <v-card elevation="0" height="400" class="mx-auto">
            <v-carousel
              :continuous="true"
              :cycle="cycle"
              show-arrows
              hide-delimiters
              delimiter-icon="mdi-minus"
              height="300"
              interval="1500"
            >
              <v-carousel-item
                v-for="(item, i) in project.items"
                :key="i"
                class="white"
              >
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-img
                      class="rounded-xl ma-4"
                      width="320"
                      :key="i"
                      :src="item.src"
                      :alt="item.alt"
                    ></v-img>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
            <v-list class="white rounded-pill pa-2 ma-2" elevation="4">
              <v-list-item>
                <v-list-item-content>
                  <!-- Company Logo Here -->
                  <v-img
                    v-for="(item, i) in project.items.slice(0, 1)"
                    :key="i"
                    max-width="40"
                    contain
                    :src="item.src"
                  ></v-img>
                </v-list-item-content>
                <v-list-item-action>
                  <v-switch
                    v-model="cycle"
                    label="Cycle Slides"
                    inset
                    color="black"
                  ></v-switch>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- Copy Section -->
        <v-col
          cols="0"
          sm="1"
          lg="0"
          class="d-none d-sm-flex d-lg-none"
        ></v-col>
        <v-col cols="12" sm="10" lg="5">
          <v-card
            class="white pa-4 black--text mx-1 mx-md-14 mx-lg-0 mx-xl-14"
            elevation="8"
            shaped
          >
            <p class="blue--text text-h5 text-sm-h3 text-xl-h2 text-center">
              <b>{{ project.name }}</b>
            </p>
            <p>
              {{ project.par1 }}
            </p>
            <p class="ml-10">
              <v-icon>mdi-circle-small</v-icon>{{ project.par2 }}
            </p>
            <p class="ml-10">
              <v-icon>mdi-circle-small</v-icon>{{ project.par3 }}
            </p>
            <p class="ml-10">
              <v-icon>mdi-circle-small</v-icon>{{ project.par4 }}
            </p>
          </v-card>
        </v-col>
      </v-row>
      <v-spacer class="py-7" />

      <!-- Bottom Actions -->
      <v-row class="pa-4">
        <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
        <!-- Views Tabs sm-xl -->
        <v-col cols="12" md="8" xl="6" class="d-none d-sm-flex">
          <v-row>
            <v-col cols="12">
              <v-card flat>
                <!-- tabs contain each section of views -->
                <v-tabs
                  v-model="tab"
                  background-color="black rounded-pill"
                  centered
                  dark
                  icons-and-text
                >
                  <v-tabs-slider></v-tabs-slider>

                  <v-tab>
                    Phone
                    <v-icon>mdi-cellphone</v-icon>
                  </v-tab>

                  <v-tab>
                    Tablet
                    <v-icon>mdi-tablet</v-icon>
                  </v-tab>

                  <v-tab>
                    Laptop
                    <v-icon>mdi-laptop</v-icon>
                  </v-tab>
                </v-tabs>

                <!-- Non-Gif Tabs -->
                <v-tabs-items v-if="!showGif" v-model="tab">
                  <v-tab-item
                    v-for="(view, i) in project.viewsSMPlusImg"
                    :key="i"
                  >
                    <v-card flat>
                      <v-row>
                        <v-col colls="12" align="center">
                          <v-card
                            elevation="8"
                            class="black rounded-xl my-4"
                            :width="view.width"
                          >
                            <v-img contain :src="view.src"> </v-img>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
                <!-- Gif Tabs -->
                <v-tabs-items v-else v-model="tab">
                  <v-tab-item
                    v-for="(view, i) in project.viewsSMPlusGif"
                    :key="i"
                  >
                    <v-card flat>
                      <v-row>
                        <v-col colls="12" align="center">
                          <v-card
                            elevation="8"
                            class="black rounded-xl my-4"
                            :width="view.width"
                          >
                            <v-img contain :src="view.src"> </v-img>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
                <v-btn class="rounded-pill black--text pa-6 ma-4" outlined>
                  <v-switch
                    v-model="showGif"
                    color="black"
                    :label="`Show GIF: ${showGif.toString()}`"
                  ></v-switch>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <!-- Views Tabs xs -->
        <v-col cols="12" class="d-flex d-sm-none">
          <v-row>
            <v-col cols="12">
              <v-card flat>
                <v-tabs
                  v-model="tab"
                  background-color="black rounded-pill"
                  centered
                  dark
                  icons-and-text
                >
                  <v-tabs-slider></v-tabs-slider>

                  <v-tab>
                    Phone
                    <v-icon>mdi-cellphone</v-icon>
                  </v-tab>

                  <v-tab>
                    Tablet
                    <v-icon>mdi-tablet</v-icon>
                  </v-tab>

                  <v-tab>
                    Laptop
                    <v-icon>mdi-laptop</v-icon>
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="(view, i) in project.viewsXS" :key="i">
                    <v-card flat>
                      <v-row>
                        <v-col colls="12" align="center">
                          <v-card
                            elevation="8"
                            class="black rounded-xl my-4"
                            :width="view.width"
                          >
                            <v-img contain :src="view.src"> </v-img>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <!-- 3 btn & chips -->
        <v-col cols="12" sm="12" md="4" xl="4" align="center" class="py-0">
          <!-- Chips Group -->
          <v-row justify="center">
            <!-- Used Resoures -->
            <v-col cols="12">
              <v-btn
                class="blue rounded-pill white--text px-8 py-6"
                @click="usedExpand = true"
                v-if="!usedExpand"
              >
                Used Resources<v-icon>mdi-chevron-down</v-icon>
              </v-btn>
              <v-btn
                class="blue rounded-pill white--text"
                @click="usedExpand = false"
                v-if="usedExpand"
              >
                Used Resources<v-icon>mdi-chevron-up</v-icon>
              </v-btn>

              <v-card
                class="pa-4 white mt-4"
                shaped
                elevation="8"
                v-if="usedExpand"
                max-width="320"
              >
                <v-chip-group active-class="primary--text" column>
                  <v-chip
                    v-for="(tag, i) in project.resourcesTags"
                    :key="i"
                    color="blue"
                    class="white--text"
                  >
                    {{ tag.name }}
                  </v-chip>
                </v-chip-group>
              </v-card>
            </v-col>
            <!-- Used Tools -->
            <v-col cols="12">
              <v-btn
                class="black rounded-pill white--text px-12 py-6"
                @click="usedExpandTwo = true"
                v-if="!usedExpandTwo"
              >
                Used Tools<v-icon>mdi-chevron-down</v-icon>
              </v-btn>
              <v-btn
                class="black rounded-pill white--text px-8"
                @click="usedExpandTwo = false"
                v-if="usedExpandTwo"
              >
                Used Tools<v-icon>mdi-chevron-up</v-icon>
              </v-btn>

              <v-card
                class="pa-4 white mt-4"
                shaped
                elevation="8"
                v-if="usedExpandTwo"
                max-width="320"
              >
                <v-chip-group active-class="primary--text" column>
                  <v-chip
                    v-for="(tag, i) in project.toolsTags"
                    :key="i"
                    color="black"
                    class="white--text"
                  >
                    {{ tag.name }}
                  </v-chip>
                </v-chip-group>
              </v-card>
            </v-col>
          </v-row>
          <!-- 3 btns -->
          <v-row>
            <!-- Project Category Icon -->
            <v-col cols="12">
              <v-avatar size="200" class="mt-0 mt-sm-2 mt-xl-0">
                <v-icon
                  v-for="(icon, i) in project.icons"
                  :key="i"
                  :size="icon.size"
                  :color="icon.color"
                  >{{ icon.name }}</v-icon
                >
              </v-avatar>
            </v-col>
            <!-- change href to correct link -->
            <v-col cols="12">
              <v-btn
                link
                :href="project.href"
                target="_blank"
                class="blue white--text rounded-pill"
              >
                {{ project.type }}
              </v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn
                outlined
                @click="dialog = true"
                class="blue--text rounded-pill"
                >Gallery</v-btn
              >
              <!-- Dialog Container  -->
              <v-dialog
                fullscreen
                v-model="dialog"
                v-if="project.items.length > 0"
              >
                <v-card class="white" tile align="center">
                  <v-row>
                    <v-col cols="12" align="end">
                      <v-btn
                        @click="dialog = false"
                        icon
                        outlined
                        class="black"
                      >
                        <v-icon color="white" size="30">mdi-close</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>

                  <v-carousel
                    :continuous="true"
                    :cycle="cycle"
                    show-arrows
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    :height="cardHeight"
                    interval="4000"
                  >
                    <template v-slot:prev="{ on, attrs }">
                      <v-btn color="black" v-bind="attrs" v-on="on"
                        ><v-icon>mdi-arrow-left-thin</v-icon>
                        <p class="mt-0 mt-md-4 d-none d-md-flex">Previous</p>
                      </v-btn>
                    </template>
                    <template v-slot:next="{ on, attrs }">
                      <v-btn color="black" v-bind="attrs" v-on="on">
                        <p class="mt-0 mt-md-4 d-none d-md-flex">Next</p>
                        <v-icon>mdi-arrow-right-thin</v-icon></v-btn
                      >
                    </template>
                    <v-carousel-item
                      v-for="(item, i) in project.items"
                      :key="i"
                      class="white"
                    >
                      <v-sheet height="100%" tile>
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
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
                </v-card>
              </v-dialog>
            </v-col>
            <v-col cols="12">
              <v-btn
                link
                to="/Projects"
                outlined
                class="black--text rounded-pill"
                >Go Back</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-spacer class="py-7" />
    </v-card>
  </v-container>
</template>

<style></style>

<script>
import { mapState } from "vuex";

export default {
  name: "Project",
  data() {
    return {
      tab: null,
      cycle: false,
      dialog: false,
      cardHeight: 0,
      usedExpand: false,
      usedExpandTwo: false,
      showGif: false,
    };
  },
  components: {},
  computed: {
    ...mapState({
      projectsInfo: (state) => state.projectsInfo,
    }),
    Id() {
      return this.$route.params.id;
    },
    project() {
      return this.projectsInfo[this.Id];
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.cardHeight = window.innerHeight;
    },
  },
};
</script>
