<template>
<v-app>
  <v-container fluid pa-0>
    <app-navbar></app-navbar>
    <div class="app-margin">
      <router-view/>
    </div>
  </v-container>
</v-app>
</template>

<script>
  import AppNavbar from '@/components/AppNavbar.vue'
  export default {
    name: 'App',
    components: {
      AppNavbar
    },

    data: () => ({
      drawerIsVisible: false,
    }),

    created (){
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-margin {
  margin-top: 66px;
}

</style>
