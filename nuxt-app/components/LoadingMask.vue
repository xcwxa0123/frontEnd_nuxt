
<template>
    <Dialog v-model:visible="props.loading" v-model:closable="closable" v-model:draggable="draggable" modal :style="{ width: '10rem' } ">
        <ProgressSpinner />
    </Dialog>
</template>
<script setup lang="ts">
    const closable = ref(false)
    const draggable = ref(false)
    const props = defineProps({
        loading: { type: Boolean, default: false },
    })
</script>