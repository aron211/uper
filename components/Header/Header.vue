<template>
  <fragment>
    <v-navigation-drawer
      
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
    >
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo"
          >

            <div class="logo">
              <nuxt-link
                v-show="invert"
                :to="link.medical.home"
              >
                <img
                  :src="logo"
                  alt="logo"
                >
                
              </nuxt-link>
              <scrollactive
                v-if="!invert && loaded"
                tag="span"
              >
                <a
                  href="#home"
                  class="anchor-link scrollactive-item"
                >
                  <img
                    class="logourpe"
                    :src="logo"
                    alt="logo"
                  >
                  
                </a>
              </scrollactive>
            </div>

          </nav>
          <nav
            :class="{ invert: invert }"
            class="nav-menu"
          >

            <!-- <setting-menu :invert="invert" /> -->
            <v-btn
                
                :class="{ 'is-active': openDrawer }"
                class="hamburger hamburger--spin mobile-menu"
                plain
                @click.stop="handleToggleOpen"
              >
                <v-img class="iconMenu" :src="iconMenu" alt="Icono del menú" />
              </v-btn>
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import logo from '~/static/images/urpe/logo.png'
import logoScrollD from '~/static/images/urpe/logoScrollD.png'
import iconMenulogo from '~/static/images/urpe/Menu.png'
import iconMenu from '~/static/images/urpe/Menu.png'
import link from '~/static/text/link'
import brand from '~/static/text/brand'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: logo,
      iconMenu: iconMenu,
      iconMenulogo: iconMenulogo,
      logoScrollD: logoScrollD,
      link: link,
      loaded: false,
      brand: brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40)
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 80) {
        // return (this.fixed = true)
        this.fixed = true
        this.logo = logoScrollD;
      }
      else {
        this.fixed = false;
        this.logo = logo;
      }
      // return (this.fixed = false)
    },
    setOffset: function(offset) {
      this.navOffset = offset
    },
    handleToggleOpen: function() {
      this.openDrawer = !this.openDrawer
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    mdUp() {
      return this.$mq === 'md' || this.$mq === 'lg' || this.$mq === 'xl'
    }
  }
}
</script>
