<template>
  <div class="root">
    
    <v-container fluid class="fixed-width">
      
      <v-row>
       
        <v-col cols="12"  >
        
          <div class="containerdiv">
            
            <img :src=integral alt="" class="img2">
            <v-card class="curved-right" >
            
        <v-card-text>
          <!-- Aquí coloca tu texto u otros elementos dentro de la card -->
          <title-deco text="Quienes somos?" :bg="photo"/>
          <p class="title-default use-text-subtitle">
            <a class="text">"Urpe Integral Services</a> es como tu amigo confiable que te guía a través de los trámites"
          </p>
        
          <p class="title-default use-text-subtitle">
          "Desde inmigración, impuestos, reparación de crédito y bienes raíces en los Estados Unidos.
            Nos adaptamos a tus necesidades, ofreciéndote consejos y soluciones personalizadas para ayudarte a alcanzar tu estabilidad.
            En Urpe, estamos a tu lado en cada paso del camino, haciendo tu vida más fácil y próspera en tu nuevo hogar."
          </p>
        </v-card-text>
      </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style';
@import '../Title/title-style';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

import TitleDeco from '../Title/WithDecoration'
import somos from '../../static/images/urpe/somos.jpg'
import integral from '../../static/images/urpe/integral2.png'

export default {
  data() {
    return {
      photo: imgAPI.medical[1],
      somos,
      integral
    }
  },
  components: {
    TitleDeco
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
