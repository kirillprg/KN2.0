<template>
  <q-page class="q-pa-lg">

  <div class="q-pa-md">
    <q-responsive :ratio="4/3" style="width: 500px; max-width: 100%;">
      <q-carousel
        swipeable
        animated
        :control-type="controlType"
        control-color= 'black'
        navigation
        padding
        arrows
        v-model="slide"
        infinite
      >
        <q-carousel-slide :name="1" img-src="src\statics\Kate_foto.jpg" />
        <div class="q-mt-md text-center">
          galer1
        </div>
        <q-carousel-slide :name="2" src="quasar-project\src\statics\galer\galer2.jpg" />
        <q-carousel-slide :name="3" img-src="quasar-project\src\statics\galer\galer3.jpg"/>
        <q-carousel-slide :name="4" img-src="quasar-project\src\statics\galer\galer4.jpg" />

        <template v-slot:control>
          <q-carousel-control
            position="bottom"
            :offset="[16, 8]"
            class="text-white text-center rounded-borders"
            style="background: rgba(255, 255, 255, .2); padding: 4px 8px;"
          >
            name
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-responsive>
  </div>

  
  <p3>vice na mém <a href="https://instagram.com/kate_nehty?igshid=Y2I2MzMwZWM3ZA==" target="_blank">instagramu</a>...</p3>
</q-page>
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
      slide: ref(1)
    }
  }

}
</script>
