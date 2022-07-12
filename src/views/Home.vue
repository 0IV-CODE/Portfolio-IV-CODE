<template>
  <v-container>
    <!-- Intro sec -->
    <v-row>
      <v-col cols="1" xl="2"></v-col>
      <v-col cols="10" xl="8">
        <v-spacer class="mt-4 pa-sm-0" />
        <!-- Research Keywords for Tag -->
        <h1 class="seoh1">Front-end Developer creating modern web apps</h1>
      </v-col>
      <v-col cols="1" xl="2"></v-col>
      <v-col cols="1" xl="2" class="pa-0"></v-col>
      <!-- main logo container -->
      <v-col cols="10" xl="8" class="pa-0">
        <v-card class="black rounded-lg" elevation="8" align="center">
          <v-row>
            <v-col cols="12" align="center">
              <v-avatar size="205" class="transparent">
                <v-img
                  :src="mainLogoImg"
                  contain
                  alt="Work illustrations by Storyset"
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer class="pa-7 ma-7"></v-spacer>

    <!-- Intro card sec sm-xl -->
    <v-row class="d-none d-sm-flex">
      <v-col cols="0" xl="1"></v-col>
      <!-- Projects Card -->
      <v-col cols="0" sm="6" md="4" xl="3" align="center">
        <v-card
          class="white rounded-xl pa-6"
          elevation="4"
          width="300"
          height="300"
          align="start"
        >
          <p class="mb-0 text-h6 text-sm-h4 text-xl-h3"><b>Projects</b></p>
          <p class="black--text"><i>Fact</i></p>
          <p>
            As a
            <b class="blue--text">self taught developer</b>
            I've always confronted the idea of settling for average along with
            principle following through to the end.
          </p>
          <v-row>
            <v-col cols="12" align="center">
              <v-btn
                link
                to="/Projects"
                outlined
                class="rounded-pill black--text"
                >Projects</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <!-- Services Card -->
      <v-col cols="0" sm="6" md="4" xl="3" align="center">
        <v-card
          class="white rounded-xl pa-6"
          elevation="4"
          width="300"
          height="300"
          align="start"
        >
          <p class="mb-0 text-h6 text-sm-h4 text-xl-h3"><b>Services</b></p>
          <p class="black--text"><i>Important</i></p>
          <p>
            The standard of yesterday won't adhere to the standard of today. We
            must
            <b class="blue--text">be forerunners</b>
            in todays society, and be willing to be inovators.
          </p>
          <v-row>
            <v-col cols="12" align="center">
              <v-btn link to="/Services" class="rounded-pill black white--text"
                >Services</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <!-- Contact Me Card -->
      <v-col cols="0" sm="12" md="4" xl="3" align="center">
        <v-card
          class="white rounded-xl pa-6"
          elevation="4"
          width="300"
          height="300"
          align="start"
        >
          <p class="mb-0 text-h6 text-sm-h4 text-xl-h3"><b>Contact</b></p>
          <p class="black--text"><i>Hello there</i></p>
          <p>
            I avidly check my emails, so if you'd like to reach out for a
            proposal, service request, or other feel free to
            <b class="blue--text">send me an email</b>
            through the contact form.
          </p>
          <v-row>
            <v-col cols="12" align="center">
              <v-btn
                link
                to="/Contact"
                outlined
                class="rounded-pill black--text"
                >Contact Me</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="0" xl="1"></v-col>
    </v-row>
    <v-spacer class="pa-7 ma-7"></v-spacer>

    <!-- Projects Section xs-xl -->
    <v-row class="d-none d-sm-flex">
      <v-col cols="12" justify="center" align="center">
        <v-card
          class="blue rounded-lg"
          :height="projectHeight"
          :width="projectWidth"
          flat
        >
          <v-row>
            <!-- top row -->
            <v-col cols="12">
              <v-row class="mt-n16">
                <v-col cols="1"></v-col>
                <v-col cols="4">
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card
                        elevation="6"
                        class="transparent"
                        v-animate-onscroll="{
                          down: 'animated fadeInLeft',
                        }"
                      >
                        <v-img
                          src="https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Laptop/steeltech.io__Laptop_with_HIDPI__v4btimD3L.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024522323"
                          alt="STBS Home Page IMG"
                          :height="projectImageHeight"
                          class="rounded-lg"
                        >
                          <v-fade-transition>
                            <v-overlay
                              v-if="hover"
                              absolute
                              class="overlayProjects"
                            >
                              <v-row>
                                <v-col cols="12" align="center">
                                  <!-- Company Logo Here -->
                                  <v-btn link to="/Project/0" icon>
                                    <v-img
                                      src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/STBS-logo/Screenshot_2022-05-03_203403_FGmACR8VC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026891883"
                                      alt="STBS Logo with black background"
                                      contain
                                      height="50"
                                      class="rounded-lg"
                                    ></v-img>
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-overlay>
                          </v-fade-transition>
                        </v-img>
                      </v-card>
                    </template>
                  </v-hover>
                </v-col>
                <v-col cols="4">
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card
                        elevation="6"
                        class="transparent"
                        v-animate-onscroll="{
                          down: 'animated fadeInLeft',
                        }"
                      >
                        <v-img
                          src="https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/CUSA/Live-Images/CUSA_-_Laptop/cusa.io__Laptop_with_HIDPI__4YOqrXYuM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656178897707"
                          alt="CUSA Home PG IMG"
                          :height="projectImageHeight"
                          class="rounded-lg"
                        >
                          <v-fade-transition>
                            <v-overlay
                              v-if="hover"
                              absolute
                              class="overlayProjects"
                            >
                              <v-row>
                                <v-col cols="12" align="center">
                                  <!-- Company Logo Here -->
                                  <v-btn
                                    link
                                    href="https://cusa.io/"
                                    target="_blank"
                                    icon
                                  >
                                    <v-img
                                      src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/CUSA-logo/Components-logo-lrg.984febe8_uMkUUgUSu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026953379"
                                      alt="CUSA Logo with Transparent Background"
                                      contain
                                      height="50"
                                      class="rounded-lg"
                                    ></v-img>
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-overlay>
                          </v-fade-transition>
                        </v-img>
                      </v-card>
                    </template>
                  </v-hover>
                </v-col>
                <!-- Vertical Text & Icon -->
                <v-col cols="2"
                  ><p
                    class="white--text vertical transparent mt-16 pt-16 mb-n2"
                  >
                    Projects
                  </p>
                  <v-icon color="white" class="mx-2 mr-16 vertical">{{
                    imagePlus
                  }}</v-icon>
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>
            </v-col>
            <!-- bottom row -->
            <v-col cols="12">
              <v-row>
                <v-col cols="3"></v-col>
                <v-col cols="4">
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card
                        elevation="6"
                        class="transparent"
                        v-animate-onscroll="{
                          down: 'animated fadeInRight',
                        }"
                      >
                        <v-img
                          src="https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_Laptop/localhost_8080__Laptop_with_HIDPI___4__9kwyogWEb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025043124"
                          alt="IVCODE Projects PG IMG"
                          :height="projectImageHeight"
                          class="rounded-lg"
                        >
                          <v-fade-transition>
                            <v-overlay
                              v-if="hover"
                              absolute
                              class="overlayProjects"
                            >
                              <v-row>
                                <v-col cols="12" align="center">
                                  <!-- Company Logo Here -->
                                  <v-btn link to="/Project/1" icon>
                                    <v-img
                                      src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451"
                                      alt="IVCODE Logo with White Background"
                                      contain
                                      height="50"
                                      class="rounded-lg"
                                    ></v-img>
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-overlay>
                          </v-fade-transition>
                        </v-img>
                      </v-card>
                    </template>
                  </v-hover>
                </v-col>
                <v-col cols="4">
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card
                        elevation="6"
                        class="transparent"
                        v-animate-onscroll="{
                          down: 'animated fadeInRight',
                        }"
                      >
                        <v-img
                          src="https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/6A-Teams/Live_-_Images/6ATEAMS_-_Laptop/_C__Users_IV-PC_Documents_Downloads_Dev_20Basics_20Projects_00_20WEB_HtmlPage10.html_Surface_Pro_6__Cust___sAx-lqtEH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025206782"
                          alt="6ATEAMS Home PG IMG"
                          :height="projectImageHeight"
                          class="rounded-lg"
                        >
                          <v-fade-transition>
                            <v-overlay
                              v-if="hover"
                              absolute
                              class="overlayProjects"
                            >
                              <v-row>
                                <v-col cols="12" align="center">
                                  <!-- Company Logo Here -->
                                  <v-btn link to="/Project/2" icon>
                                    <v-img
                                      src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451"
                                      alt="IVCODE Logo with White Background"
                                      contain
                                      height="50"
                                      class="rounded-lg"
                                    ></v-img>
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-overlay>
                          </v-fade-transition>
                        </v-img>
                      </v-card>
                    </template>
                  </v-hover>
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-spacer class="pa-lg-10 ma-lg-10"></v-spacer>
      </v-col>
    </v-row>
    <!-- xs Projects Section -->
    <v-row class="d-flex d-sm-none">
      <v-col cols="12" justify="center" align="center">
        <v-card class="white" height="300" flat>
          <v-row>
            <v-col cols="4" class="px-1">
              <v-card elevation="4" class="rounded-lg">
                <v-img
                  src="https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/STBS/live-images/STBS-Mobile/steeltech.io__Iphone_12__Custom___V-vEbpyYI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024520223"
                  contain
                  alt="STBS Home PG IMG Mobile"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="4" class="px-1">
              <v-card elevation="4" class="rounded-lg">
                <v-img
                  src="https://ik.imagekit.io/invimgs0101/IV-CODE/Projects/IV-CODE/Live_-_Images/IVCODE_-_MObile/localhost_8080__Iphone_12__Custom____3__NSXIZhQQj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656024985413"
                  contain
                  alt="IVCODE Projects PG IMG Mobile"
                ></v-img>
              </v-card>
            </v-col>

            <v-col cols="4" class="px-0">
              <p class="black--text vertical mt-16 pt-8">
                <b>Projects</b>
              </p>
              <v-icon color="black" class="mx-2 mr-8 vertical">{{
                imagePlus
              }}</v-icon>
            </v-col>
            <v-col cols="12" align="start">
              <v-btn
                link
                to="/Projects"
                class="rounded-pill black--text"
                outlined
                >Projects</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer class="pa-10 ma-10"></v-spacer>

    <!-- Services Section xs-xl -->
    <v-row>
      <!-- left img & card section -->
      <v-col cols="0" md="0" lg="1" xl="2" class="d-none d-sm-flex"></v-col>
      <v-col cols="0" md="5" lg="5" xl="4">
        <v-row class="d-none d-md-flex">
          <v-card class="blue rounded-lg">
            <v-col cols="12">
              <v-img
                src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Developer-activity-amico_lniUgsomI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604093"
                height="250"
                contain
                class="d-none d-sm-flex d-lg-none"
                alt="Work illustrations by Storyset"
              ></v-img>
              <v-img
                src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Developer-activity-amico_lniUgsomI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604093"
                height="450"
                contain
                class="d-none d-lg-flex"
                alt="Work illustrations by Storyset"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <v-card class="transparent pa-4" elevation="0" flat>
                <p class="mb-0 white--text">
                  <b>Using Muliple Technologies</b>
                </p>
                <p class="white--text text-caption">
                  <i>Informative</i>
                </p>
                <p class="white--text">
                  Peanut butter, jelly, and bread create a PB&J sandwich. Like
                  this sandwich has it's own ingredients so does every project
                  you create. The standard for PB&J are those ingredients, but
                  if you are feeling adventurous try adding some
                  <b class="text-decoration-underline white--text"
                    ><a
                      class="white--text"
                      href="https://www.nutella.com/us/en/"
                      target="_blank"
                      >nutella</a
                    ></b
                  >. Adding new technologies has the effect of nutella, which is
                  important in creating unique products.
                </p>
              </v-card>
            </v-col>
          </v-card>
        </v-row>
      </v-col>
      <!-- right 2 Cards section -->
      <v-col cols="0" sm="3" md="0" class="d-none d-sm-flex d-md-none"></v-col>
      <v-col cols="12" sm="9" md="7" lg="6" xl="4">
        <!-- sm-xl -->
        <v-row class="d-none d-sm-flex">
          <v-col cols="12" justify="center" align="center">
            <v-card class="white" flat>
              <v-row>
                <v-col cols="3" class="px-1">
                  <v-spacer class="pa-10 ma-10 pa-sm-5 ma-sm-5"></v-spacer>
                  <p class="black--text vertical-two mt-16 pt-8 pt-sm-16 mb-n2">
                    <b>Services</b>
                  </p>
                  <v-icon
                    color="black"
                    class="mx-2 mt-4 mt-sm-0 ml-8 ml-sm-16 vertical-two"
                    >{{ briefcase }}</v-icon
                  >
                </v-col>
                <v-col cols="9" class="px-1">
                  <v-card
                    align="start"
                    class="white pa-2 pa-sm-4 mb-4 mb-sm-8 rounded-lg"
                    v-animate-onscroll="'animated fadeInRight'"
                  >
                    <p class="mb-0">
                      <v-icon class="mx-1">{{ monitorDashboard }}</v-icon
                      ><b>Front-End Dev</b>
                    </p>

                    <p class="black--text text-caption">
                      <i>Ponder the Statement</i>
                    </p>
                    <p>
                      <b class="blue--text">Curiosity</b> can spark wander, and
                      when it does it's best to have someone capable of
                      <b class="blue--text">invention</b>
                      along with
                      <b class="blue--text">discernment </b>
                      to develop said spark.
                    </p>
                    <v-row>
                      <v-col cols="12" align="end">
                        <v-btn
                          outlined
                          link
                          to="/Service/1"
                          class="black--text rounded-pill px-6 mr-2"
                        >
                          Dev Services
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-card
                    align="start"
                    class="white pa-2 pa-sm-4 rounded-lg"
                    v-animate-onscroll="'animated fadeInRight'"
                  >
                    <p class="mb-0">
                      <v-icon class="mx-1">{{ monitorEdit }}</v-icon
                      ><b>UI/UX</b>
                    </p>
                    <p class="black--text text-caption">
                      <i>Relevance of UI/UX</i>
                    </p>
                    <p>
                      <b class="blue--text">User interaction</b>
                      vary based off audiences according to given web standards
                      &
                      <b class="blue--text">user experience</b>
                      are based off many factors including company, product, and
                      much more. There are steps for every action as well as a
                      reaction to the action, becouse of that our steps are
                      prophets of reactions.
                    </p>
                    <v-row>
                      <v-col cols="12" align="end">
                        <v-btn
                          to="/Service/0"
                          outlined
                          class="black--text rounded-pill mr-2"
                        >
                          UI/UX Services
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <!-- xs -->
        <v-row class="d-flex d-sm-none">
          <v-col cols="12" justify="center" align="center">
            <v-card class="white" flat>
              <v-row>
                <v-col cols="3" class="px-1">
                  <v-spacer class="pa-10 ma-10 pa-sm-5 ma-sm-5"></v-spacer>
                  <p class="black--text vertical-two mt-16 pt-8 pt-sm-16 mb-n2">
                    <b>Services</b>
                  </p>
                  <v-icon
                    color="black"
                    class="mx-2 mt-4 mt-sm-0 ml-8 ml-sm-16 vertical-two"
                    >{{ briefcase }}</v-icon
                  >
                </v-col>
                <v-col cols="9" class="px-1">
                  <v-card
                    align="start"
                    class="white pa-2 pa-sm-4 mb-4 mb-sm-8 rounded-lg"
                  >
                    <p class="mb-0">
                      <v-icon class="mx-1">{{ monitorDashboard }}</v-icon
                      ><b>Front-End Dev</b>
                    </p>

                    <p class="black--text text-caption">
                      <i>Ponder the Statement</i>
                    </p>
                    <p>
                      <b class="blue--text">Curiosity</b> can spark wander, and
                      when it does it's best to have someone capable of
                      <b class="blue--text">invention</b>
                      along with
                      <b class="blue--text">discernment </b>
                      to develop said spark.
                    </p>
                    <v-row>
                      <v-col cols="12" align="end">
                        <v-btn
                          outlined
                          link
                          to="/Service/1"
                          class="black--text rounded-pill px-6 mr-2"
                        >
                          Dev Services
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-card align="start" class="white pa-2 pa-sm-4 rounded-lg">
                    <p class="mb-0">
                      <v-icon class="mx-1">{{ monitorEdit }}</v-icon
                      ><b>UI/UX</b>
                    </p>
                    <p class="black--text text-caption">
                      <i>Relevance of UI/UX</i>
                    </p>
                    <p>
                      <b class="blue--text">User interaction</b>
                      vary based off audiences according to given web standards
                      &
                      <b class="blue--text">user experience</b>
                      are based off many factors including company, product, and
                      much more. There are steps for every action as well as a
                      reaction to the action, becouse of that our steps are
                      prophets of reactions.
                    </p>
                    <v-row>
                      <v-col cols="12" align="end">
                        <v-btn
                          to="/Service/0"
                          outlined
                          class="black--text rounded-pill mr-2"
                        >
                          UI/UX Services
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="0" xl="2" class="d-lg-none d-xl-flex"></v-col>
    </v-row>
    <v-spacer class="pa-7 ma-7"></v-spacer>

    <!-- hard & soft Sec xs-xl -->
    <v-row>
      <v-col cols="0" xl="1"></v-col>
      <v-col cols="12" sm="2" md="3" xl="2" align="center" class="pb-0">
        <p class="text-h5 mt-0 mt-sm-6 mb-0"><b>Skills</b></p>
      </v-col>
      <!-- tabs -->
      <v-col cols="12" sm="8" md="7" xl="6">
        <v-tabs
          v-model="tab"
          background-color="black rounded-pill"
          centered
          dark
          icons-and-text
        >
          <v-tab> Hard </v-tab>
          <v-tab> Soft </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <!-- hard tab -->
          <v-tab-item>
            <v-card flat>
              <v-row>
                <v-col
                  cols="6"
                  v-for="(card, i) in skillsCards.slice(0, 4)"
                  :key="i"
                  align="center"
                >
                  <!-- sm-xl -->
                  <v-hover v-slot="{ hover }">
                    <v-card
                      max-height="250"
                      :width="cardWidth"
                      class="white mt-4"
                      elevation="4"
                      shaped
                      v-animate-onscroll="'animated flipInX'"
                    >
                      <v-img
                        height="250"
                        :src="card.img"
                        :alt="card.altSrc"
                        class="align-end d-none d-sm-flex"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out black v-card--reveal"
                            style="height: 100%"
                          >
                            <!-- skills section -->
                            <v-row>
                              <v-col cols="12" class="pb-0">
                                <p class="white--text mb-0"><b>Known:</b></p>
                              </v-col>
                              <v-col
                                cols="12"
                                align="center"
                                class="py-0"
                                v-for="(skill, i) in card.skills"
                                :key="i"
                              >
                                <p class="white--text my-0">
                                  {{ skill.skill }}
                                </p>
                              </v-col>
                            </v-row>
                          </div>
                        </v-expand-transition>
                        <v-row>
                          <v-col cols="12" align="start">
                            <p class="grey--text ml-2 mb-0">
                              <b>{{ card.soon }}</b>
                            </p>
                            <p :class="card.pstyle">
                              <v-icon :color="card.iconstyle" class="mx-2">{{
                                card.icon
                              }}</v-icon
                              ><b>{{ card.name }}</b>
                            </p>
                          </v-col>
                        </v-row>
                      </v-img>
                    </v-card>
                  </v-hover>
                  <!-- xs -->
                  <v-img
                    height="150"
                    :src="card.img"
                    :alt="card.altSrc"
                    class="align-end d-flex d-sm-none rounded-xl"
                  >
                    <v-row>
                      <v-col cols="12" align="start">
                        <p class="grey--text ml-2 mb-0">
                          <b>{{ card.soon }}</b>
                        </p>
                        <p :class="card.pstyle">
                          <v-icon :color="card.iconstyle" class="mx-2">{{
                            card.icon
                          }}</v-icon
                          ><b>{{ card.name }}</b>
                        </p>
                      </v-col>
                    </v-row>
                  </v-img>
                </v-col>
                <v-col cols="12" align="center">
                  <v-btn
                    link
                    to="/About"
                    class="rounded-pill black--text"
                    outlined
                    >About Me</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <!-- soft tab -->
          <v-tab-item>
            <v-card flat>
              <v-row>
                <v-col
                  cols="6"
                  v-for="(card, i) in skillsCards.slice(4, 8)"
                  :key="i"
                  align="center"
                >
                  <!-- sm-xl -->
                  <v-hover v-slot="{ hover }">
                    <v-card
                      max-height="250"
                      width="250"
                      class="white mt-4"
                      elevation="4"
                      shaped
                    >
                      <v-img
                        height="250"
                        :src="card.img"
                        :alt="card.altSrc"
                        class="align-end d-none d-sm-flex"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out black v-card--reveal"
                            style="height: 100%"
                          >
                            <!-- skills section -->
                            <v-row>
                              <v-col cols="12" class="pb-0">
                                <p class="white--text mb-0"><b>Known:</b></p>
                              </v-col>
                              <v-col
                                cols="12"
                                align="center"
                                class="py-0"
                                v-for="(skill, i) in card.skills"
                                :key="i"
                              >
                                <p class="white--text my-0">
                                  {{ skill.skill }}
                                </p>
                              </v-col>
                            </v-row>
                          </div>
                        </v-expand-transition>

                        <v-row>
                          <v-col cols="12" align="start">
                            <p class="grey--text ml-2 mb-0">
                              <b>{{ card.soon }}</b>
                            </p>
                            <p :class="card.pstyle">
                              <v-icon :color="card.iconstyle" class="mx-2">{{
                                card.icon
                              }}</v-icon
                              ><b>{{ card.name }}</b>
                            </p>
                          </v-col>
                        </v-row>
                      </v-img>
                    </v-card>
                  </v-hover>

                  <!-- xs -->
                  <v-img
                    height="150"
                    :src="card.img"
                    :alt="card.altSrc"
                    class="align-end d-flex d-sm-none rounded-xl"
                  >
                    <v-row>
                      <v-col cols="12" align="start">
                        <p class="white--text ml-2 mb-0">
                          <b>{{ card.soon }}</b>
                        </p>
                        <p :class="card.pstyle">
                          <v-icon :color="card.iconstyle" class="mx-2">{{
                            card.icon
                          }}</v-icon
                          ><b>{{ card.name }}</b>
                        </p>
                      </v-col>
                    </v-row>
                  </v-img>
                </v-col>
                <v-col cols="12" align="center">
                  <v-btn
                    link
                    to="/About"
                    class="rounded-pill black--text"
                    outlined
                    >About Me</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col cols="0" sm="2" md="2" xl="2"></v-col>
    </v-row>
    <v-spacer class="pa-7 ma-7"></v-spacer>

    <!-- Contact Me Section -->
    <v-row>
      <!-- Contact Me Card & Card-->
      <v-col cols="12" sm="12" md="7">
        <v-row>
          <v-col cols="11" sm="8" md="9" lg="12" align="center" class="mb-8">
            <v-card class="black rounded-xl pa-4 mr-n16" width="400">
              <v-img
                src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Email-capture-bro_wLYBXvLrM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025603885"
                height="300"
                class="rounded-lg"
                alt="Online illustrations by Storyset"
              ></v-img>
              <v-row>
                <v-col cols="12" class="pb-0 mt-8">
                  <v-btn to="/Contact" class="white black--text rounded-pill"
                    >Contact Me</v-btn
                  >
                </v-col>
                <v-col cols="12">
                  <v-btn
                    link
                    href="https://www.instagram.com/iv_greatopus"
                    class="white--text rounded-pill"
                    target="_blank"
                    outlined
                    >Follow Me</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="0" md="2" class="d-none d-md-flex d-lg-none"></v-col>
        </v-row>
      </v-col>
      <!-- Instagram iphone 4 Copy -->
      <v-col cols="0" md="5" class="d-none d-md-flex">
        <v-card
          align="start"
          height="480"
          width="320"
          class="black rounded-xl pa-4"
          v-animate-onscroll="'animated rollIn'"
        >
          <!-- menu section -->
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-row>
                <v-col cols="2">
                  <v-icon color="white" size="25" class="mt-n2">{{
                    arrowLeft
                  }}</v-icon>
                </v-col>
                <v-col cols="5">
                  <p class="white--text text-body-2"><b>iv_greatopus</b></p>
                </v-col>
                <v-col cols="3"></v-col>
                <v-col cols="2">
                  <v-icon color="white">{{ dotsVertical }}</v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- img row Row -->
          <v-row class="mt-2">
            <v-col cols="3">
              <v-avatar size="60">
                <v-img
                  src="https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/PXL_20211128_190606085_tefJwCJdJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656026573945"
                  alt="Isaac Image from Instagram"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="9" class="mt-2">
              <v-row>
                <v-col cols="4" class="px-0" align="center">
                  <p class="white--text mb-0 text-caption">0</p>
                  <p class="white--text text-caption">Posts</p>
                </v-col>
                <v-col cols="4" class="px-0" align="center">
                  <p class="white--text mb-0 text-caption">356</p>
                  <p class="white--text text-caption">Followers</p>
                </v-col>
                <v-col cols="4" class="px-0" align="center">
                  <p class="white--text mb-0 text-caption">370</p>
                  <p class="white--text text-caption">Following</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- Bio Section -->
          <v-row class="mt-n5">
            <v-col cols="12" class="my-0">
              <p class="white--text text-caption my-0"><b>Isaac</b></p>
              <p class="white--text text-caption my-0">2 Timothy 2:3 (Amen)</p>
              <p class="white--text text-caption my-0">
                Front-End Developer / IT Specialist
              </p>
              <p class="white--text text-caption my-0">21</p>
            </v-col>
          </v-row>
          <!-- following & message section -->
          <v-row>
            <v-col cols="12" class="pt-0">
              <!-- link intsa -->
              <v-card class="blue pa-1" align="center">
                <a
                  href="https://www.instagram.com/iv_greatopus"
                  alt="My Instagram Account"
                  target="_blank"
                >
                  <p class="white--text text-caption ma-0">Follow</p>
                </a>
              </v-card>
            </v-col>
            <v-col cols="12" class="pa-0 mt-2">
              <v-divider class="grey darken-3"></v-divider>
            </v-col>
          </v-row>
          <!-- Private Account -->
          <v-row>
            <v-col cols="3">
              <v-card
                class="outline-g rounded-circle pa-1 mt-n1"
                align="center"
              >
                <v-icon color="white" class="ma-1" size="25">{{
                  lockOutline
                }}</v-icon>
              </v-card>
            </v-col>
            <v-col cols="9" class="pa-0 mt-1">
              <p class="white--text text-caption my-0">
                <b>This Account is Private</b>
              </p>
              <p class="white--text smallText my-0">
                Follow this account to see their photos and videos.
              </p>
            </v-col>
          </v-row>
          <v-spacer class="pa-7 ma-7"></v-spacer>
          <v-spacer class="pa-2 ma1"></v-spacer>
          <!-- Footer -->
          <v-row justify="center">
            <v-col cols="12" class="pa-0">
              <v-divider class="grey darken-3"></v-divider>
            </v-col>
            <v-col cols="2" justify="center">
              <v-icon color="white" size="25">{{ homeVariant }}</v-icon>
            </v-col>
            <v-col cols="2" justify="center">
              <v-icon color="white" size="25">{{ magnify }}</v-icon>
            </v-col>
            <v-col cols="2" justify="center">
              <v-icon color="white" size="25">{{ movieOutline }}</v-icon>
            </v-col>
            <v-col cols="2" justify="center">
              <v-icon color="white" size="25">{{ shoppingOutline }}</v-icon>
            </v-col>
            <v-col cols="2" justify="center">
              <v-icon color="white" size="25">{{
                accountCircleOutline
              }}</v-icon>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer class="pa-7 ma-7"></v-spacer>
  </v-container>
</template>

<style scoped>
.smallText {
  font-size: 11px !important;
  color: rgb(206, 189, 189) !important;
}
.outline-g {
  border: 1px solid white !important;
  background-color: transparent !important;
}
.vertical {
  display: block;
  transform: rotate(90deg);
}
.vertical-two {
  display: block;
  transform: rotate(270deg);
}
.overlayProjects {
  background-color: rgba(0, 0, 0, 0.5);
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
.seoh1 {
  font-size: 11px !important;
}
</style>

<script>
//Imported Icons
import { mdiImagePlus } from "@mdi/js";
import { mdiBriefcase } from "@mdi/js";
import { mdiMonitorDashboard } from "@mdi/js";
import { mdiMonitorEdit } from "@mdi/js";
import { mdiArrowLeft } from "@mdi/js";
import { mdiDotsVertical } from "@mdi/js";
import { mdiLockOutline } from "@mdi/js";
import { mdiHomeVariant } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiMovieOutline } from "@mdi/js";
import { mdiShoppingOutline } from "@mdi/js";
import { mdiAccountCircleOutline } from "@mdi/js";

import { mapState } from "vuex";
export default {
  name: "Home",
  data: () => ({
    tab: null,
    //Icon Ref Name
    imagePlus: mdiImagePlus,
    briefcase: mdiBriefcase,
    monitorDashboard: mdiMonitorDashboard,
    monitorEdit: mdiMonitorEdit,
    arrowLeft: mdiArrowLeft,
    dotsVertical: mdiDotsVertical,
    lockOutline: mdiLockOutline,
    homeVariant: mdiHomeVariant,
    magnify: mdiMagnify,
    movieOutline: mdiMovieOutline,
    shoppingOutline: mdiShoppingOutline,
    accountCircleOutline: mdiAccountCircleOutline,
  }),
  computed: {
    ...mapState({
      skillsCards: (state) => state.skillsCards,
    }),
    // Intro Logo IMG Sizing
    mainLogoImg() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "https://ik.imagekit.io/invimgs0101/tr:q-20/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451";
        case "sm":
          return "https://ik.imagekit.io/invimgs0101/tr:q-40/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451";
        case "md":
          return "https://ik.imagekit.io/invimgs0101/tr:q-60/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451";
        case "lg":
          return "https://ik.imagekit.io/invimgs0101/tr:q-80/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451";
        case "xl":
          return "https://ik.imagekit.io/invimgs0101/tr:q-80//IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451";
        default:
          // fallback
          return "https://ik.imagekit.io/invimgs0101/tr:q-40, bl-10/IV-CODE/logos/ivcode-logo/Wolf_BLACK_U9jK_vyvA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848451";
      }
    },
    /* cardWidth v-binded to width of skills card sm-xl
    that dynamicly change based off breakpoints */
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return NaN;
        case "sm":
          return 225;
        case "md":
          return 275;
        case "lg":
          return 300;
        case "xl":
          return 350;
        default:
          // fallback
          return 275;
      }
    },
    // Projects Section Card width
    projectWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return NaN;
        case "sm":
          return 800;
        case "md":
          return 800;
        case "lg":
          return 1200;
        case "xl":
          return 1200;
        default:
          // fallback
          return 800;
      }
    },
    // Projects Section Card Height
    projectHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return NaN;
        case "sm":
          return 350;
        case "md":
          return 425;
        case "lg":
          return 425;
        case "xl":
          return 425;
        default:
          // fallback
          return 400;
      }
    },
    // Projects Section Card Image Height
    projectImageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return NaN;
        case "sm":
          return 200;
        case "md":
          return 250;
        case "lg":
          return 350;
        case "xl":
          return 350;
        default:
          // fallback
          return 250;
      }
    },
  },
};
</script>
