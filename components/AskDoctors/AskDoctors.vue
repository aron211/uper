<template>
  <fragment>
    <div class="root">
      <div class="deco"></div>
      <v-container :class="{ 'fixed-width': mdUp }">

        <v-row class="spacing6" justify="center">
          <v-col cols="12" sm="9" md="2" class="pa-0">
            <div class="side-filter">
              <h4 class="title-primary">
                SERVICIOS

              </h4>
              <p class="subtitle">
                De Inmigracion a Inversion
              </p>
            </div>
            <!-- <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="title-primary">
                    SERVICES
                  </h4>
                  <v-list class="nav">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        v-for="(item, index) in categories"          
                        :key="index"
                        class="filter"
                      >
                        <v-list-item-title>
                          {{ item }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
              </u-animate> -->
          </v-col>
          <v-col cols="12" lg="8" md="10" class="pa-6 py-0">
            <div class="massonry">
              <v-row>
                <v-col v-for="(item, index) in doctorsData" :key="index" cols="12" sm="6" class="px-lg-8 px-3 py-3">
                  <!-- <u-animate
                      :delay="(0.2 * index) + 's'"
                      duration="0.4s"
                      name="fadeInUpShort"
                    > </u-animate> -->
                  <div>
                    <profile-card :avatar="item.avatar" :title="item.title" :description="item.description" />
                  </div>

                </v-col>
              </v-row>
              <v-col>
                <v-btn @click="realizarLlamada" color="primary" class="consulta" style="text-transform: capitalize">
                  <!-- {{ $t('common.form_send') }} -->
                  Consulta Gratis
                </v-btn>
              </v-col>
            </div>
          </v-col>
        </v-row>

      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './ask-doctors-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import ProfileCard from '../Cards/Profile'
import service1 from '../../static/images/urpe/services1.png'
import service2 from '../../static/images/urpe/services2.png'
import service3 from '../../static/images/urpe/services3.png'
import service4 from '../../static/images/urpe/services4.png'

import logo from '../../static/images/urpe/logo.png'
export default {
  components: {
    ProfileCard
  },
  data() {
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      logo,
      service1,
      service2,
      service3,
      service4,
      nroTlf: '+1 800-643-6740',
      // categories: [
      //   'all',
      //   'Orthopedic',
      //   'Nutritionist',
      //   'Pediatric',
      //   'Anaesthestic'
      // ],
      doctorsData: [
        {
          avatar: service1,
          title: 'Tramites de inmigracion ',
          description: 'Nos encargamos de todo tu proceso de Visado y/o Asilo.'
        },
        {
          avatar: service2,
          title: 'Asesoría de impuestos',
          description:
            'Simplificando tus Impuestos, maximizando tus devoluciones.'
        },
        {
          avatar: service3,
          title: 'Reparación de Crédito',
          description:
            'Reconstruimos tu Crédito, mejorando y abriendo puertas a nuevas oportunidades.'
        },
        {
          avatar: service4,
          title: 'Real Estate (Bienes Raíces)',
          description: 'Asesoría total en la compra y venta de bienes raíces.'
        }
      ]
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
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>
