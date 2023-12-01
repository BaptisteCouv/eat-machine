<template>
  <v-app>
    <default-bar />

    <default-view />

    <BottomNavigation />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import BottomNavigation from '@/layouts/default/BottomNavigation.vue'
</script>
