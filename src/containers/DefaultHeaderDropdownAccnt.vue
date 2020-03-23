<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <span id="dp" style="">{{this.getUserDetails.firstName.slice(0, 1).toUpperCase()}}</span>
    </template>
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-bell-o" /> Updates
        <b-badge variant="info">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-envelope-o" /> Messages
        <b-badge variant="success">{{ itemsCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-header tag="div" class="text-center"><strong>Settings</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-file" /> Projects
        <b-badge variant="primary">{{ projectCount }}</b-badge>
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item><i class="fa fa-shield" /> Lock Account</b-dropdown-item>
      <b-dropdown-item @click="logout"><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import { mapGetters } from 'vuex'

export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      itemsCount: 42,
      projectCount: 1
    }
  },
  computed: {
    ...mapGetters([
      'getUserDetails'
    ])
  },
  methods: {
    logout () {
      localStorage.removeItem('userDetails')
      sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style>
  .nav-link.dropdown-toggle{
    background-color: rosybrown !important;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  #dp{
    color: white;
    font-size: x-large;
  }
</style>
