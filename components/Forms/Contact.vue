<template>
  <div class="form-wrap">
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
    >
      <div class="action">
        Message Sent
      </div>
      <!-- <v-btn
        text
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn> -->
    </v-snackbar>
    <!-- <hidden point="mdUp">
      <div class="logo logo-header">
        <nuxt-link :to="routeLink.medical.home">
          <img :src="logo" alt="logo">
        </nuxt-link>
      </div>
    </hidden> -->
    <!-- <hidden point="smDown">
      <v-btn
        :href="routeLink.medical.home"
        icon
        class="backtohome"
      >
        <i class="ion-ios-home-outline" />
        <i class="ion-ios-arrow-round-back-outline" />
      </v-btn>
    </hidden> -->
   
    <!-- <v-card variant="tonal" tile="Envianos Un Mensaje">

      <v-container class="max-md containerweb">
      <div class="formulario">
    <v-container class="contenedor">
      <h2 class="titulo">Envianos un Mensaje
      </h2>
      <v-text-field
        v-model="textoInput"
        label="Tu Nombre"
        outlined
        rounded
        class="campo-input"
      ></v-text-field>
      <v-text-field
        v-model="textoInput"
        label="Tu Email"
        outlined
        rounded
        class="campo-input"
      ></v-text-field>
      <v-text-field
        v-model="textoInput"
        label="Tu mensaje"
        outlined
        rounded
        class="campo-input"
      ></v-text-field>
      <v-btn color="primary" class="boton" @click="enviar">Enviar</v-btn>
    </v-container>
  </div>
    </v-container>
    </v-card > -->

    
    <v-card class="mx-auto px-6 py-8 cardtext"  max-width="400" >
      
        <v-card-title class="title-card">Envianos un Mensaje</v-card-title>
   
        <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
      
        <v-text-field
        v-model="textoInput"
        
        variant="solo-filled"
        label="Tu Nombre"
        outlined
        rounded
        background-color="#E7E7E7"
        class="campo-input  inputs"
      ></v-text-field>
      <v-text-field
        v-model="textoInput"
        label="Tu Email"
        outlined
        rounded
        variant="solo-filled"
        class="campo-input"
        background-color="#E7E7E7"
      ></v-text-field>
      
      <v-textarea  
      v-model="textoInput"
        label="Tu mensaje"
        outlined
        rounded
        variant="solo-filled"
        class="campo-input" 
        background-color="#E7E7E7"
        >
      </v-textarea>
      <br>
        <v-btn
         
        
          color="primary"
          size="large"
          type="submit"
          variant="elevated"
           class="boton" 
         
        >
         Enviar
        </v-btn>
        <br>
      </v-form>
    </v-card>


 
    <br>
    
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import logo from '~/static/images/medical-logo.svg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
// import Hidden from '../Hidden'

export default {
  components: {
    // Hidden
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: 'Nombre',
      company: 'Correo',
      message: '',
      checkbox: false,
      logo: logo,
      brand: brand,
      routeLink: link
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  }
}
</script>
