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
        {{ currentStep }} of 10
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
        <h2 class="mt-3">Step {{ currentStep }}</h2>
        <h3 class="mb-3 font-weight-light">
          <span v-if="!isPhotoTaken">Not Captured</span>
          <span v-else color="success"><v-icon small class="mr-1">mdi-check</v-icon> Complete</span>
        </h3>


        <v-divider></v-divider>
        <div class="mx-3">
          <div class="bottom-position">
            <div class="mt-6">
              <v-btn v-show="!isCameraOpen" x-large color="success" disabled block @click="takeThePhoto()">
                <v-icon color="white" class="mr-1" x-large>mdi-camera</v-icon>Capture
              </v-btn>
              <v-btn v-show="isCameraOpen" x-large color="success" block @click="takeThePhoto()">
                <v-icon color="white" class="mr-1" x-large>mdi-camera</v-icon>Capture
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined :disabled="(currentStep === 1) || !isCameraOpen" block>
                <v-icon class="mr-1">mdi-chevron-left</v-icon> 
                <span v-if="currentStep === 1">Previous Step</span>
                <span v-else>Back to Step {{ currentStep - 1 }}</span>
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block :disabled="!isCameraOpen" @click="mutateOverlay(!isOverlay)">
                <span v-show="!isOverlay"><v-icon class="mr-1">mdi-eye</v-icon> Show Overlay</span>
                <span v-show="isOverlay"><v-icon class="mr-1">mdi-eye-off</v-icon> Hide Overlay</span>
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block :disabled="!isCameraOpen">
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


      <div class="mid-container">
        <v-alert v-if="isPhotoTaken" type="success" class="alert-banner" color="success lighten-2">
          Photo captured successfully
        </v-alert>

        <div v-show="currentStep < 11">
          <camera></camera>
          <v-img class="on-top" v-show="isOverlay" height="100%" width="100%" contain :src="require('@/assets/img/overlay.png')" />
        </div>
        <div v-show="currentStep >= 11">
          <h2>Report Complete</h2>
          <p>
            <br/><br/>
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
            <br/><br/>

          </p>
          <v-btn v-show="!isCameraOpen" type="button" x-large class="button is-rounded primary">
            <v-icon color="white" large class="mr-1">mdi-export-variant</v-icon> Export Report
          </v-btn>
        </div>
      </div>

      <v-navigation-drawer
        fixed
        permanent
        right
        class="app-margin-more"
      >
        <div class="mx-3 mt-6">
          <div :style="currentStepMargin" v-show="currentStep < 6">
            <v-img max-width="50" :src="require('@/assets/img/position.png')" />
          </div>

          <div class="ml-6" v-show="currentStep < 11">
            <v-img max-width="150" :src="require('@/assets/img/engine.png')" />
          </div>

          <div :style="currentStepMargin" v-show="currentStep > 5 && currentStep < 11">
            <v-img max-width="50" :src="require('@/assets/img/position.png')" />
          </div>

          <div class="mt-3" v-show="currentStep < 11">
            <h4 class="text-center">{{ currentStepTitle }}</h4>
          </div>

          <div class="bottom-position">
            <div class="mt-6">
              <v-btn v-show="!isCameraOpen" x-large color="success" disabled block @click="takeThePhoto()">
                <v-icon color="white" class="mr-1" x-large>mdi-camera</v-icon>Capture
              </v-btn>
              <v-btn v-show="isCameraOpen" x-large color="success" block @click="takeThePhoto()">
                <v-icon color="white" class="mr-1" x-large>mdi-camera</v-icon>Capture
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block :disabled="!isCameraOpen || !isPhotoTaken" @click="nextStep()">
                Go To Step {{ currentStep + 1 }} <v-icon class="ml-1">mdi-chevron-right</v-icon>
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block :disabled="!isCameraOpen" @click="mutateOverlay(!isOverlay)">
                <span v-show="!isOverlay"><v-icon class="mr-1">mdi-eye</v-icon> Show Overlay</span>
                <span v-show="isOverlay"><v-icon class="mr-1">mdi-eye-off</v-icon> Hide Overlay</span>
              </v-btn>
            </div>

            <div class="mt-6">
              <v-btn large outlined block :disabled="!isCameraOpen">
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
import { mapState, mapMutations} from 'vuex'
import { eventBus } from '@/main'

// @ is an alias to /src
import Camera from '@/components/Camera.vue'

export default {
  name: 'InspectionStart',
  components: {
    Camera
  },


  doThings() {
    this.$router.push('/inspection-start')
  },

  data: () => ({
    currentStep: 1,
  }),

  computed: {
    currentStepMargin() {
      switch (this.currentStep) {
        case 1:
          return 'margin-left: 100px;';
        case 2:
          return 'margin-left: 80px; transform: rotate(315deg);';
        case 3:
          return 'margin-left: 60px;';
        case 4:
          return 'margin-left: 80px;';
        case 5:
          return 'margin-left: 100px; transform: rotate(315deg);';
        case 6:
          return 'margin-left: 100px; transform: rotate(90deg); margin-top: 40px;';
        case 7:
          return 'margin-left: 80px; transform: rotate(90deg); margin-top: 40px;';
        case 8:
          return 'margin-left: 60px; transform: rotate(90deg); margin-top: 40px;';
        case 9:
          return 'margin-left: 80px; transform: rotate(90deg); margin-top: 40px;';
        case 10:
          return 'margin-left: 100px; transform: rotate(90deg); margin-top: 40px;';
        default:
          return '';
      }
    },

    currentStepTitle() {
      switch (this.currentStep) {
        case 1:
          return 'Right Hand | High Forward';
        case 2:
          return 'Right Hand | Mid Forward';
        case 3:
          return 'Right Hand | Low Forward';
        case 4:
          return 'Right Hand | High Reverse';
        case 5:
          return 'Right Hand | Low Reverse';
        case 6:
          return 'Left Hand | High Forward';
        case 7:
          return 'Left Hand | Mid Forward';
        case 8:
          return 'Left Hand | High Forward';
        case 9:
          return 'Left Hand | High Reverse';
        case 10:
          return 'Left Hand | Low Reverse'; 
        default:
          return '';
      }
    },
    
    ... mapState({
      // arrow functions can make the code very succinct!
      isCameraOpen: state => state.isCameraOpen,
      isPhotoTaken: state => state.isPhotoTaken,
      isShotPhoto: state => state.isShotPhoto,
      isCameraLoading: state => state.isCameraLoading,
      isOverlay: state => state.isOverlay,
    }),
    
  },

  methods: {
    takeThePhoto() {
       eventBus.$emit('takePhotoNow');
    },

    nextStep() {
      this.currentStep += 1;
      this.mutateOverlay(false);
      this.mutatePhotoTaken(false);
    },

    

   ...mapMutations([

      // `mapMutations` also supports payloads:
      'mutateCameraOpen',
      'mutatePhotoTaken',
      'mutateShotPhoto',
      'mutateCameraLoading',
      'mutateOverlay',
       // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
 },
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

   .alert-banner {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .on-top {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>