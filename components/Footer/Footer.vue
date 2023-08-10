<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <v-container class="max-lg footer">
    <v-row class="spacing4 footermovil">

      <v-container class="fixed-width">
        <v-col cols="12" lg="5" md="6" class="pa-6 pt-0">
          <h4 class="title-primary mt-10 titlecont">
            <!-- {{ $t('medicalLanding.clinic_title') }} -->
            Contacto
          </h4>
          <h4 class="title-primary mt-10 subtitledisp">
            <!-- {{ $t('medicalLanding.clinic_title') }} -->
            Disponible <a href="" style="color: #2091F9; text-decoration: none;">24/7</a>
          </h4>
        </v-col>
      </v-container>


      <v-col md="3" cols="12" class="pa-4">
        <div class="socmed">
          <v-btn style=" background-color: transparent !important;" text icon variant="plain" class="button">
            <span class="ion-logo-facebook icon" />
          </v-btn>
          <v-btn style=" background-color: transparent !important;" text icon variant="plain" class="button">
            <span class="ion-logo-twitter  icon" />
          </v-btn>
        </div>

        <section class="space-top-short" id="contacts">
          <div class="block">
            <!-- <u-animate-container> -->
            <div v-for="(item, index) in clinicData" :key="index">
              <AddressCard :address="item.address" :phone="item.phone" :email="item.email" />
            </div>
            <!-- </u-animate-container> -->
          </div>
          <Contact />
        </section>
      </v-col>
      <div class="main-wrap">

      </div>
    </v-row>
    <div class="contactweb">

      <v-row class="titlewebform">
        <v-col cols="7">
          <div class="mx-auto titlewebformtext">
            <v-col cols="12" lg="5" md="6" class="pa-6 pt-0">
              <h4 class="title-primary mt-10 titlecont" style="margin-bottom: -50px;">
                <!-- {{ $t('medicalLanding.clinic_title') }} -->
                Contacto
              </h4>
              <h4 class="title-primary mt-10 subtitledisp">
                <!-- {{ $t('medicalLanding.clinic_title') }} -->
                Disponible <a href="" style="color: #2091F9; text-decoration: none;">24/7</a>
              </h4>
            </v-col>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <div class="socmed mx-auto">
          <v-btn style=" background-color: transparent !important;" text icon variant="plain" class="button">
            <span class="ion-logo-facebook icon" />
          </v-btn>
          <v-btn style=" background-color: transparent !important;" text icon variant="plain" class="button">
            <span class="ion-logo-twitter  icon" />
          </v-btn>
        </div>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12">

          <v-card class="mx-auto" max-width="80vw">

            <v-card-title class="title-card mx-auto text-center titlewebform">Envianos un Mensaje</v-card-title>

            <v-form class="formcontact" @submit.prevent="onSubmit" width="80vw">

              <v-text-field variant="solo-filled" label="Tu Nombre" outlined rounded background-color="#E7E7E7"
                class="campo-input  inputs textfieldweb"></v-text-field>
              <v-text-field label="Tu Email" outlined rounded variant="solo-filled" class="campo-input textfieldweb"
                background-color="#E7E7E7"></v-text-field>

              <v-textarea label="Tu mensaje" outlined rounded variant="solo-filled" class="textfieldweb campo-input"
                background-color="#E7E7E7">
              </v-textarea>
              <br>
              <v-btn color="primary" size="large" type="submit" variant="elevated" class="boton">
                Enviar
              </v-btn>
              <br>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/medical-logo.svg'
import brand from '~/static/text/brand'
import Contact from '~/components/Forms/Contact'
import AddressCard from '../Cards/Address'
// import Decoration from '~/components/Forms/Decoration'

export default {
  components: {
    Contact,
    AddressCard
    // Decoration
  },
  data: () => ({
    logo: logo,
    brand: brand,
    lang: 'en',
    clinicData: [
      {
        // name: 'Central Clinic',
        address: '3480 Preston Ridge Rd Suite 500, Alpharetta, GA 30005',
        email: 'UrpeintegralServices@gmail.com',
        phone: '+1 800-643-6740'
      }
    ],
    footers: [
      {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
        link: ['#team', '#history', '#contact-us', '#locations']
      },
      {
        title: 'Resources',
        description: [
          'Resource',
          'Resource name',
          'Another resource',
          'Final resource'
        ],
        link: [
          '#resource',
          '#resource-name',
          '#another-resource',
          '#final-resource'
        ]
      },
      {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
        link: ['#privacy-policy', '#terms-of-use']
      }
    ]
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    langList: function () {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang: function (val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
