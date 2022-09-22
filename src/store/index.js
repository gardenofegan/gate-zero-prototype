import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCameraOpen: false,
    isPhotoTaken: false,
    isShotPhoto: false,
    isCameraLoading: false,
    takePhotoNow: false,
    isOverlay: false,
  },
  mutations: {
    mutateCameraOpen (state, n) {
      state.isCameraOpen = n || false;
    },
    mutatePhotoTaken (state, n) {
      state.isPhotoTaken = n || false;
    },
    mutateShotPhoto (state, n) {
      state.isShotPhoto = n || false;
    },
    mutateCameraLoading (state, n) {
      state.isCameraLoading = n || false;
    },
    mutateTakePhotoNow (state, n) {
      state.takePhotoNow = n || false;
    },
    mutateOverlay (state, n) {
      state.isOverlay = n || false;
    },
  },
  actions: {
  },
  modules: {
  }
})
