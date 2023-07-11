<template>
  <q-layout view="hhh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to= "/oMne" label="O mně" />
        <q-route-tab to= "/galerie" label="Galerie" />
        <q-route-tab to= "/kontaktyrezervace" label="kontakty a kalendář" />
      </q-tabs>
   
    
        <div class="q-px-lg q-pt-xl q-mb-xl">
          <div class="text-h3">Kate Nehty</div>
          <div class="text-subtitle1">{{todaysDate}}</div>
        
        </div>
     


        <div>
    <div v-if="$q.platform.is.ios">
      Hello Iphone user.
    </div>
  </div>
  <q-img
          src="src\statics\nehty1.jpg"
          class="header-image absolute-top"/>


        

 </q-header>
 <q-drawer 
 show-if-above 
 v-model="leftDrawerOpen" 
 ide="left" 
 elevated>
      <q-list>
        <q-item-label
          header
        >
          Užitečné odkazy
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
        <KeepAlive>
        </KeepAlive>
    </q-page-container>
  </q-layout>
</template>

<script>

import { date } from 'quasar'

import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Telegram',
    caption: '@Kate_nehty',
    icon: 'telegram',
    link: 'https://t.me/Kate_nehty'
  },
  {
    title: 'Facebook',
    caption: 'Kate Nehty',
    icon: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100063587104000'
  },
  {
    title: 'Viber',
    caption: 'Катя Комисарчук',
    icon: "fa-brands fa-viber"  ,
    link: 'viber://pa?chatURI=[U+2068]'//viber://pa?chatURI=[public account URI]&text=[message text]
  },
  {
    title: 'Instagram',
    caption: 'kate_nehty',
    icon: 'fab fa-instagram fa-1x',//'photo_camera'
    link: 'https://www.instagram.com/kate_nehty/?igshid=Y2I2MzMwZWM3ZA%3D%3D'
  },
  {
    title: 'Telefon',
    caption: '+420 777 438 457',
    icon: 'phone',
    link: 'tel:+420777438457'
  }
  
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
    computed:{
      todaysDate() {
        const timeStamp = Date.now()
        return date.formatDate(timeStamp, 'dddd YYYY-MM-DD')
      }

    }

})
</script>


<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.3;
  filter:contrast(100%)
}

</style>
