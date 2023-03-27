<template>
    <Toolbar>
        <template #start>
            <Button label="New" icon="pi pi-plus" class="mr-2" />
            <Button label="Upload" icon="pi pi-upload" severity="success" />
            <i class="pi pi-bars p-toolbar-separator mr-2" />
            <SplitButton label="Save" icon="pi pi-check" :model="items" severity="warning"></SplitButton>
        </template>

        <template #end>
            <Button icon="pi pi-search" class="mr-2" />
            <Button icon="pi pi-calendar" severity="success" class="mr-2" />
            <Button icon="pi pi-times" severity="danger" />
        </template>
    </Toolbar>
</template>
<script setup lang="ts">
    let items = ref()
</script>
<script lang="ts">
export default {
    data() {
        return { 
        }
    },
}
</script>