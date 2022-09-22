<template>
  <div class="web-camera-container" ref="maincontainer">
    <div class="camera-button">
      <v-btn v-show="!isCameraOpen" type="button" x-large class="button is-rounded primary" @click="toggleCamera">
        <v-icon color="white" x-large class="mr-1">mdi-camera</v-icon> Start Camera
      </v-btn>
      <v-btn v-show="isCameraOpen" x-large color="red white--text" class="close-camera" @click="toggleCamera">
        Close Camera
      </v-btn>
    </div>
    
    <div v-show="isCameraOpen && isCameraLoading" class="camera-loading">
      <ul class="loader-circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    
    <div v-if="isCameraOpen" v-show="!isCameraLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
      
      <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
        
      <video v-show="!isPhotoTaken" ref="camera" :width="1280" :height="720" autoplay></video>
      
      <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="1000" :height="562"></canvas>
    </div>
    
    <!-- <div v-if="isCameraOpen && !isCameraLoading" class="camera-shoot">
      <v-btn x-large color="primary" @click="takePhoto">
        <v-icon x-large>mdi-camera</v-icon> Take Photo
      </v-btn>
    </div> -->
    
  </div>
</template>

<script>
  import { mapState, mapMutations} from 'vuex'
  import { eventBus } from '@/main'

  export default {
    name: 'Camera',
    
    computed: {
    
    ... mapState({
      // arrow functions can make the code very succinct!
      count: state => state.count,
      isCameraOpen: state => state.isCameraOpen,
      isPhotoTaken: state => state.isPhotoTaken,
      isShotPhoto: state => state.isShotPhoto,
      isCameraLoading: state => state.isCameraLoading,
    }),
    
  },

  created (){
    eventBus.$on('takePhotoNow', () => {
      this.takePhoto();
    })
  },

    data: () => ({
      link: '#',
    }),

      methods: {
        ...mapMutations([

          // `mapMutations` also supports payloads:
          'mutateCameraOpen',
          'mutatePhotoTaken',
          'mutateShotPhoto',
          'mutateCameraLoading',
          // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
        ]),

        getHeight() {
          this.$refs.maincontainer.clientHeight - 130;
        },
        getWidth() {
          this.$refs.maincontainer.clientWidth - 512;
        },
        
        toggleCamera() {
          if(this.isCameraOpen) {
            this.mutateCameraOpen(false);
            this.mutatePhotoTaken(false);
            this.mutateShotPhoto(false);
            this.stopCameraStream();
          } else {
            this.mutateCameraOpen(true);
            this.createCameraElement();
          }
        },
        
        createCameraElement() {
          this.mutateCameraLoading(true);
          
          const constraints = (window.constraints = {
            audio: false,
            video: true
          });


          navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => {
              this.mutateCameraLoading(false);
              this.$nextTick(() => {
                this.$refs.camera.srcObject = stream;
              });
            })
            .catch(() => {
              this.mutateCameraLoading(false);
              alert("Browser didn't support or there is some errors.");
            });
        },
        
        stopCameraStream() {
          let tracks = this.$refs.camera.srcObject.getTracks();

          tracks.forEach(track => {
            track.stop();
          });
        },
        
        takePhoto() {
          if(!this.isPhotoTaken) {
            this.mutateShotPhoto(true);

            const FLASH_TIMEOUT = 50;

            setTimeout(() => {
              this.mutateShotPhoto(false);
            }, FLASH_TIMEOUT);
          }
          
          this.mutatePhotoTaken(!this.isPhotoTaken);

          
          const context = this.$refs.canvas.getContext('2d');
          context.drawImage(this.$refs.camera, 0, 0, 1280, 720);
        },
        
        downloadImage() {
          const download = document.getElementById("downloadPhoto");
          const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
          download.setAttribute("href", canvas);
        }
  }
    
  }
</script>


<style lang="scss" scoped>
.web-camera-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 130px);
  width: calc(100vw - 512px);
  position: relative;


  .close-camera {
    position: absolute;
    z-index: 105;
    bottom: 20px;
    left: 20px;
  }
  
  .camera-button {
    // margin-bottom: 2rem;
  }
  
  .camera-box {    
    .camera-shutter {
      opacity: 0;
      height: calc(100vh - 130px);
      width: calc(100vw - 512px);
      background-color: #fff;
      position: absolute;
      
      &.flash {
        opacity: 1;
      }
    }
  }

  .download-photo {
    position: absolute;
    bottom: 20px;
    left: 50%;
  }
  
  .camera-shoot {
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 105;
  }
  
  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;
    
    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }
    
    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;
      
      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;
        
        &:nth-child(2) {
          animation-delay: .2s;
        }
        
        &:nth-child(3) {
          animation-delay: .4s;
        }
      }
    }
  }

  @keyframes preload {
    0% {
      opacity: 1
    }
    50% {
      opacity: .4
    }
    100% {
      opacity: 1
    }
  }
}
</style>