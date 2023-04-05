<template lang="pug">
div.text-start
    div.node(:style="{'margin-left': `${level * 20}px`}" v-on:click="isShow = !isShow").flex
        span(v-if="isParent") {{ isShow ? '[-]' : '[+]' }}
        span(v-else) $
        p.mr-4 {{ node.name }}
        p.text-red-400  {{ node.value }}
    TreeViewer(
        v-if="isShow"
        v-for="child in node.children" 
        :key="child.name"
        :node="child"
        :level="level + 1"
        )
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  node: { type: Object, required: true },
  level: { type: Number, default: 0 },
});
const isShow = ref(true);
const isParent = computed(() => {
  return props.node.children.length > 0;
});
</script>

<style scoped>
.node {
  color: blue;
}
</style>
