<template>
  <v-container>
  
    <carousel class=" d-lg-none "
      
      :perPageCustom="[[600,2],[960,3],[1264,3] ]"
      :mouse-drag="false"
      :centerMode="true"
    >
      <slide :key="index" v-for="(temp, index) in logos"  >
         <v-row class=" justify-center mt-13 "  style="height: 350px;">
      
       <v-col class="d-flex flex-row justify-center ">
        <v-card
          :key="index"
          class="pa-2 mr-4 ml-4 wid"
          outlined
          tile
          @click="$emit('tabChanged', index)"
          :ripple="false"
          :class="{ activez: tab === index }"
          
        >
          <img :src="tab === index ? temp.iconz : temp.icon" class="benz" />
          <div class="sides">{{ temp.title }}</div>
          <div class="sides">{{ temp.num }}</div>

          <v-row class="sst" justify="center">
            <div v-if="tab === index">
              <p><i class="arrow down" @click="add"></i></p>
            </div>
          </v-row>
        </v-card>
        
      </v-col>
    </v-row>
      </slide>
      
    </carousel>
  </v-container>
</template>
<style lang="scss"></style>
<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  name: 'TestCarousel',
  props: {
    logos: {
      type: Array
    },
    tab: {
      type: Number
    },
    tabs:{
      type: Array
    },

  },
  // data: function () {
  //       return {
  //           mutableList: JSON.parse(this.tab),
  //       }
  //       },

  // data: function() {

  //   return {
  //     tab: 0,

  //     logos: [
  //     {
  //       icon:
  //           "/images/italic.svg",
  //           iconz:"/images/italic-2.svg",
  //       title: "Lettermark",
  //       num: "Logos",
      
  //     },
  //     { icon: "/images/w.svg",
  //     iconz:"/images/w-2.svg",
  //      title: "Wordmark" ,
  //      num: "Logos",},
  //     {
  //       icon:"/images/lemon.svg",
  //       iconz:"/images/lemon-2.svg",
  //         title: "Pictorial Mark",
  //         num: "Logos",
  //     },
  //     {
  //       icon:
  //         "/images/art.svg",
  //         iconz:"/images/art-2.svg",
  //       title: "Abstract Mark",
  //       num: "Logos",
  //     },
  //     {
  //       icon:
  //       "/images/mask.svg",
  //       iconz:"/images/mask-2.svg",
  //         title: "Mascot",
  //         num: "Logos",
  //     },
  //     {
  //       icon:
  //         "/images/puzz.svg",
  //         iconz:"/images/puzz-2.svg",
  //         title: "Combination",
  //         num: "Logos",
  //     }
  //   ],
  //   };
  // },
  components: {
    Carousel,
    Slide  
  },
  methods:{
    add: function() {
      // this.ticks = event.target.value;
      console.log(this.tab);
    }
  }
};
</script>
