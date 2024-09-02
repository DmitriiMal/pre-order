<template>
  <div>
    <h1 class="text-sm-h4 text-h5 me-7">Was darf’s sein?</h1>
    <v-row dense>
      <!-- <v-col :key="cards[0].title" :cols="cards[0].flex">
        <v-card>
          <v-img :src="cards[0].src" class="align-start" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
            <v-card-title class="text-white" v-text="cards[0].title"></v-card-title>
          </v-img>
        </v-card>
      </v-col> -->
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card :to="card.link">
          <v-img :src="card.src" class="align-end" height="200px" cover>
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
      { title: 'Special of the day', link: '/products/special', src: getImageUrl('specials', 'png'), flex: 12 },
      { title: 'BILLA Originals', link: '/products/originals', src: getImageUrl('originals', 'png'), flex: 6 },
      { title: 'Build your own', link: '/products/custom', src: getImageUrl('custom', 'png'), flex: 6 },
    ],
  }),
};
</script>
