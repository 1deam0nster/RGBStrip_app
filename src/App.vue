<template>
  <v-app top-toolbar>
    <header>
      <v-toolbar>
        <v-toolbar-logo>Vuetify</v-toolbar-logo>
        <v-toolbar-items>
          <v-toolbar-item>

          </v-toolbar-item>
        </v-toolbar-items>
      </v-toolbar>
    </header>
    <main>
      <v-content>
        <v-container fluid>
          <v-card class="e4">
            <v-card-row height="300px" v-bind:style="{ background: `rgb(${getcolor.r}, ${getcolor.g}, ${getcolor.b})` }" />
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-col xs9>
                    <v-slider label="R" light v-bind:max="255" v-model="getcolor.r" />
                  </v-col>
                  <v-col xs3>
                    <v-text-field light v-model="getcolor.r" type="number" />
                  </v-col>
                  <v-col xs9>
                    <v-slider label="G" light v-bind:max="255" v-model="getcolor.g" />
                  </v-col>
                  <v-col xs3>
                    <v-text-field light v-model="getcolor.g" type="number" />
                  </v-col>
                  <v-col xs9>
                    <v-slider label="B" light v-bind:max="255" v-model="getcolor.b" v-on:click="postRGB"/>
                  </v-col>
                  <v-col xs3>
                    <v-text-field light v-model="getcolor.b" type="number" v-on:submit.prevent="postRGB"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        endpoint: 'https://api.spark.io/v1/devices/3b0041000747343232363230/rgb?access_token=ba2b57075f7261d9751ef46c50fe3440d5ef1c8d',
        r: '',
        g: '',
        b: '',
        getcolor: []
      }
    },
    methods: {
      getRGB: function() {
        this.$http.get(this.endpoint).then(function(response) {
          this.getcolor = JSON.parse(response.data.result);
          console.log(response.data)
        },  function(error) {
          console.log("error!")
        })
      },
      postRGB: function (event) {
        console.log("push!");
        alert('Hello');
      }
    },
    created: function() {
      this.getRGB()
    },
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
</style>
