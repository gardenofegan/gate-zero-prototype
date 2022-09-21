<template>
  <div class="pa-6">
    <!-- <h1 class="text-center mb-5">Choose Your Engine Template</h1> -->
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" sm="6" md="4">
        <v-card @click="doThings()" flat rounded>
          <v-img
            :src="require(`@/assets/img/${card.src}`)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            aspect-ratio="1.7"
            cover
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },

  

  data: () => ({
    cards: [
      { title: 'Engine 1 Template', src: 'engine-1.jpg', flex: 12 },
      { title: 'Engine 2 Template', src: 'engine-2.jpg', flex: 12 },
      { title: 'Engine 3 Template', src: 'engine-3.jpg', flex: 12 },
      { title: 'Engine 4 Template', src: 'engine-4.jpg', flex: 12 },
      { title: 'Engine 5 Template', src: 'engine-5.jpg', flex: 12 },
      { title: 'Engine 6 Template', src: 'engine-6.jpg', flex: 12 },
    ],
  }),

  methods: {
    doThings() {
      this.$router.push('/inspection-start')
    },
  }
}
</script>
