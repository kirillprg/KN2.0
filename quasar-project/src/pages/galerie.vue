<template>
<div id="q-app">
    <div class="fit column items-center content-stretch" style="overflow: auto; resize: none">

        <div id="q-app" >
            <div class="q-pa-md">

                <q-carousel v-model="slide" vertical transition-prev="slide-down" transition-next="slide-up" swipeable animated control-color="white" navigation-icon="radio_button_unchecked" navigation-active-icon="ion-add" navigation navigation-position=right arrows infinite keep-alive transition-duration=500 class="bg-grey-3 shadow-2 rounded-borders">
                    <q-carousel-slide name="1" img-src="/galery/galery1.jpg">

                    </q-carousel-slide>

                    <q-carousel-slide name="2" img-src="/galery/galery2.jpg">

                    </q-carousel-slide>
                    <q-carousel-slide name="3" img-src="/galery/galery3.jpg">

                    </q-carousel-slide>
                    <q-carousel-slide name="4" img-src="/galery/galery4.jpg">

                    </q-carousel-slide>
                    <q-carousel-slide name="5" img-src="/galery/galery5.jpg">

                    </q-carousel-slide>
                    <q-carousel-slide name="6" img-src="/galery/galery6.jpg">

                    </q-carousel-slide>
                    <q-carousel-slide name="7" img-src="/galery/galery7.jpg">

                    </q-carousel-slide>
                    <q-carousel-slide name="8" img-src="/galery/galery8.jpg">

                    </q-carousel-slide>
                    <q-carousel-slide name="9" img-src="/galery/galery9.jpg">

                    </q-carousel-slide>
                </q-carousel>

            </div>
        </div>
        <div class="col-grow col-xs-1 self-center q-gutter-s q-col-gutter-s" style="overflow: auto;
  min-height: 25px; max-height: 750px;  min-width: 200px; max-width: 400px;">
            <p3>vice na mém <a href="https://instagram.com/kate_nehty?igshid=Y2I2MzMwZWM3ZA==" target="_blank">instagramu</a>...</p3>
        </div>

    </div>
</div>
</template>

<script>
import {
    defineComponent
} from 'vue';
/*
export default defineComponent({
  name: 'galerie'
});
*/
import {
    ref
} from 'vue'

export default {
    setup() {
        return {
            slide: ref('1')
        }

    },
    data() {
        return {
            windowHeight: null,
            windowWidth: null
            // Assuming you have a slide data property
        };
    },
    created() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;

        // Optionally, you can add an event listener to update values when the window is resized
    }
}
</script>

<style lang="sass" scoped>

</style>
