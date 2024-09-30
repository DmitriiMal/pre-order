<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <!-- Name of the group -->
      <h1 class="text-sm-h4 text-h5 me-7">Code Monkeys</h1>
      <!-- Button to change/leave/create group -->
      <v-btn :ripple="false" rounded="xl" class="ma-5" variant="tonal">Change</v-btn>
    </div>
    <!-- The card displays information about where and when to pick up the order -->
    <!-- There should be an oportunity to change the lokation -->
    <v-card elevation="3" class="pa-2">
      <v-list>
        <v-list-subheader class="text-uppercase">Order Info</v-list-subheader>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" :ripple="false">
          <div class="d-flex">
            <v-icon :icon="item.icon" class="me-4"></v-icon>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
    <!-- Button to submit the group order, should be clickable only if every member has added an order  -->
    <v-btn v-if="orderedMembersCount === members.length" color="amber-lighten-1" :ripple="false" rounded="xl" size="large" block class="my-5" prepend-icon="mdi-check">Submit Group Order</v-btn>
    <!-- To send a group order, each participant needs first submit their own order -->
    <v-btn v-else @click="snackbar = true" variant="tonal" :ripple="false" rounded="xl" size="large" block class="my-5 cursor-not-allowed" prepend-icon="mdi-check">Submit Group Order</v-btn>
    <!-- The snackbar tells, that everyone has to submit an order -->
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:actions>
        <!-- <v-btn color="amber-lighten-1" variant="text" @click="snackbar = false"> Close </v-btn> -->
        <v-btn color="amber-lighten-1" variant="outline" icon="mdi-close" size="small" @click="snackbar = false"></v-btn>
      </template>
    </v-snackbar>
    <!-- This card contains info about members and they're orders -->
    <v-card elevation="3" class="pa-0">
      <v-list>
        <v-list-subheader class="text-uppercase">Group Members</v-list-subheader>
        <v-list-item>
          <div class="d-flex">
            <v-icon icon="mdi-face-man" class="me-4"></v-icon>
            <v-list-item-title class="font-weight-bold">{{ orderedMembersCount }} of {{ members.length }} ordered</v-list-item-title>
          </div>
        </v-list-item>
        <!-- The message is shown depending on quantity of members, who's olready ordered -->
        <v-list-item class="bg-amber-lighten-3 py-2 my-1">
          <p v-if="orderedMembersCount >= 5">One of you can look forward to a surprise! 💛</p>
          <p v-else>If 5 or more people order in your group, one of you will win a FREE surprise! 💛</p>
        </v-list-item>
        <v-list-item v-for="(member, i) in members" :ripple="false">
          <div class="d-flex align-center mb-2">
            <v-list-item-title v-text="member.name" class="font-weight-bold"></v-list-item-title>
            <!-- The label is displayed depending on the order status -->
            <v-chip v-if="member.orderStatus === 'yes'" color="success" size="small" prepend-icon="mdi-check-circle" class="ms-4 px-4">order done</v-chip>
            <v-chip v-else-if="member.orderStatus === 'ordering'" size="small" class="ms-4 px-4">ordering ...</v-chip>
          </div>
          <!-- The order is shown if it is submited -->
          <v-list-item-subtitle v-if="member.orderStatus === 'yes'" v-text="member.order" class="mb-3"></v-list-item-subtitle>
          <!-- The button is shown if the user is logged in and hasn't ordered yet -->
          <v-btn v-if="member.logedIn && member.orderStatus !== 'yes'" to="/feinkost" :ripple="false" rounded="xl" color="amber-lighten-1" size="large" block class="my-5" prepend-icon="mdi-plus">Add your items</v-btn>
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
    members: [
      { name: 'Era', orderStatus: 'no', order: '', logedIn: true },
      { name: 'Jan', orderStatus: 'yes', order: 'Extrawurstsemmel mit gurkerl', logedIn: false },
      { name: 'Mattias', orderStatus: 'yes', order: 'Salzspitz mit leberkäse + extra essiggurken', logedIn: false },
      { name: 'Dima', orderStatus: 'ordering', order: '', logedIn: false },
      { name: 'Robert', orderStatus: 'no', order: '', logedIn: false },
      { name: 'Lisa', orderStatus: 'no', order: '', logedIn: false },
    ],

    snackbar: false,
    text: 'To send a group order, each participant needs first submit their own order',
    timeout: 4000,
  }),

  // Count members, who's already ordered
  computed: {
    orderedMembersCount() {
      return this.members.filter((member) => member.orderStatus === 'yes').length;
    },
  },
};
</script>
