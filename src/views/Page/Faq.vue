<template>
  <v-container>
    <!-- FAQ Section -->
    <v-row>
      <v-col cols="6" sm="8">
        <v-img
          max-height="300"
          class="ml-14"
          contain
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Man-thinking-bro_kxHlwoC-m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604076"
          alt="People illustrations by Storyset"
        ></v-img>
      </v-col>
      <v-col
        cols="6"
        sm="4"
        align="start"
        class="mt-7 mt-sm-14 pt-sm-14 ml-sm-n14 px-0"
      >
        <p class="blue--text text-h3"><b>FAQ</b></p>
      </v-col>
    </v-row>
    <!-- Search API -->
    <v-row>
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="12" xl="8">
        <v-card
          flat
          class="white rounded-lg px-0 px-sm-4 px-lg-14 mx-0 mx-sm-4 mx-lg-14"
        >
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
              label="Type in your question"
              placeholder="Start typing to Search"
              prepend-icon="mdi-database-search"
              return-object
            ></v-autocomplete>
          </v-card-text>
          <!-- Answer Card -->
          <!-- Note: Possibly create X1 for regular font & X2 for Increased font -->
          <Transition duration="550" name="nested">
            <v-card shaped class="white ma-6" elevation="5" v-if="model">
              <v-list class="white">
                <v-list-item v-for="(field, i) in fields" :key="i">
                  <!-- Note: Create Standrad Font-->
                  <v-list-item-content class="inner">
                    <v-list-item-title class="blue--text text-wrap">
                      <p class="text-h6">
                        {{ field.value }}
                      </p></v-list-item-title
                    >
                    <v-list-item-subtitle
                      v-for="(answer, i) in field.key"
                      :key="i"
                      class="black--text text-wrap"
                      ><p class="text-h6">
                        {{ answer.name }}
                      </p></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </Transition>
        </v-card>
      </v-col>
    </v-row>
    <!-- Dropdown Lists -->
    <v-row>
      <v-col cols="0" md="1" xl="2" class="d-none d-sm-flex"></v-col>
      <v-col cols="12" sm="12" md="10" xl="8">
        <p class="blue--text text-subtitle-1 text-sm-h6">
          <b>FAQ Categories:</b>
        </p>
        <v-expansion-panels light popout>
          <v-expansion-panel
            class="blue--text rounded-xl pa-2 my-2"
            v-for="questionheader in questionheaders"
            :key="questionheader.id"
          >
            <v-expansion-panel-header>
              <b>{{ questionheader.header }}</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <!--  treeview list -->
              <v-treeview
                open-on-click
                rounded
                hoverable
                class="black--text"
                :items="qa(questionheader.id)"
                item-key="name"
              ></v-treeview>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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

export default {
  name: "Faq",
  data: () => ({
    descriptionLimit: 110,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),
  computed: {
    ...mapState({
      questionheaders: (state) => state.questionheaders,
      questionsanswers: (state) => state.questionsanswers,
    }),
    fields() {
      if (!this.model) return [];

      const fields = [];
      const category = {
        value: "FAQ Category",
        key: [
          {
            name: this.questionheaders
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

  methods: {
    qa(id) {
      return this.questionsanswers.filter((item) => item.id === id);
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
      this.entries = this.questionsanswers;
      this.isLoading = false;
    },
  },
};
</script>
