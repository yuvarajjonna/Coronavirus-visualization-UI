<template>
  <router-view></router-view>
</template>

<script>
import Store from './vuex'
export default {
  store: Store,
  name: 'app'
}
</script>

<style lang="scss">
  @import '../node_modules/@coreui/icons/css/coreui-icons.min.css';
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import '../node_modules/font-awesome/scss/font-awesome.scss';
  $simple-line-font-path: '../node_modules/simple-line-icons/fonts/';
  @import '../node_modules/simple-line-icons/scss/simple-line-icons.scss';
  @import '../node_modules/flag-icon-css/css/flag-icon.min.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
  @import 'assets/scss/style';
</style>
