<template>
  <div class="app">
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
import nav from '@/_nav'
import adminNav from '@/_AdminNav'
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
    this.setUserDetails(JSON.parse(localStorage.getItem('userDetails')))
    console.log('getUserDetails', this.getUserDetails)
    this.nav = this.getUserDetails.role === 'Admin' ? adminNav.items : nav.items
  },
  computed: {
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    },
    ...mapGetters([
      'getUserDetails'
    ])
  },
  methods: {
    ...mapActions([
      'setUserDetails'
    ])
  }
}
</script>
