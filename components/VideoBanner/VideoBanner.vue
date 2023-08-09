<template>
  <div class="hero-content">
    <hidden point="smUp">
      <figure class="mobile-cover">
        <img
          :src="cover"
          alt="cover"
        >
      </figure>
    </hidden>
    <v-container :class="{ 'fixed-width': mdUp }">
      <v-row>
        
        <v-col
          v-if="isTablet"
          md="6"
          cols="12"     
          class="pa-6 visual-content"
        >
          <div class="deco-banner">
            <div class="menu-bg"></div>
            <div class="video-bg"></div>
          </div>
          <img class="juntadir" :src="juntasdir" alt="">
          <div class="video-wrap">
            <div class="video-figure">
              <div class="inner-figure">
                <!-- <img class="juntadir" :src="juntasdir" alt=""> -->
                <!-- <hidden point="mdDown">
                  <v-btn
                    v-if="play"
                    fab
                    text
                    class="btn-play"
                    @click="togglePause()"
                  >
                    <v-icon v-if="playCtrl">mdi-pause</v-icon>
                    <v-icon v-else>mdi-play</v-icon>
                  </v-btn>
                </hidden> -->
                <!-- <img
                  v-if="!play || isMobile"
                  :src="cover"
                  alt="cover" 
                >-->
                <!-- <div
                  v-if="yt.use"
                  class="video"
                >
                  <youtube
                    v-if="isDesktop"
                    :video-id="videoId"
                    :player-vars="playerVars"
                    :width= "1080"
                    :height="720"
                    ref="youtube"
                    @playing="playing"
                    @ended="ended"
                  />
                </div> -->
              </div>
            </div>
          </div>
          <div class="parallax-banner">
            <dots-parallax />
          </div>
        </v-col>
      </v-row>
      
    </v-container>
    <v-col cols="12" md="6">
          <div class="banner-text">
            <div class="title">
              <h3  class="text-helper use-text-title titleMovil">
                <!-- {{ $t('medicalLanding.banner_title') }} -->
                Tu guía en <br>cada trámite, <a style="color:#2091F9">Mejorando</a> Tu <br>Vida
              </h3>
            </div>
            <h5 class="subtitle use-text-subtitle2">
              <!-- {{ $t('medicalLanding.banner_subtitle') }} -->
              Comprometidos con Tu Progreso

            </h5>
            
            <!-- <v-card class="search-banner">
              <v-text-field
                :label="isMobile2 ? 'Search...' : 'Search doctor, medicines or clinic...'"
                class="search"
                hide-details
                filled
              />
              <div class="action">
                <v-btn class="button" color="secondary">
                  <v-icon v-if="isMobile" class="icon">mdi-magnify</v-icon>
                  <span v-if="isDesktop">
                    {{ $t('medicalLanding.banner_search') }}
                  </span>
                </v-btn>
              </div>
            </v-card> -->
            <div class="consultas">
              <v-btn class="btnconsultas" @click="realizarLlamada" style="background-color: #252B42; color: rgb(255, 255, 255);" size="small">Consultas Gratis</v-btn>
            </div>
          </div>
        </v-col>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import DotsParallax from '../Parallax/Dots'
import juntasdir from '../../static/images/urpe/juntasdir.jpg'

import youtube from '~/youtube'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
    DotsParallax
  },
  data() {
    // videoId: 'sbef4EWb4js',
    return {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'http://localhost:8009'
      },
      yt: youtube,
      play: false,
      playCtrl: true,
      cover: imgAPI.urpe[0],
      juntasdir,
      nroTlf: '+1 800-643-6740'
    }
  },
  methods: {
    playing() {
      this.play = true
      this.playCtrl = true
    },
    ended() {
      this.player.playVideo()
    },
    togglePause() {
      this.playCtrl = !this.playCtrl
      if (this.playCtrl) {
        this.player.playVideo()
      } else {
        this.player.pauseVideo()
      }
    },
    realizarLlamada() {
      window.location.href = 'tel:' + this.nroTlf;
  },
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isMobile2() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
