<template>
  <div class="root">
    
    <v-container fluid  class="fixed-width contweb">
      
      <v-row class="row-cont">
       
        <v-col cols="12"  >
        
          <div class="containerdiv">
            
            <img :src=integral alt="" class="img2">
            <div class="content">
              <v-card class="curved-right ard-overlay " >
            
            <v-card-text class="cardtext">
              <!-- Aquí coloca tu texto u otros elementos dentro de la card -->
              <!-- <title-deco class="title use-text-subtitle" text="Quienes somos?" :bg="photo"/> -->
              <title class="title titletext">
                Quienes somos?
                <!-- <h3 class="titletext">
                </h3> -->
              </title>
              <br>
              <!-- <span class="title">Quienes somos?</span> -->
              <p class="title-default subtitle">
                <a href="" class="quienessomosweb">Quienes somos? <br> <br></a>
                <a class="text">"Urpe Integral Services</a> es como tu amigo confiable que te guía a través de los trámites"
              </p>
            
              <p class="title-default use-text-subtitle parrafo">
                 "Desde inmigración, impuestos, reparación de crédito y bienes raíces en los Estados Unidos.
                Nos adaptamos a tus necesidades, ofreciéndote consejos y soluciones personalizadas para ayudarte a alcanzar tu estabilidad.
                En Urpe, estamos a tu lado en cada paso del camino, haciendo tu vida más fácil y próspera en tu nuevo hogar."
              </p>
            </v-card-text>
          </v-card>
          <img src='../../static/images/urpe/somos.jpg' alt="" class="img1">
            </div>
          
           

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

//import TitleDeco from '../Title/WithDecoration'
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
    //TitleDeco
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
