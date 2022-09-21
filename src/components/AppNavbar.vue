<template>
  <v-app-bar color="white" app fixed clipped-left class="special-z" flat>
      <v-toolbar-title>
        <router-link to="/" class="_headline">
          <span class="my-app-title">Gate 0 Inspection</span>
          <span class="version">v2.1.11</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-text-field class="ml-2" background-color="white" color="#01003D" placeholder="Search for documents, materials, CNRs, ESN, Tail, etc" solo dense hide-details single-line>
        <template v-slot:append>
          <v-icon small class="mr-1" color="#01003D">mdi-magnify</v-icon>
          <v-icon small color="#01003D" >mdi-information-outline</v-icon>
        </template>
      </v-text-field>
      <v-spacer></v-spacer> -->

      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-badge dot color="red">
            <v-icon color="#01003D" v-bind="attrs" v-on="on">mdi-bell-outline</v-icon>
          </v-badge>
        </template>

        <v-list dense>
          <v-list-item @click="() => {}">
            <v-list-item-title>Notification 1</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="() => {}">
            <v-list-item-title>Notification 2</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="() => {}">
            <v-list-item-title>Notification 3</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="() => {}">
            <v-list-item-title>Notification 4</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="() => {}">
            <v-list-item-title>Notification 5</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      

      <v-icon class="mx-3 ml-6" color="#01003D">mdi-information-outline</v-icon>

      <v-badge dot color="red">
        <v-icon color="#01003D">mdi-update</v-icon>
      </v-badge>

      <v-icon class="mx-3 ml-6" color="#01003D">mdi-comment-question-outline</v-icon>

      <v-icon class="mx-3" color="#01003D">mdi-account-outline</v-icon>
      

      <v-icon class="mr-1 ml-3" color="#01003D">mdi-dots-grid</v-icon>

          
      <!-- <template v-slot:extension>
        <v-tabs background-color="#01003D" class="special-z-less">
          <v-tab class="text-capitalize body-2" to="/since-you-been-gone">Latest Updates</v-tab>
          <v-tab class="text-capitalize body-2" to="/feature-flag">Feature Flag</v-tab>
          <v-tab class="text-capitalize body-2" to="/">Tab 4</v-tab>
          <v-tab to="/"><v-icon small >mdi-tab-plus</v-icon></v-tab>
        </v-tabs>
      </template> -->
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppNavbar',

    data: () => ({
    }),
  }
</script>


<style lang="scss" scoped>
.special-z {
  z-index: 999;
}

.special-z-less {
  z-index: 1;
}

._headline {
  text-decoration: none !important;
  color: #01003D !important;

  svg {
    fill: #01003D !important;
    margin-right: 5px;
  }
  &:hover {
    text-decoration: none !important;
    color: #01003D !important;
  }
  &:visited {
    text-decoration: none !important;
    color: #01003D !important;
  }
}

.brand {
  position: relative;
}

.my-app-title {
  color: #01003D;
  position: absolute;
  top: 10px;
  left: 15px;
}

.version {
  color: var(--v-gray);
  position: absolute;
  font-style: italic;
  font-size: 13px;
  top: 33px;
  left: 15px;
}


.no-underline {
  text-decoration: none !important;
}
</style>