<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <nuxtLink to="/feinkost">My Group</nuxtLink>
    </v-navigation-drawer>

    <v-app-bar :elevation="4" class="bg-amber-lighten-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
      <template v-slot:append>
        <!-- <v-btn icon="mdi-heart"></v-btn> -->
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>

      <BottomNav />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
