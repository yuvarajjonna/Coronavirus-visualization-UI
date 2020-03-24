<template>
  <div>
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <h4 class="mb-0">{{totalcount.cases}}</h4>
            <p>Coronavirus Cases</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-danger">
          <b-card-body class="pb-0">
            <h4 class="mb-0">{{totalcount.deaths}}</h4>
            <p>Deaths</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-success">
          <b-card-body class="pb-0">
            <h4 class="mb-0">{{totalcount.recovered}}</h4>
            <p>Recovered</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <h4 class="mb-0">{{totalcount.cases - totalcount.deaths - totalcount.recovered}} (critical-{{critical}})</h4>
            <p>ACTIVE CASES</p>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card header="Confirmed Cases and Deaths by Country, Territory, or Conveyance">
          <b-row>
            <b-col sm="12" lg="12" style="overflow-y: scroll;">
              <b-table hover
                :items="items"
                @row-clicked="myRowClickHandler"
              ></b-table>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
import { Callout } from '@coreui/vue'

export default {
  name: 'Dashboard',
  components: {
    Callout
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      items: [],
      totalcount: {},
      critical: 0,
      mild: 0
    }
  },
  created () {
    this.getCompleteData()
    this.getCompleteCount()
    console.log('hahahahah');
  },
  methods: {
    myRowClickHandler (record, index) {
      console.log('record', record)
      this.$router.push({ name: 'country', params: { countryName: record.country } })
    },
    getCompleteCount () {
      axios.get('https://corona.lmao.ninja/all' )
        .then(response => {
          console.log('post', response.data)
          this.totalcount = response.data
        })
        .catch(error => {
          console.log(error)
          this.errorMessage = error.response.data
          if (error.response.status === 405) {
            this.errorMessage = 'Method Not Allowed'
          } else if (error.response.status === 500) {
            this.errorMessage = 'Internal Server Error'
          }
          this.isError = true
        })
    },
    getCompleteData () {
      console.log('finaldata')
      axios.get('https://corona.lmao.ninja/countries' )
        .then(response => {
          console.log('post', response)
          for(var i=0; i<response.data.length; i++) {
            delete response.data[i].countryInfo
            this.critical += response.data[i].critical
          }
          this.items = response.data
        })
        .catch(error => {
          console.log(error)
          this.errorMessage = error.response.data
          if (error.response.status === 405) {
            this.errorMessage = 'Method Not Allowed'
          } else if (error.response.status === 500) {
            this.errorMessage = 'Internal Server Error'
          }
          this.isError = true
        })
    }
  }
}
</script>
