<template>
  <div>
    <b-row>
      <b-col md="12">
        <b-card>
            <img class="CountryImg d-md-down-none" :src=countryData.countryInfo.flag :alt=countryData.country>
            <img class="mobileCountryImg d-lg-none" :src=countryData.countryInfo.flag :alt=countryData.country mobile>
          <div>
            <div class="countryHeadding">
              <h3>{{countryData.country}}</h3>
              <h5>Total Cases:  {{countryData.cases}}</h5>
              <h5>Total active Cases:  {{countryData.active}}</h5>
              <h5>New Cases:  {{countryData.todayCases}}</h5>
              <h5>New Deaths:  {{countryData.todayDeaths}}</h5>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <CChartPie
            :datasets="defaultDatasets"
            :labels="['Deaths', 'Recovered', 'Active']"
          />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <CChartPie
            :datasets="chart2"
            :labels="['Critical', 'moderate']"
          />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import _ from 'lodash'
import { CChartPie } from '@coreui/vue-chartjs'
import { mapActions } from 'vuex'

export default {
  name: 'Users',
  components: { CChartPie },
  created () {
    this.setIsLoader(true)
    this.getCountryData(this.$route.params.countryName);
  },
  data () {
    return {
      countryData: {},
      defaultDatasets: [{
          backgroundColor: [
            '#DD1B16',
            '#41B883',
            '#00D8FF'
          ],
          data: [40, 20, 90]
        }],
      chart2: [{
          backgroundColor: [
            '#DD1B16',
            '#00D8FF'
          ],
          data: [40, 20]
        }]
    }
  },
  methods: {
    cancel () {
      this.infoModal = false
    },
    getCountryData (data) {
      console.log('data', data)
      var url = 'https://corona.lmao.ninja/countries/'+ data;
      axios.get(url)
        .then(response => {
          console.log('response country data', response)
          this.countryData = response.data
          this.defaultDatasets[0].data[0] = response.data.deaths
          this.defaultDatasets[0].data[1] = response.data.recovered
          this.defaultDatasets[0].data[2] = response.data.active
          this.chart2[0].data[0] = response.data.critical
          this.chart2[0].data[1] = response.data.active - response.data.critical
          this.setIsLoader(false)
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    ...mapActions([
      'setUserDetails',
      'setIsLoader'
    ])
  }
}
</script>
<style scoped>
.countryHeadding {
  text-align: center;
}
.CountryImg {
  max-width: 68vw;
  float: left;
}
.mobileCountryImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
</style>
