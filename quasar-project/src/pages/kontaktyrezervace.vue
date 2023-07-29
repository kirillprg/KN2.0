<template>
  <q-page>
    <h5> rezerv </h5>
    <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-date v-model="date" 
      today-btn
      :options="options"
      :events="events"
      navigation-min-year-month="2023/07"
      navigation-max-year-month="2023/09"
      :locale="myLocale"
      />

      
    </div>
  </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
/*
export default defineComponent({
  name: 'omne'
})
*/

function getFormattedToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

const todayDate = getFormattedToday();

import { ref } from 'vue'

export default {
  setup () {
    return {
      date: ref(todayDate),
      options: [ '2023/07/30', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ],
      events: [ '2023/07/30', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ],
      myLocale: {
        /* starting with Sunday */
        days: 'Neděle_Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota'.split('_'),
        daysShort: 'Ne_Po_Út_St_Čt_Pá_So'.split('_'),
        months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        monthsShort: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
        format24h: true,
        pluralDay: 'dny'
      }
    }
  }
}


</script>

<style>


</style>
