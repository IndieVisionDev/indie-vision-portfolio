<template>
  <div class="flex flex-col min-h-screen">
    <main-nav class="w-100"/>
    <div class="flex justify-center flex-grow">
      <router-view />
    </div>
    <the-footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from "@/components/Navigation/MainNav.vue";
import TheFooter from '@/components/TheFooter.vue';
// import firebase from "./firebaseInit";
// const db = firebase.firestore();
</script>

