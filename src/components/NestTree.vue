<template lang="pug">
.grid.grid-cols-1(class="sm:grid-cols-2").gap-4 
    form.bg-gray-400.shadow-md.rounded.px-8.pt-6.pb-8.grid.grid-cols-1.w-full
        .grid.grid-cols-5.gap-4 
            label.col-span-2.block.text-gray-700.text-sm.font-bold.mb-2(for='Title')
                | Title
            label.col-span-2.block.text-gray-700.text-sm.font-bold.mb-2(for='Value')
                | Value
            label.col-span-1.block.text-gray-700.text-sm.font-bold.mb-2(for='edit')
                | Edit
        TreeEditor(:node="props.root" :parent-name="''")
        .grid.grid-cols-5.gap-4 
            input#Title.col-span-2.bg-gray-300.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-500.leading-tight(class='focus:outline-none focus:shadow-outline', type='text', placeholder='Title')

            input#Value.col-span-2.bg-gray-300.shadow.appearance-none.border.border.rounded.w-full.py-2.px-3.text-gray-500.leading-tight(class='focus:outline-none focus:shadow-outline', type='text', placeholder='Value')

            button.col-span-1.bg-blue-500.text-white.font-bold.py-1.px-4.rounded(class='hover:bg-blue-700 focus:outline-none focus:shadow-outline', type='button') +

    .bg-orange-200.shadow-md.rounded.text-gray-500 
        TreeViewer(:node="props.root")
        //- label.block.text-gray-700.text-md.font-bold(for='TREE-VIEW')
</template>
<script setup>
import TreeEditor from "./TreeEditor.vue";
import TreeViewer from "./TreeViewer.vue";
const props = defineProps({
  root: { type: Object, required: true },
});
</script>
<style scoped></style>
