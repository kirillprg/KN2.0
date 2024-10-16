<template>



<q-page>

    <!--
Forked from:
https://quasar.dev/layout/grid/flex-playground#example--flex-example
-->
    <div id="q-app" style="min-height: 50vh;">
      <div class="row">



                 <div class="col-auto  " style="overflow: auto; height: auto;  width: auto">
                    <q-card class="no-border-radius">
                        <div class="q-pa-md">

                            <q-date v-model="date" today-btn :options="options" :events="events" event-color="orange" navigation-min-year-month="2024/02" navigation-max-year-month="2024/09" :locale="myLocale" />

                        </div>
                    </q-card>
                </div>



                <div class="col-auto " style="overflow: auto; height: auto; width: auto">
                    <q-card class="no-border-radius">
                        <q-card-section>
                            <div class="text-p3">Termíny</div>

                            <div class="text-p3">Choose an Appointment Time</div>
                            <div class="q-my-auto q-gutter-sm">

                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" glossy label="09:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" glossy label="10:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" glossy label="11:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" glossy label="13:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" glossy label="14:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" glossy label="15:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" glossy label="16:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" glossy label="17:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="red-14" glossy label="18:00" no-caps />
                                <q-btn :ripple="{ color: 'yellow' }" color="deep-orange" disable label="19:00" />

                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>


            <div class="col-auto " style="overflow: auto; height: auto; width: 320px">

                <q-card class="no-border-radius">
                    <q-card-section>
                        <div class="text-p3">Termíny</div>
                        <div class="text-p3">Enter Your Details</div>

                        <div id="q-app" style="min-height: 100vh;">
                            <div class="q-pa-md" style="max-width: 400px">

                                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                                    <q-input filled v-model="name" label="Your name *" hint="Name and surname" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"></q-input>

                                    <q-input filled type="number" v-model="age" label="Your age *" lazy-rules :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"></q-input>

                                    <q-toggle v-model="accept" label="I accept the license and terms"></q-toggle>

                                    <div>
                                        <q-btn label="Submit" type="submit" color="primary"></q-btn>
                                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
                                    </div>
                                </q-form>

                            </div>
                          </div>
                    </q-card-section>
                </q-card>
            </div>



            <div class="col-auto " style="overflow: auto; height: auto; width: 320px">

<q-card class="no-border-radius">
    <q-card-section>


    </q-card-section>


</q-card>
            </div>


          </div>

</q-page>

<q-dialog v-model="small">
    <q-card style="width: 300px">
        <q-card-section>
            <div class="text-h6">Potvrzení</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            Pro dokončení registrace podtvrď link v emailu
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
    </q-card>
</q-dialog>

</template>
<script>
import {
    useQuasar
} from 'quasar'
import {
    ref
} from 'vue'

import {
    defineComponent
} from 'vue'
/*
export default defineComponent({
  name: 'omne'
})
*/

function getFormattedToday(increment) {
    const today = new Date(new Date().getTime() + 24 * increment * 60 * 60 * 1000);
    // console.log(today)
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    var day = String(today.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

const todayDate = getFormattedToday(0);

const monthFromNow = []
for (let index = 0; index < 31; index++) {

    const day = getFormattedToday(index)
    monthFromNow.push(day)
    //console.log(day)
}

export default {
    setup() {
        const $q = useQuasar()

        const name = ref(null)
        const age = ref(null)
        const accept = ref(false)
       // console.log(date)
        return {

            date: ref(todayDate),
            options: monthFromNow,
            events: ['2023/10/30', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23'],
            myLocale: {
                /* starting with Sunday */
                days: 'Neděle_Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota'.split('_'),
                daysShort: 'Ne_Po_Út_St_Čt_Pá_So'.split('_'),
                months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
                monthsShort: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
                firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
                format24h: true,
                pluralDay: 'dny'
            },
            small: ref(false),
            model: ref('one'),
            //form
            name,
            age,
            accept,

            onSubmit() {
                if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                } else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                }
            },

            onReset() {
                name.value = null
                age.value = null
                accept.value = false
            },

        }

    }

}
</script>

<style>
.text-p3 {
    font-family: 'Asap', sans-serif;
    font-weight: bold;
    font-size: 15px;

}
</style>

<style lang="sass" scoped>

</style>
