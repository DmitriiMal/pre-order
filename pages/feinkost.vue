<template>
  <div>
    <h1 class="me-7 mb-4">Was darf’s sein?</h1>

    <!-- <v-col :key="cards[0].title" :cols="cards[0].flex">
        <v-card>
          <v-img :src="cards[0].src" class="align-start" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
            <v-card-title class="text-white" v-text="cards[0].title"></v-card-title>
          </v-img>
        </v-card>b
      </v-col> -->
    <v-row dense>
      <v-col v-for="card in cards" v-show="card.isSpecial" :key="card.title" :cols="card.flex">
        <v-card :to="card.link" max-height="400px" max-width="500px">
          <v-img :src="card.src" cover :aspect-ratio="4 / 3" class="d-flex">
            <v-row no-gutters>
              <v-col align-self="start">
                <p class="ms-4 mt-2 pb-0 text-overline">Special of the day</p>
                <v-card-title class="py-0" v-text="card.title"></v-card-title>
                <v-chip color="red" class="ms-4 px-4"><v-icon icon="mdi-alert-circle" start></v-icon>only 3 left</v-chip>
              </v-col>
            </v-row>
            <v-row class="h-100">
              <!-- <v-col cols="auto"></v-col> -->
              <v-col cols="auto" class="d-flex align-center mb-4 ms-auto me-3" align-self="en">
                <h2 class="me-2">€ 2,39</h2>
                <v-btn elevation="2" color="amber-lighten-1" icon="mdi-cart-plus"></v-btn>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="card in cards" v-show="!card.isSpecial" :key="card.title" :cols="card.flex">
        <v-card :to="card.link" max-height="310px" max-width="250px">
          <v-img :src="card.src" class="align-end" cover aspect-ratio="0.8">
            <v-card-title class="" v-text="card.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
// import specials from '~/assets/images/specials.png';
</script>
<script>
function getImageUrl(name, ext) {
  return new URL(`/assets/images/${name}.${ext}`, import.meta.url).href;
}
export default {
  data: () => ({
    cards: [
      { title: 'Cordon-Bleu Weckerl', link: '/products/special', src: getImageUrl('specials', 'png'), flex: 12, isSpecial: true },
      { title: 'BILLA Originals', link: '/products/originals', src: getImageUrl('originals', 'png'), flex: 6, isSpecial: false },
      { title: 'Build your own', link: '/products/custom', src: getImageUrl('custom', 'png'), flex: 6, isSpecial: false },
    ],
  }),
};
</script>
