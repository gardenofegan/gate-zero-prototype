<template>
  <div>
    <v-toolbar flat style="border-bottom: 1px solid black;">
      <span>
        <strong>Template: </strong>
        Engine 1
      </span>

      <v-chip small class="ml-3">
        <v-icon small class="mr-1">mdi-turbine</v-icon> ESN 123456
      </v-chip>

      <v-chip small class="ml-1">
        <strong>Order No:</strong> 999111222
      </v-chip>

      <v-spacer></v-spacer>

    

      <span>
        <strong>Step: </strong>
        1 of 25
      </span>

      <v-spacer></v-spacer>

      <v-chip small>
        <v-icon small class="mr-1">mdi-clock</v-icon>
        23-Aug-2022 15:34:01
      </v-chip>
      
      
    </v-toolbar>
    
    <div>
      <v-navigation-drawer
        fixed
        permanent
        class="app-margin-more"
      >
        <template v-slot:prepend>
            <v-list-item two-line>

            <v-list-item-content>
              <v-list-item-title>Step 1</v-list-item-title>
              <v-list-item-subtitle>Not Captured</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>
        <div class="mx-3">
          <div class="bottom-position">
            <div class="mt-6">
              <v-btn x-large color="success" block>
                <v-icon color="white" class="mr-1" x-large>mdi-camera</v-icon>Capture
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined disabled block>
                <v-icon class="mr-1">mdi-chevron-left</v-icon> Previous Step
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block @click="showOverlay = !showOverlay">
                <span v-show="!showOverlay"><v-icon class="mr-1">mdi-eye</v-icon> Show Overlay</span>
                <span v-show="showOverlay"><v-icon class="mr-1">mdi-eye-off</v-icon> Hide Overlay</span>
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block>
                <v-icon class="mr-1">mdi-eye</v-icon> Show Part Names
              </v-btn>
            </div>

            <!-- <div class="mt-6">
              <v-btn large outlined block>
                <v-icon class="mr-1">mdi-eye</v-icon> Add Notes
              </v-btn>
            </div> -->
          </div>
        </div>
      </v-navigation-drawer>

      

      <!-- <camera></camera> -->

      <div class="mid-container">
        <v-img class="on-top" v-show="showOverlay" height="100%" width="100%" contain :src="require('@/assets/img/overlay.png')" />
      </div>

      <v-navigation-drawer
        fixed
        permanent
        right
        class="app-margin-more"
      >
        <div class="mx-3 mt-6">
          <div style="margin-left: 100px;">
            <v-img max-width="50" :src="require('@/assets/img/position.png')" />
          </div>

          <div class="ml-6">
            <v-img max-width="150" :src="require('@/assets/img/engine.png')" />
          </div>

          <div class="mt-3">
            <h4 class="text-center">Right Hand | High Forward</h4>
          </div>

          <div class="bottom-position">
            <div class="mt-6">
              <v-btn x-large color="success" block>
                <v-icon color="white" class="mr-1" x-large>mdi-camera</v-icon>Capture
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block>
                Next Step <v-icon class="ml-1">mdi-chevron-right</v-icon>
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block @click="showOverlay = !showOverlay">
                <span v-show="!showOverlay"><v-icon class="mr-1">mdi-eye</v-icon> Show Overlay</span>
                <span v-show="showOverlay"><v-icon class="mr-1">mdi-eye-off</v-icon> Hide Overlay</span>
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block>
                <v-icon class="mr-1">mdi-eye</v-icon> Show Part Names
              </v-btn>
            </div>
          </div>
        </div>


      </v-navigation-drawer>

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import Camera from '@/components/Camera.vue'

export default {
  name: 'InspectionStart',
  components: {
    // Camera
  },

  doThings() {
    this.$router.push('/inspection-start')
  },

  data: () => ({
    showOverlay: false,
  }),
}
</script>
<style>
  .app-margin-more {
    margin-top: 130px;
  }

  .relative {
    position: relative;
  }

  .bottom-position {
    position: absolute;
    bottom: 200px;
  }

   .extended-img {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
   }

   .image-full {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

  .mid-container {
    height: calc(100vh - 130px);
    width: calc(100vw - 512px);
    margin-left: 256px;
  }

  .on-top {
    z-index: 100;
  }
</style>