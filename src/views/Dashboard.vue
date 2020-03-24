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
      <b-col class="customCard" md="12">
        <b-card header="Confirmed Cases and Deaths by Country (Click on country to see in detail)">
          <b-row>
            <b-col sm="12" lg="12" class="tableCard">
              <b-table hover sticky-header
                :items="items"
                :fields="fields"
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
/* eslint-disable */
import axios from 'axios'
import { Callout } from '@coreui/vue'
import { mapActions } from 'vuex'

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
      fields: [
          {
            key: 'country',
            label: 'Country',
            sortable: true
          },
          {
            key: 'cases',
            label: 'Cases',
            sortable: true
          },
          {
            key: 'todayCases',
            label: 'Today Cases',
            sortable: true,
          },
          {
            key: 'deaths',
            label: 'Deaths',
            sortable: true
          },
          {
            key: 'todayDeaths',
            label: 'Today Deaths',
            sortable: true,
          },
          {
            key: 'recovered',
            label: 'Recovered',
            sortable: true
          },
          {
            key: 'active',
            label: 'Active',
            sortable: true
          },
          {
            key: 'critical',
            label: 'Critical',
            sortable: true,
          },
          {
            key: 'casesPerOneMillion',
            label: 'Cases Per One Million',
            sortable: true
          },
          {
            key: 'deathsPerOneMillion',
            label: 'Deaths Per One Million',
            sortable: true,
          }
        ],
      totalcount: {},
      critical: 0,
      mild: 0
    }
  },
  created () {
    this.setIsLoader(true)
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
          this.setIsLoader(false)
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
            response.data[i]["_cellVariants"] = {}
            if (response.data[i].todayCases > 0) {
              response.data[i]["_cellVariants"]["todayCases"] = "danger";
            }
            if (response.data[i].todayDeaths > 0) {
              response.data[i]["_cellVariants"]["todayDeaths"] = "danger";
            }
          }
          this.items = response.data
          console.log('this.items', this.items)
          this.setIsLoader(false)
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
    ...mapActions([
      'setUserDetails',
      'setIsLoader'
    ])
  }
}
</script>
<style>
tr {
  cursor: pointer;
}
.tableCard {
  height: 100vh;
  overflow: auto;
}
.customCard .card-body {
  padding-top: 0 !important;
}
th {
  background-color: white;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
}
.card-header {
  font-weight: 700;
  font-size: larger;
}
</style>
