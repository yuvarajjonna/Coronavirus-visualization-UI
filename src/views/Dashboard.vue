<template>
  <div>
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <!-- <card-line1-chart-example chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/> -->
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <!-- <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/> -->
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-warning">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <!-- <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/> -->
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-danger">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <!-- <card-bar-chart-example chartId="card-chart-04" class="chart-wrapper px-3" style="height:70px;" height="70"/> -->
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card header="Traffic &amp; Sales">
          <b-row>
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                  <Callout variant="info">
                    <small class="text-muted">New Clients</small><br>
                    <strong class="h4">9,123</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                      <!-- <callout-chart-example chartId="callout-chart-01" :data="[35, 23, 56, 22, 97, 23, 64]" variant="info" width="80" height="30" /> -->
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="6">
                  <Callout variant="danger">
                    <small class="text-muted">Recurring Clients</small><br>
                    <strong class="h4">22,643</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!-- <callout-chart-example chartId="callout-chart-02" :data="[65, 59, 84, 84, 51, 55, 40]" variant="danger" width="80" height="30" /> -->
                    </div>
                  </Callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Monday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-xs" variant="info" :value="34" height={} />
                  <b-progress class="progress-xs" variant="danger" :value="78" height={} />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Tuesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="56" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="94" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Wednesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="12" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="67" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Thursday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="43" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="91" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Friday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="22" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="73" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Saturday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="53" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="82" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Sunday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="9" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="69" variant="danger"></b-progress>
                </div>
              </div>
              <div class="legend text-center">
                <small>
                  <sup><b-badge pill variant="info">&nbsp;</b-badge></sup>
                  New clients
                  &nbsp;&nbsp;
                  <sup><b-badge pill variant="danger">&nbsp;</b-badge></sup>
                  Recurring clients
                </small>
              </div>
            </b-col>
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                  <Callout variant="warning">
                    <small class="text-muted">Pageviews</small><br>
                    <strong class="h4">78,623</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!-- <callout-chart-example chartId="callout-chart-03" :data="[35, 23, 56, 22, 97, 23, 64]" variant="#f8cb00" width="80" height="30"/> -->
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="6">
                  <Callout variant="success">
                    <small class="text-muted">Organic</small><br>
                    <strong class="h4">49,123</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!-- <callout-chart-example chartId="callout-chart-04" :data="[65, 59, 84, 84, 51, 55, 40]" variant="#4dbd74" width="80" height="30" /> -->
                    </div>
                  </Callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="horizontal-bars type-2">
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-user progress-group-icon"></i>
                    <span class="title">Male</span>
                    <span class="ml-auto font-weight-bold">43%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
                  </div>
                </div>
                <div class="progress-group mb-5">
                  <div class="progress-group-header">
                    <i class="icon-user-female progress-group-icon"></i>
                    <span class="title">Female</span>
                    <span class="ml-auto font-weight-bold">37%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="37" variant="warning"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-globe progress-group-icon"></i>
                    <span class="title">Organic Search</span>
                    <span class="ml-auto font-weight-bold">191,235 <span class="text-muted small">(56%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="56" variant="success"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-facebook progress-group-icon"></i>
                    <span class="title">Facebook</span>
                    <span class="ml-auto font-weight-bold">51,223 <span class="text-muted small">(15%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="15" variant="success"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-twitter progress-group-icon"></i>
                    <span class="title">Twitter</span>
                    <span class="ml-auto font-weight-bold">37,564 <span class="text-muted small">(11%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="11" variant="success"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-linkedin progress-group-icon"></i>
                    <span class="title">LinkedIn</span>
                    <span class="ml-auto font-weight-bold">27,319 <span class="text-muted small">&nbsp;(8%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="8" variant="success"></b-progress>
                  </div>
                </div>
                <div class="divider text-center">
                  <b-button variant="link" size="sm" class="text-muted"><i class="icon-options"></i></b-button>
                </div>
              </ul>
            </b-col>
          </b-row>
          <!-- carousel example -->
          <div class="wrapper">
            <div class="animated fadeIn">
              <b-row>
                <b-col md="12" lg="9" >
                    <div>
                      <b-carousel id="carousel1"
                                  style="text-shadow: 1px 1px 2px #333;"
                                  controls
                                  indicators
                                  background="#ababab"
                                  :interval="4000"
                                  img-width="1024"
                                  img-height="480"
                                  v-model="slide"
                                  @sliding-start="onSlideStart"
                                  @sliding-end="onSlideEnd"
                      >

                        <!-- Text slides with image -->
                        <b-carousel-slide caption="First slide"
                                          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                          img-src="https://lorempixel.com/1024/480/technics/2/"
                        ></b-carousel-slide>

                        <!-- Slides with custom text -->
                        <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
                          <h1>Hello world!</h1>
                        </b-carousel-slide>

                        <!-- Slides with image only -->
                        <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/8/">
                        </b-carousel-slide>

                        <!-- Slides with img slot -->
                        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                        <b-carousel-slide>
                          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                              src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
                        </b-carousel-slide>

                        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                            ut lacus vel interdum.
                          </p>
                        </b-carousel-slide>

                      </b-carousel>
                    </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Callout } from '@coreui/vue'

export default {
  name: 'Dashboard',
  components: {
    Callout
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      console.log('onSlideStart', slide)
      this.sliding = true
    },
    onSlideEnd (slide) {
      console.log('onSlideEnd', slide)
      this.sliding = false
    }
  }
}
</script>
