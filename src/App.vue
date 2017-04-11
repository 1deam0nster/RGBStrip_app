<template>
  <v-app top-toolbar>
    <header>
      <v-toolbar>
        <v-toolbar-logo>RGB Strip</v-toolbar-logo>
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
                    <v-slider label="R" light v-bind:max="255" v-model="getcolor.r" v-on:input="postRGB"/>
                  </v-col>
                  <v-col xs3>
                    <v-text-field light v-model="getcolor.r" type="number" v-on:input="postRGB"/>
                  </v-col>
                  <v-col xs9>
                    <v-slider label="G" light v-bind:max="255" v-model="getcolor.g" v-on:input="postRGB"/>
                  </v-col>
                  <v-col xs3>
                    <v-text-field light v-model="getcolor.g" type="number" v-on:input="postRGB"/>
                  </v-col>
                  <v-col xs9>
                    <v-slider label="B" light v-bind:max="255" v-model="getcolor.b" v-on:input="postRGB"/>
                  </v-col>
                  <v-col xs3>
                    <v-text-field light v-model="getcolor.b" type="number" v-on:input="postRGB"/>
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
        getcolor: []
      }
    },
    methods: {
      getRGB: function() {
        var url = 'https://api.spark.io/v1/devices/3b0041000747343232363230/rgb?access_token=ba2b57075f7261d9751ef46c50fe3440d5ef1c8d';
        this.$http.get(url).then(function(response) {
          this.getcolor = JSON.parse(response.data.result);
          console.log(response.data)
        },  function(error) {
          console.log("Error get!")
        })
      },
      postRGB: function () {
        var command = this.getcolor.r + ',' + this.getcolor.g + ',' + this.getcolor.b;
        var url = 'https://api.spark.io/v1/devices/3b0041000747343232363230/setRgb?access_token=ba2b57075f7261d9751ef46c50fe3440d5ef1c8d';

        this.$http.post(url, { args: command }).then(function(response) {
            console.log("Sucess post")
        },  function(error) {
            console.log("Error post!")
        })
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
