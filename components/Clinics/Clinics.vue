<template>
  <div class="root">
    <div class="parallax-bottom">
      <parallax-oval />
    </div>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col cols="12" lg="1" class="pa-6 pt-0" v-if="isDesktop" />
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
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './clinics-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import ParallaxOval from '../Parallax/Oval'
// import AddressCard from '../Cards/Address'
// import Footer from '../Footer/Footer.vue'
export default {
  components: {
    ParallaxOval
    // AddressCard
    // Footer
  },
  data() {
    return {
      clinicData: [
        {
          name: 'Central Clinic',
          address: '3480 Preston Ridge Rd Suite 500, Alpharetta, GA 30005',
          email: 'Example@example.com',
          phone: '+1 800-643-6740'
        }
        // {
        //   name: 'Dental Clinic',
        //   phone: '+123 456 78 91',
        //   email: 'hello@luxi.com',
        //   address: 'Lorem ipsum street Block C - Vestibullum Building'
        // },
        // {
        //   name: 'Mother and Baby Care',
        //   phone: '+123 456 78 91',
        //   email: 'hello@luxi.com',
        //   address: 'Lorem ipsum street no.14 Block A'
        // },
        // {
        //   name: 'Orthopedic Clinic',
        //   phone: '+123 456 78 91',
        //   email: 'hello@luxi.com',
        //   address: 'Lorem ipsum street Block C - Vestibullum Building'
        // }
      ],
      currentLocation: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058
        },
        {
          lat: 47.815,
          lng: 15.9819
        },
        {
          lat: 40.953076,
          lng: 16.21
        },
        {
          lat: 44.22,
          lng: 16.98
        }
      ],
      clusterStyle: [
        {
          url:
            'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png',
          width: 56,
          height: 56,
          textColor: '#fff'
        }
      ]
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
