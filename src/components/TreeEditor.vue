<template lang="pug">
.grid.grid-cols-5.gap-4.mb-4(v-if="hasValue")
    input(class='').col-span-2.bg-gray-300.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-500.leading-tight(class='focus:outline-none focus:shadow-outline', type='text', placeholder='Title' :value="parentName+'.'+node.name")

    input.col-span-2.bg-gray-300.shadow.appearance-none.border.border.rounded.w-full.py-2.px-3.text-gray-500.leading-tight(class='focus:outline-none focus:shadow-outline', type='text', placeholder='Value' v-model="node.value")

    button.col-span-1.bg-blue-500.text-white.font-bold.py-1.px-4.rounded(class='hover:bg-blue-700 focus:outline-none focus:shadow-outline', type='button') -
TreeEditor(v-for="child in node.children" :node="child" :parent-name="parentName ? parentName + '.' + node.name  : node.name")

</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  node: { type: Object, required: true },
  parentName: { required: false },
});
const hasValue = computed(() => {
  return props.node.value != "";
});

const changeHandler = () => {
  console.log("change detected");
};
</script>

<style scoped></style>
