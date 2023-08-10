<template>
  <fragment>
    <div class="root">
      <v-container>
        <v-row class="spacing8 containermovil">
          <v-col cols="12" lg="1" v-if="isDesktop" />
          <v-col cols="12" md="5">
            <div :class="{ 'text-center': !isDesktop }">
              <div class="title-deco textmovil">
                <div v-if="isDesktop" class="decoration"></div>
                <!-- <title-deco :text="$t('medicalLanding.expertise_title')" /> -->
                <h1 class="experttitle">Expertos</h1>
                <h4 class="title-default use-text-subtitle expertsubtitleweb">
                  Esperando tu llamado
                </h4>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6" md="7" class="mobilecard">
            <h4 class="title-default use-text-subtitle expertsubtitle">
              Esperando tu llamado
            </h4>

            <div class="tag-group">
              <img v-for="(item, index) in expertosArray" :key="index" :src="item" alt="Experto Image" class="tag-item"
                @click="realizarLlamada" />
            </div>
          </v-col>
          <!-- <v-col
            cols="12"     
            lg="6"
            md="7"
            class="webcarrousel"
          >
            <div class="tag-groupweb">
            <slick :options="slickOptions">
              <div
                v-for="(item, index) in expertosArray"
                :key="index"
                class="tag-itemweb"
              >
              
                <img
                  :src="item"
                  alt="Experto Image"
                />
              </div>
              
            </slick>
          </div>
          </v-col> -->
        </v-row>
        <!-- Primera fila -->
        <div class="expertweb">
          <v-row>
            <v-col cols="4" class="mx-auto text-center">
            <div >
              <div class="title-deco">
                
                <!-- <title-deco :text="$t('medicalLanding.expertise_title')" /> -->
                <h1 class="experttitle">Expertos</h1>
                <h4 class="expertsubtitleweb">
                  Esperando tu <br>llamado
                </h4>
              </div>
            </div>
          </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" class="mx-auto text-center">
              <img style="margin-bottom: -300px;" :src="Group1Image" alt="">
            </v-col>
          </v-row>
      
          <!-- Segunda fila -->
          <v-row class="second-row">
            <v-col cols="4" class="text-left">
              <img class="imgleft" :src="Group2Image" alt="">
            </v-col>
            <v-col style="display: none; background-color: rgb(223, 77, 20);" cols="4" class="text-rigth">
      
      
            </v-col>
            <v-col  cols="4">
              <img :src="Group3Image" alt="">
            </v-col>
          </v-row>
      
          <!-- Tercera fila -->
          <v-row >
            <v-col cols="4" class=" mx-auto text-center">
              <img style="margin-top: -300px;" :src="Group4Image" alt="">
            </v-col>
          </v-row>
        </div>
      </v-container>
      
    
    </div>
    </fragment>
  </template>

<style lang="scss" scoped>
@import './expertise-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import TitleDeco from '../Title/WithDecoration'
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'
import Group1Image from '../../static/images/urpe/Group1.png'
import Group2Image from '../../static/images/urpe/Group2.png'
import Group3Image from '../../static/images/urpe/Group3.png'
import Group4Image from '../../static/images/urpe/Group4.png'


export default {
  components: {
    TitleDeco,
    Hidden,
    KinesisContainer,
    KinesisElement,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      Group1Image,
        Group2Image,
        Group3Image,
        Group4Image,
      slickOptions: {

        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        imgAPI: imgAPI,
        vertical: true
      },

      expertosArray: [
        Group1Image,
        Group2Image,
        Group3Image,
        Group4Image
      ],
      nroTlf: '+1 800-643-6740',

    }
  },
  methods: {
    realizarLlamada() {
      window.location.href = 'tel:' + this.nroTlf;
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  },

}
</script>
