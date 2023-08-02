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
                  <v-col
                    v-for="(item, index) in doctorsData"
                    :key="index"
                    cols="12"
                    sm="6"
                    class="px-lg-8 px-3 py-3"
                  >
                    <!-- <u-animate
                      :delay="(0.2 * index) + 's'"
                      duration="0.4s"
                      name="fadeInUpShort"
                    > </u-animate> -->
                      <div>
                        <profile-card
                        :avatar="item.avatar"
                          :title="item.title"
                          :description="item.description"
                         
                          
                        />
                      </div>
                    
                  </v-col>
                </v-row>
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
      // categories: [
      //   'all',
      //   'Orthopedic',
      //   'Nutritionist',
      //   'Pediatric',
      //   'Anaesthestic'
      // ],
      doctorsData: [
        {
          avatar: logo,
          title: 'lorem insupm lore lore ',
          description: 'tramites de inmigracion'
        },
        {
          avatar: logo,
          title: 'lorem insupm lore lore ',
          description: 'tramites de inmigracion'
        },
        {
          avatar: logo,
          title: 'lorem insupm lore lore ',
          description: 'tramites de inmigracion'
        },
        {
          avatar: logo,
          title: 'lorem insupm lore lore ',
          description: 'tramites de inmigracion'
        }
      ]
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
