<template>
  <div class="cards">
    
        <div class="container-icon">
           <img :src="avatar" class="photo">
         
        </div>
        
      

  <v-card class="profile" elevation="0">
   
    <div class="person-block">
     
      <div class="name-card">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
    <!-- <hr class="divider" /> -->
    <div class="action">
      <!-- <div class="property">
        <span>
          <i class="ion-thumbsup"></i>&nbsp; {{ rating }}%</span>
          <span><i class="ion-briefcase"></i>&nbsp; {{ exp }} Years</span>
      </div> -->
      <!-- <v-btn
        color="secondary"
        class="button">
        chat
      </v-btn> -->
    </div>
  </v-card>
</div>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
    // rating: {
    //   type: Number,
    //   required: true
    // },
    // exp: {
    //   type: Number,
    //   required: true
    // }
  }
}
</script>
