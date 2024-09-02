<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list class="ms-5 mt-16">
        <v-list-item to="/products/custom">My Group</v-list-item>
        <v-list-item to="">Account</v-list-item>
        <v-list-item to="">History</v-list-item>
        <v-list-item to="">Favorits</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :elevation="4" class="bg-amber-lighten-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <nuxtLink to="/" class="text-decoration-none text-black">
        <!-- This title should change dynamically, depending on the current page  -->
        <v-app-bar-title> Application </v-app-bar-title>
      </nuxtLink>
      <template v-slot:append>
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
// import { ref } from 'vue';

const drawer = ref(null);
</script>

<!-- <script>
export default {
  data: () => ({ drawer: null }),
};
</script> -->
