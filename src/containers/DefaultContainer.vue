<template>
  <div class="app">
    <div :class="{ isload: !getIsLoader }">
      <div class="loading d-flex justify-content-center">
        <div class="customHeight atom-spinner">
          <div class="spinner-inner">
            <div class="spinner-line"></div>
            <div class="spinner-line"></div>
            <div class="spinner-line"></div>
            <!--Chrome renders little circles malformed :(-->
            <div class="spinner-circle">
              &#9679;
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppHeader fixed>
      <b-link class="navbar-brand" to="#">
        <!-- <img class="navbar-brand-full" src="../assets/img/main.png" width="130" height="40" alt="UV-Research"> -->
        <img class="navbar-brand-full" src="../assets/img/logo.png" width="30" height="30" alt="UV-Research">
      </b-link>
      <h3 class="d-md-down-none" style="position: absolute;left: 27vw;">uv-research labs COVID-19 visualization</h3>
    </AppHeader>
    <div class="app-body">
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="#" style="font-size: 0.83rem;">UV1</a>
        <span class="ml-1 d-none d-lg-block" style="float: right;">&copy; 2019 creativeLabs.</span>
        <span class="ml-1 d-lg-none" style="font-size: 0.63rem;" mobile>&copy; 2019 creativeLabs.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1 d-none d-lg-block" style="float: left;">Powered by</span>
        <span class="mr-1 d-lg-none" style="font-size: 0.63rem;" mobile>Powered by</span>
        <a href="#" style="font-size: 0.83rem;">UV-Research Labs</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
/* eslint-disable */
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    TheFooter,
    Breadcrumb,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: []
    }
  },
  created () {

  },
  computed: {
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    },
    ...mapGetters([
      'getUserDetails',
      'getIsLoader'
    ])
  },
  methods: {
    ...mapActions([
      'setUserDetails',
      'setIsLoader'
    ])
  }
}
</script>
<style scoped>
.loading {
  z-index: 10000;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
  opacity: 0.9;
  position: fixed;
}
.customHeight {
  position: relative;
  top: 50vh;
}
.isload {
  display: none;
}
.atom-spinner, .atom-spinner * {
      box-sizing: border-box;
    }

    .atom-spinner {
      height: 60px;
      width: 60px;
      overflow: hidden;
    }

    .atom-spinner .spinner-inner {
      position: relative;
      display: block;
      height: 100%;
      width: 100%;
    }

    .atom-spinner .spinner-circle {
      display: block;
      position: absolute;
      color: #ff1d5e;
      font-size: calc(60px * 0.24);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .atom-spinner .spinner-line {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation-duration: 1s;
      border-left-width: calc(60px / 25);
      border-top-width: calc(60px / 25);
      border-left-color: #ff1d5e;
      border-left-style: solid;
      border-top-style: solid;
      border-top-color: transparent;
    }

    .atom-spinner .spinner-line:nth-child(1) {
      animation: atom-spinner-animation-1 1s linear infinite;
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
    }

    .atom-spinner .spinner-line:nth-child(2) {
      animation: atom-spinner-animation-2 1s linear infinite;
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
    }

    .atom-spinner .spinner-line:nth-child(3) {
      animation: atom-spinner-animation-3 1s linear infinite;
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
    }

    @keyframes atom-spinner-animation-1 {
      100% {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }

    @keyframes atom-spinner-animation-2 {
      100% {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }

    @keyframes atom-spinner-animation-3 {
      100% {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
</style>
