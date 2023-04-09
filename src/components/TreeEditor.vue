<template lang="pug">
.grid.grid-cols-5.gap-4.mb-4(v-if="hasValue")
    input(class='').col-span-2.bg-gray-300.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-500.leading-tight(class='focus:outline-none focus:shadow-outline', 
    type='text', 
    placeholder='Title',
    v-model="titleRef"
    @input="changeHandler(titleRef , parentName+'.'+node.name ,node.value)")

    input.col-span-2.bg-gray-300.shadow.appearance-none.border.border.rounded.w-full.py-2.px-3.text-gray-500.leading-tight(class='focus:outline-none focus:shadow-outline', type='text', placeholder='Value' v-model="node.value")

    button.col-span-1.bg-blue-500.text-white.font-bold.py-1.px-4.rounded(class='hover:bg-blue-700 focus:outline-none focus:shadow-outline', type='button' @click="deleteHandler(parentName+'.'+node.name,node.value)") -
TreeEditor(v-for="child in node.children" :node="child" :parent-name="parentName ? parentName + '.' + node.name  : node.name")

</template>

<script setup>
// :value="parentName+'.'+node.name"
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  node: { type: Object, required: true },
  parentName: { required: false },
});
const hasValue = computed(() => {
  return props.node.value != "";
});
const titleRef = ref("");
titleRef.value = props.parentName + "." + props.node.name;

const deleteHandler = (arrInput, valueInput) => {
  console.log("delete");
  let arrValue = arrInput.split(".");
  store.commit("removeNode", { arr: arrValue, value: valueInput });
};
const changeHandler = (newstring, oldstring, value) => {
  let oldArrValue = oldstring.split(".");
  let newArrValue = newstring.split(".");
  let valueInput = value;
  let object = { oldArr: oldArrValue, newArr: newArrValue, value: valueInput };
  store.dispatch("updateNode", object);
};
</script>

<style scoped></style>
