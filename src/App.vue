<template lang="pug">
NestTree(:root="rootData")
</template>

<script setup>
import NestTree from "./components/NestTree.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const rootData = computed(() => {
  return store.state.root;
});
</script>

<style scoped></style>
