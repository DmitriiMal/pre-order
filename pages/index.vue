<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <h1 class="text-h5 me-7">Code Monkeys</h1>
      <v-btn :ripple="false" rounded="xl" class="ma-5" variant="tonal">Change</v-btn>
    </div>
    <v-card elevation="3" class="pa-2">
      <v-list>
        <v-list-subheader class="text-uppercase">Order Info</v-list-subheader>

        <v-list-item v-for="(item, i) in items" :key="i" :value="item">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: 'Billa Plus - Europlaza G5', icon: 'mdi-map-marker' },
      { text: 'Today 12:00–12:10', icon: 'mdi-clock-outline' },
    ],
  }),
};
</script>
