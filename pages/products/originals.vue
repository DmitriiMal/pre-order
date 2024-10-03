<template>
  <div>
    <h1 class="me-7 mb-4">Was darf’s sein?</h1>
    <v-card v-for="card in cards" :key="card.id" elevation="0">
      <v-row class="mb-2" dense>
        <v-col cols="2" class="">
          <v-img :src="card.src" cover rounded :aspect-ratio="3 / 4" class="bg-amber-accent-1"></v-img>
        </v-col>
        <v-col cols="7" class="px-0">
          <v-card-text v-text="card.title" class="px-1 font-weight-bold"></v-card-text>
        </v-col>
        <v-col cols="3" class="px-0">
          <v-card-text class="px-1 text-h6 font-weight-bold">&euro; {{ card.prise }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
function getImageUrl(name, ext) {
  return new URL(`/assets/images/${name}.${ext}`, import.meta.url).href;
}

export default {
  data: () => ({
    cards: [
      { id: 1, title: 'Semmerl mit Extrawurst und Gurkerl', prise: 2.99, src: getImageUrl('originals', 'png') },
      { id: 2, title: 'Mohnflesserl mit Gouda und Paprikastreifen', prise: 3.29, src: getImageUrl('originals', 'png') },
      { id: 3, title: 'Kornspitz mit Emmentaler und Salat', prise: 2.99, src: getImageUrl('originals', 'png') },
      { id: 4, title: 'Mohnflesserl mit Gouda und Paprikastreifen', prise: 3.29, src: getImageUrl('originals', 'png') },
      { id: 5, title: 'Semmerl mit Extrawurst und Gurkerl', prise: 2.99, src: getImageUrl('originals', 'png') },
      { id: 6, title: 'Mohnflesserl mit Gouda und Paprikastreifen', prise: 3.29, src: getImageUrl('originals', 'png') },
      { id: 7, title: 'Kornspitz mit Emmentaler und Salat', prise: 2.99, src: getImageUrl('originals', 'png') },
      { id: 8, title: 'Mohnflesserl mit Gouda und Paprikastreifen', prise: 3.29, src: getImageUrl('originals', 'png') },
      { id: 9, title: 'Semmerl mit Extrawurst und Gurkerl', prise: 2.99, src: getImageUrl('originals', 'png') },
      { id: 10, title: 'Mohnflesserl mit Gouda und Paprikastreifen', prise: 3.29, src: getImageUrl('originals', 'png') },
      { id: 11, title: 'Kornspitz mit Emmentaler und Salat', prise: 2.99, src: getImageUrl('originals', 'png') },
      { id: 12, title: 'Mohnflesserl mit Gouda und Paprikastreifen', prise: 3.29, src: getImageUrl('originals', 'png') },
      { id: 13, title: 'Semmerl mit Extrawurst und Gurkerl', prise: 2.99, src: getImageUrl('originals', 'png') },
      { id: 14, title: 'Mohnflesserl mit Gouda und Paprikastreifen', prise: 3.29, src: getImageUrl('originals', 'png') },
      { id: 15, title: 'Kornspitz mit Emmentaler und Salat', prise: 2.99, src: getImageUrl('originals', 'png') },
      { id: 16, title: 'Mohnflesserl mit Gouda und Paprikastreifen', prise: 3.29, src: getImageUrl('originals', 'png') },
    ],
  }),
};
</script>
