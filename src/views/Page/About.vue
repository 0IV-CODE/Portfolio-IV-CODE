<template>
  <!-- Note: Create gif for blue box -->
  <v-container>
    <!-- Intro Video Section -->
    <v-row class="flex-row-reverse flex-sm-row-reverse flex-md-row">
      <v-col cols="0" md="6" class="d-none d-sm-flex"></v-col>
      <v-col cols="6" align="center" class="mb-0 mb-sm-n14 mt-14 mt-md-0">
        <p class="text-h5 text-sm-h3 blue--text mt-7 mt-lg-0">
          <b>About Me</b>
        </p>
      </v-col>
      <v-col cols="6">
        <v-img
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Taking-notes-amico_5-4RLp4Qvk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604306"
          alt="Work illustrations by Storyset"
          contain
          height="350"
          class="d-none d-sm-flex"
        ></v-img>
        <v-img
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Taking-notes-amico_5-4RLp4Qvk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604306"
          alt="Work illustrations by Storyset"
          contain
          height="225"
          class="d-flex d-sm-none"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        sm="8"
        md="6"
        xl="5"
        align="center"
        class="mt-0 mt-md-14 pt-0 pt-md-14"
      >
        <v-card
          height="300"
          class="blue pa-14 mr-0 mr-sm-n14 mr-md-0 rounded-xl d-none d-sm-flex"
        >
          <v-img
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Profile-data-bro_MSKkkjLQO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025603987"
            alt="Work illustrations by Storyset"
            contain
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer class="py-14 d-none d-sm-flex"></v-spacer>
    <!-- Pro summary cards sm-xl-->
    <v-row class="d-none d-sm-flex">
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="12" xl="8" align="start">
        <p class="text-h6 text-sm-h4 text-xl-h3 blue--text my-0">
          <b>Part of my Journey</b>
        </p>
      </v-col>
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <!-- HTML & CSS -->
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="0" sm="6" md="4" xl="3">
        <v-card class="white pa-4" shaped elevation="20">
          <p class="blue--text" align="center"><b>HTML & CSS</b></p>
          <p>
            At the end of 2020 after moving from California to Missouri, I felt
            the strong urge to learn how to code, and yes it was for the
            childish hope to be a so called hacker.
          </p>
        </v-card>
      </v-col>
      <!-- Angular Bootcamp -->
      <v-col cols="0" sm="6" md="4" xl="3">
        <v-card class="white pa-4" shaped elevation="20">
          <p class="blue--text" align="center"><b>Angular Bootcamp</b></p>
          <p>
            I began with tuturial hell, brutal tuturials left and right.
            Suddenly out of thin air arrised the opportunity to learn a
            framework. I took the opportunity and half way through failed.
          </p>
        </v-card>
      </v-col>
      <v-col cols="0" sm="3" class="d-none d-sm-flex d-md-none"></v-col>
      <!-- Re-learned HTML, CSS, & JS -->
      <v-col cols="0" sm="6" md="4" xl="3">
        <v-card class="white pa-4" shaped elevation="20">
          <p class="blue--text" align="center">
            <b>Re-learned HTML, CSS, & JS</b>
          </p>
          <p>
            Failure is something you have to overcome in order to suceed. I went
            back to the self taught route. Project after project I learned how
            to google, prioritize, and visualize wireframes.
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer class="py-14 d-none d-sm-flex"></v-spacer>
    <!-- 3 Sections More sm-xl-->
    <v-row class="d-none d-sm-flex">
      <!-- IT Specialist -->
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="0" sm="12" lg="4" xl="3" class="pa-7">
        <v-row>
          <v-col cols="12" sm="6" lg="12">
            <v-img
              src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Secure-Server-amico_CbrBrnzFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604075"
              alt="Technology illustrations by Storyset"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6" lg="12">
            <v-card
              class="white pa-4"
              shaped
              elevation="20"
              v-animate-onscroll="'animated fadeInUp'"
            >
              <p class="blue--text" align="center">
                <b>IT Specialist</b>
              </p>
              <p>
                Towards the end of 2021 once again opportunity was at hand.
                Disguised within was the another opportunity to learn skills I
                was yet to know. In the coming months my IT GED levels rose
                dramatically thanks to my Sensei.
              </p>
              <v-row justify="space-around">
                <v-col cols="auto">
                  <!-- Dialog IT Specialist -->
                  <v-dialog transition="dialog-top-transition" max-width="600">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        outlined
                        class="blue--text rounded-pill"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Read More
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card class="pa-7 rounded-xl">
                        <v-row>
                          <v-col cols="12" align="end" class="px-0 pt-2 pb-0">
                            <v-btn
                              outlined
                              @click="dialog.value = false"
                              class="blue--text"
                              ><v-icon color="blue">{{ close }}</v-icon></v-btn
                            >
                          </v-col>
                        </v-row>
                        <v-row
                          class="mt-n4 flex-row-reverse flex-sm-row-reverse flex-sm-column"
                        >
                          <v-col cols="6" sm="12">
                            <v-img
                              height="300"
                              contain
                              class="d-none d-sm-flex"
                              src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Secure-Server-amico_CbrBrnzFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604075"
                              alt="Technology illustrations by Storyset" />
                            <v-img
                              class="d-flex d-sm-none"
                              src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Secure-Server-amico_CbrBrnzFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604075"
                              alt="Technology illustrations by Storyset"
                          /></v-col>
                          <v-col cols="6" sm="12" align="center" class=""
                            ><p class="blue--text mt-10 mb-n5">
                              <b>IT Specialist</b>
                            </p></v-col
                          >
                        </v-row>
                        <v-row>
                          <v-col cols="12">
                            <!-- 3 IT Points in dialog box popup -->
                            <ul>
                              <li>
                                <p>
                                  There is plenty to talk about in this field,
                                  so I'll try to keep it short. When I joined
                                  the field of IT I had some experience, but
                                  like any job what you think you know is thrown
                                  out the door by either betters ways or just
                                  company standards. At first I was mainly "Help
                                  Desk" along with desktop/laptop setup since a
                                  document could guide me, and little
                                  supervision was needed.
                                </p>
                              </li>
                              <li>
                                <p>
                                  Later after building my own pc from scratch,
                                  and setting up a home network with the
                                  capacity to handle a small business I was
                                  given more responsibility. Basic Active
                                  Directory changes, account management, admin
                                  access, and much more was given to me in sight
                                  of seeing the ease of use I found in systems.
                                </p>
                              </li>
                              <li>
                                <p>
                                  After half a year in the company the CTO and I
                                  wondered if we could build website for tech
                                  inventory. We wanted to have something that
                                  had CRUD functionality for tech items in
                                  database, dashboard insights, log of changes,
                                  and export to Excel option. The answer was
                                  yes, and together we started the UI/UX
                                  process... (To be Continued)
                                </p>
                              </li>
                            </ul>
                          </v-col>
                          <v-col cols="12" align="center" class="pa-0">
                            <v-btn
                              link
                              to="/Faq"
                              outlined
                              color="blue"
                              class="rounded-pill"
                              ><v-icon class="px-1">{{
                                frequentlyAskedQuestions
                              }}</v-icon
                              >FAQ
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- Vue Framework & Dependencies -->
      <v-col
        cols="0"
        sm="12"
        lg="4"
        xl="3"
        class="my-7 my-lg-0 blue rounded-xl pa-7"
      >
        <v-row>
          <v-col cols="12" sm="6" lg="12">
            <v-card
              class="white pa-4"
              shaped
              elevation="20"
              v-animate-onscroll="'animated fadeInUp'"
            >
              <p class="blue--text" align="center">
                <b>Vue Framework & Dependencies</b>
              </p>
              <p>
                Again after a pair of months opportunity showed up. This time
                unlike the last few time I was prepared, so I was able to handle
                the sudden change. Wait Change? yes I was given the opportunity
                to learn the companies framework & dependencies.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="12">
            <v-img
              src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Developer-activity-amico_lniUgsomI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604093"
              alt=""
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <!-- UI/UX -->
      <v-col cols="0" sm="12" lg="4" xl="3" class="pa-7">
        <v-row>
          <v-col cols="12" sm="6" lg="12">
            <v-img
              src="https://i.imgur.com/JGGngqp.png"
              alt="Work illustrations by Storyset"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6" lg="12">
            <v-card
              class="white pa-4"
              shaped
              elevation="20"
              v-animate-onscroll="'animated fadeInUp'"
            >
              <p class="blue--text" align="center">
                <b>UI/UX</b>
              </p>
              <p>
                Shortly after I decided to venture out to the unkown to locate
                the hidden treasure of "UI/UX". This venture proved to be
                lucrative in many ways, and now I'm developing it into the
                pre-production stage. This step along with the last few steps
                made me realize that I have a long way to go.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-spacer class="py-14 d-none d-sm-flex"></v-spacer>
    <!-- Interest Search md-xl -->
    <v-row class="d-none d-md-flex">
      <!-- Statement -->
      <v-col cols="12" align="center">
        <p class="black--text">
          <v-icon color="blue">{{ information }}</v-icon>
          Below is a possible answer to a random question...
        </p>
      </v-col>
      <!-- Left 2 Imgs -->
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="3" xl="2">
        <v-card shaped class="mb-7" v-animate-onscroll="'animated fadeInLeft'">
          <v-img
            height="200"
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/About/PXL_20210604_195805590_abkpcFqr8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656025905397"
            alt="My Yamaha R3 Sportbike"
          ></v-img>
        </v-card>
        <v-card shaped v-animate-onscroll="'animated fadeInLeft'">
          <v-img
            height="200"
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/About/PXL_20211122_041053816.MP_PXwprUrRC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656025906321"
            alt="New World Dungeon Run Checkpoint"
          ></v-img>
        </v-card>
      </v-col>
      <!-- Interest Search -->
      <v-col cols="6" xl="5">
        <v-card flat class="white rounded-lg">
          <v-card-text>
            <v-autocomplete
              v-model="model"
              :items="items"
              :loading="isLoading"
              :search-input.sync="search"
              color="blue"
              clearable
              hide-no-data
              hide-selected
              item-text="name"
              item-value="name"
              label="You might find an answer..."
              placeholder="Start typing to Search"
              :prepend-icon="databaseSearch"
              return-object
            ></v-autocomplete>
          </v-card-text>
          <!-- Answer for question -->
          <Transition duration="550" name="nested">
            <v-card shaped class="white ma-6" elevation="5" v-if="model">
              <v-list class="white">
                <v-list-item v-for="(field, i) in fields" :key="i">
                  <v-list-item-content>
                    <v-list-item-title class="blue--text text-wrap">
                      <p>{{ field.value }}</p></v-list-item-title
                    >
                    <v-list-item-subtitle
                      v-for="(answer, i) in field.key"
                      :key="i"
                      class="black--text text-wrap"
                      ><p>{{ answer.name }}</p></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </Transition>
        </v-card>
      </v-col>
      <!-- Right 2 Imgs -->
      <v-col cols="3" xl="2">
        <v-card shaped class="mb-7" v-animate-onscroll="'animated fadeInRight'">
          <v-img
            height="200"
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/About/PXL_20220201_014506776.NIGHT_BWvcPSlMn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656025904397"
            alt="PC Setup Red RGB Theme"
          ></v-img>
        </v-card>
        <v-card shaped v-animate-onscroll="'animated fadeInRight'">
          <v-img
            height="200"
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/About/PXL_20220215_010824231.PORTRAIT_TyEgEdTBS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656025905927"
            alt="One of my hobbies"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- Pro summary cards xs-->
    <v-row class="d-flex d-sm-none">
      <v-col cols="12" align="center">
        <p class="text-h6 text-sm-h4 text-xl-h3 blue--text my-0">
          <b>Part of my Journey</b>
        </p>
      </v-col>
      <v-col cols="12" class="px-0">
        <v-stepper v-model="e6" vertical flat class="">
          <!-- HTML & CSS -->
          <v-stepper-step editable step="1"> HTML & CSS </v-stepper-step>
          <v-stepper-content step="1">
            <v-card class="mb-12 ma-1 pa-3 white" shaped elevation="4">
              <p>
                At the end of 2020 after moving from California to Missouri, I
                felt the strong urge to learn how to code, and yes it was for
                the childish hope to be a so called hacker.
              </p>
              <v-btn class="blue white--text rounded-pill" @click="e6 = 2">
                Continue
              </v-btn>
              <v-btn
                class="blue--text rounded-pill mx-2"
                outlined
                @click="e6 = 6"
              >
                End
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- Angular Bootcamp -->
          <v-stepper-step editable step="2"> Angular Bootcamp </v-stepper-step>
          <v-stepper-content step="2">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                I began with tuturial hell, brutal tuturials left and right.
                Suddenly out of thin air arrised the opportunity to learn a
                framework. I took the opportunity and half way through failed.
              </p>
              <v-btn class="blue white--text rounded-pill" @click="e6 = 3">
                Continue
              </v-btn>
              <v-btn
                class="blue--text rounded-pill mx-2"
                outlined
                @click="e6 = 1"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- Re-learned HTML, CSS, & JS -->
          <v-stepper-step editable step="3">
            Re-learned HTML, CSS, & JS
          </v-stepper-step>
          <v-stepper-content step="3">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                Failure is something you have to overcome in order to suceed. I
                went back to the self taught route. Project after project I
                learned how to google, prioritize, and visualize wireframes.
              </p>
              <v-btn class="blue white--text rounded-pill" @click="e6 = 4">
                Continue
              </v-btn>
              <v-btn
                class="blue--text rounded-pill mx-2"
                outlined
                @click="e6 = 2"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- IT Specialist -->
          <v-stepper-step editable step="4"> IT Specialist</v-stepper-step>
          <v-stepper-content step="4">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                Towards the end of 2021 once again opportunity was at hand.
                Disguised within was the another opportunity to learn skills I
                was yet to know. In the coming months my IT GED levels rose
                dramatically thanks to my Sensei.
              </p>
              <v-btn
                outlined
                class="blue--text rounded-pill ma-2"
                @click="e6 = 5"
              >
                Continue
              </v-btn>
              <!-- Dialog IT Specialist -->
              <v-dialog transition="dialog-top-transition" max-width="100%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="blue--text rounded-pill ma-2"
                    outlined
                    v-bind="attrs"
                    v-on="on"
                  >
                    Read More
                  </v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card class="pa-7 rounded-xl" elevation="24">
                    <v-row>
                      <v-col cols="12" align="end" class="px-0 pt-2 pb-0">
                        <v-btn
                          outlined
                          @click="dialog.value = false"
                          class="blue--text"
                          ><v-icon color="blue">{{ close }}</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row
                      class="mt-n4 flex-row-reverse flex-sm-row-reverse flex-sm-column"
                    >
                      <v-col cols="6" sm="12">
                        <v-img
                          class="d-flex d-sm-none"
                          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Secure-Server-amico_CbrBrnzFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604075"
                          alt="Technology illustrations by Storyset"
                      /></v-col>
                      <v-col cols="6" sm="12" align="center" class=""
                        ><p class="blue--text mt-10 mb-n5">
                          <b>IT Specialist</b>
                        </p></v-col
                      >
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <!-- 3 IT Points in dialog box popup -->
                        <ul>
                          <li>
                            <p>
                              There is plenty to talk about in this field, so
                              I'll try to keep it short. When I joined the field
                              of IT I had some experience, but like any job what
                              you think you know is thrown out the door by
                              either betters ways or just company standards. At
                              first I was mainly "Help Desk" along with
                              desktop/laptop setup since a document could guide
                              me, and little supervision was needed.
                            </p>
                          </li>
                          <li>
                            <p>
                              Later after building my own pc from scratch, and
                              setting up a home network with the capacity to
                              handle a small business I was given more
                              responsibility. Basic Active Directory changes,
                              account management, admin access, and much more
                              was given to me in sight of seeing the ease of use
                              I found in systems.
                            </p>
                          </li>
                          <li>
                            <p>
                              After half a year in the company the CTO and I
                              wondered if we could build website for tech
                              inventory. We wanted to have something that had
                              CRUD functionality for tech items in database,
                              dashboard insights, log of changes, and export to
                              Excel option. The answer was yes, and together we
                              started the UI/UX process... (To be Continued)
                            </p>
                          </li>
                        </ul>
                      </v-col>
                      <v-col cols="12" align="center" class="pa-0">
                        <v-btn
                          link
                          to="/Faq"
                          outlined
                          color="blue"
                          class="rounded-pill"
                          ><v-icon class="px-1">{{
                            frequentlyAskedQuestions
                          }}</v-icon
                          >FAQ
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </template>
              </v-dialog>

              <v-btn
                class="blue--text rounded-pill ma-2"
                outlined
                @click="e6 = 3"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- Vue Framework & Dependencies-->
          <v-stepper-step editable step="5">
            Vue Framework & Dependencies</v-stepper-step
          >
          <v-stepper-content step="5">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                Again after a pair of months opportunity showed up. This time
                unlike the last few time I was prepared, so I was able to handle
                the sudden change. Wait Change? yes I was given the opportunity
                to learn the companies framework & dependencies.
              </p>
              <v-btn class="blue white--text rounded-pill" @click="e6 = 6">
                Continue
              </v-btn>
              <v-btn
                class="blue--text rounded-pill mx-2"
                outlined
                @click="e6 = 4"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- UI/UX-->
          <v-stepper-step editable step="6"> UI/UX</v-stepper-step>
          <v-stepper-content step="6">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                Shortly after I decided to venture out to the unkown to locate
                the hidden treasure of "UI/UX". This venture proved to be
                lucrative in many ways, and now I'm developing it into the
                pre-production stage. This step along with the last few steps
                made me realize that I have a long way to go.
              </p>
              <v-btn class="blue white--text rounded-pill" @click="e6 = 1">
                Start
              </v-btn>
              <v-btn
                class="blue--text rounded-pill mx-2"
                outlined
                @click="e6 = 5"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.outer,
.inner {
  background: inherit;
}

.inner {
  background: inherit;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>

<script>
import { mapState } from "vuex";
//Icons Import
import { mdiClose } from "@mdi/js";
import { mdiFrequentlyAskedQuestions } from "@mdi/js";
import { mdiInformation } from "@mdi/js";
import { mdiDatabaseSearch } from "@mdi/js";

export default {
  name: "About",
  data: () => ({
    e6: 1,
    descriptionLimit: 110,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
    //Icons
    close: mdiClose,
    frequentlyAskedQuestions: mdiFrequentlyAskedQuestions,
    information: mdiInformation,
    databaseSearch: mdiDatabaseSearch,
  }),
  computed: {
    ...mapState({
      headersabout: (state) => state.headersabout,
      answersabout: (state) => state.answersabout,
    }),
    fields() {
      if (!this.model) return [];

      const fields = [];
      const category = {
        value: "Type of Question",
        key: [
          {
            name: this.headersabout
              .filter((item) => item.id === this.model.id)
              .map((item) => item.header)[0],
          },
        ],
      };
      const qa = {
        value: this.model.name,
        key: this.model.children,
      };
      fields.push(category);
      fields.push(qa);

      return fields;
    },
    items() {
      return this.entries.map((entry) => {
        const name =
          entry.name.length > this.descriptionLimit
            ? entry.name.slice(0, this.descriptionLimit) + "..."
            : entry.name;

        return Object.assign({}, entry, { name });
      });
    },
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      this.entries = this.answersabout;
      this.isLoading = false;
    },
  },
};
</script>
