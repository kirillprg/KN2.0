<template>
  <div id="q-app" >
  <div class="fit column items-start content-stretch" 
  style="overflow: auto; resize: both">
  
  <div class="col-grow col-xs-1 self-center q-gutter-s q-col-gutter-s" 
  style="overflow: auto; resize: both; box-shadow: 5px 5px 10px 1px #ff0000 inset;
   min-height: 200px; max-height: 1500px;  min-width: 200px; max-width: 1500px;">
  
  
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      control-color="white"
      navigation-icon="radio_button_unchecked"
      navigation-active-icon= "ion-add"
      navigation
      navigation-position = right
      arrows
      infinite
      keep-alive
      
      transition-duration = 500
     
      height="windowHeight"
      width="windowWidth"
      
      >
      <q-carousel-slide name="1" img-src="/galery/galery1.jpg">
        
          
         
      </q-carousel-slide>
      <q-carousel-slide name="2" img-src="/galery/galery2.jpg">
        <div class="absolute-bottom custom-caption">
          
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" img-src="/galery/galery3.jpg">
        <div class="absolute-bottom custom-caption">
          
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" img-src="/galery/galery4.jpg">
        <div class="absolute-bottom custom-caption">
         
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="5" img-src="/galery/galery5.jpg">
        <div class="absolute-bottom custom-caption">
          
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="6" img-src="/galery/galery6.jpg">
        <div class="absolute-bottom custom-caption">
    
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="7" img-src="/galery/galery7.jpg">
        <div class="absolute-bottom custom-caption">
         
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="8" img-src="/galery/galery8.jpg">
        <div class="absolute-bottom custom-caption">
      
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="9" img-src="/galery/galery9.jpg">
        <div class="absolute-bottom custom-caption">
      
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      </q-carousel>

  </div><div class="col-grow col-xs-1 self-center q-gutter-s q-col-gutter-s" 
  style="overflow: auto; box-shadow: 5px 5px 10px 1px #000 inset;
  min-height: 25px; max-height: 25px;  min-width: 200px; max-width: 200px;">
    <p3>vice na mém <a href="https://instagram.com/kate_nehty?igshid=Y2I2MzMwZWM3ZA==" target="_blank">instagramu</a>...</p3>
  </div>
         
</div>
</div>



</template>





<script>
import { defineComponent } from 'vue';
/*
export default defineComponent({
  name: 'galerie'
});
*/
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('1')
    }
 
  },
  created() {
        this.windowHeight = window.innerHeight + 'px';
        this.windowWidth = window.innerWidth + 'px'
    }


}
/*
<q-carousel-slide :name="2" src="quasar-project\src\statics\galer\galer2.jpg" />
        <q-carousel-slide :name="3" img-src="quasar-project\src\statics\galer\galer3.jpg"/>
        <q-carousel-slide :name="4" img-src="quasar-project\src\statics\galer\galer4.jpg" />
*/
</script>



<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>