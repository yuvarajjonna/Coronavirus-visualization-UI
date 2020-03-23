<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">405</h1>
            <h4 class="pt-3">Oops! Method Not Allowed.</h4>
            <!-- <p class="text-muted">The method is not allowed for the requested URL.<br/>GO back to the <router-link :to="'/'">Login page</router-link></p> -->
            <p class="text-muted">The method is not allowed for the requested URL.</p>
          </div>
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text>
                <i class="fa fa-search"></i>
              </b-input-group-text>
            </b-input-group-prepend>
            <input id="prependedInput" class="form-control" size="16" type="text" v-model="searchData" placeholder="What are you looking for?">
            <b-input-group-append>
              <b-button variant="info" @click="search">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page405',
  data () {
    return {
      searchData: ''
    }
  },
  methods: {
    search () {
      let url = 'http://www.google.com/search?q=' + this.searchData
      window.open(url, '_blank')
    }
  }
}
</script>
