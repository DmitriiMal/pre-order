<template>
  <div>
    <h1 class="text-sm-h4 text-h5 me-7 mb-4">Was darf’s sein?</h1>

    <!-- <v-col :key="cards[0].title" :cols="cards[0].flex">
        <v-card>
          <v-img :src="cards[0].src" class="align-start" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
            <v-card-title class="text-white" v-text="cards[0].title"></v-card-title>
          </v-img>
        </v-card>b
      </v-col> -->

    <v-row dense>
      <v-col v-for="card in cards" v-show="card.isSpecial" :key="card.title" :cols="card.flex">
        <v-car :to="card.link">
          <v-img :src="card.src" class="align-start" cover aspect-ratio="1.25">
            <v-card-title class="" v-text="card.title"></v-card-title>
          </v-img>
        </v-car>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col v-for="card in cards" v-show="!card.isSpecial" :key="card.title" :cols="card.flex">
        <v-card :to="card.link">
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
      { title: 'Special of the day', link: '/products/special', src: getImageUrl('specials', 'png'), flex: 12, isSpecial: true },
      { title: 'BILLA Originals', link: '/products/originals', src: getImageUrl('originals', 'png'), flex: 6, isSpecial: false },
      { title: 'Build your own', link: '/products/custom', src: getImageUrl('custom', 'png'), flex: 6, isSpecial: false },
    ],
  }),
};
</script>
