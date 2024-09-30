<template>
  <div>
    <v-bottom-navigation>
      <!-- <v-btn value="group">
        <v-icon>mdi-account-multiple</v-icon>
        <span>Group</span>
      </v-btn> -->

      <v-btn value="order" to="/">
        <v-icon>mdi-cart</v-icon>

        <span>Order</span>
      </v-btn>

      <v-btn value="feinkost" to="/feinkost">
        <v-icon>mdi-food</v-icon>

        <span>Feinkost</span>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
