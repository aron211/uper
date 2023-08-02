<template>
  <fragment>
    <div class="root">
      <v-container>
        <v-row class="spacing8">
          <v-col cols="12" lg="1" v-if="isDesktop" />
          <v-col cols="12" md="5">
            <div :class="{ 'text-center': !isDesktop}">
              <div class="title-deco">
                <div v-if="isDesktop" class="decoration"></div>
                <!-- <title-deco :text="$t('medicalLanding.expertise_title')" /> -->
                <h1 class="experttitle">Expertos</h1>
              </div>
            </div>
            <u-animate-container>
              <u-animate
                :offset="-100"
                name="zoomInShort"
                delay="0.1s"
                duration="0.3s"
                class="parallax-wrap"
              >
                <div class="parallax-wrap" v-if="loaded">
                  <kinesis-container
                     :duration="1500"
                     easing="cubic-bezier(0.23, 1, 0.32, 1)"
                  >
                    <kinesis-element
                      :strength="15"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-green" />
                    </kinesis-element>
                    <kinesis-element
                      :strength="10"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-red" />
                    </kinesis-element>
                    <kinesis-element
                      :strength="30"
                      type="translate"
                      tag="div"
                    >
                      <span class="icon-blue" />
                    </kinesis-element>
                  </kinesis-container>
                </div>
              </u-animate>
            </u-animate-container>
          </v-col>
          <v-col
            cols="12"     
            lg="6"
            md="7"
          >
            <h4 class="title-default use-text-subtitle expertsubtitle">
             Esperando tu llamado
            </h4>

            <div class="tag-group">
              <img
                v-for="(item, index) in expertosArray"
                :key="index"
                :src="item"
                alt="Experto Image"
                class="tag-item"
              />
            </div>

            <!-- <p class="desc use-text-paragraph">
              {{ $t('medicalLanding.expertise_paragraph') }}
            </p> -->

            <hidden point="xsDown">
              <div class="running-tag" v-if="loaded">
                <slick :options="slickOptions">
                  <div
                    v-for="(group, indexGroup) in expertiseList"
                    :key="indexGroup"
                    class="tag-group"
                  >
                    <span
                      v-for="(item, indexChild) in group"
                      :key="indexChild"
                      class="tag-item"
                    >
                      {{ item }}
                    </span>
                  </div>
                </slick>
              </div>
            </hidden>
          </v-col>
        </v-row>
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
      expertiseList: [
  ['ruta-a-dentist.png', 'ruta-a-pediatric.png', 'ruta-a-cardiology.png'],
  ['ruta-a-othopaedi.png', 'ruta-a-traumatologi.png', 'ruta-a-anestesiologi.png'],
  // ... y así sucesivamente para las demás filas
],
expertosArray: [
        Group1Image,
        Group2Image,
        Group3Image,
        Group4Image
      ]

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
  }
}
</script>
