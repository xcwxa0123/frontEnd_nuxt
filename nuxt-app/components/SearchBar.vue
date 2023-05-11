<template>
    <Sidebar v-model:visible="showSideBar" position="top" class="seacher-bar">
        <template #header>
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="bookName" placeholder="Search" />
            </span>
            <MultiSelect v-model="selectedSite" :options="siteList" optionLabel="label" optionValue="value"/>
        </template>
        <template #default>
            <Button label="Submit" @click="submit"/>
        </template>
    </Sidebar>
</template>
<script setup lang="ts">
    const props = defineProps({
        showSideBar: { type: Boolean, default: false },
    })
    const emit = defineEmits({
        getSearchList: Function,
    })
    // let showSideBar = ref(false)
    let bookName = ref()
    let selectedSite = ref<Array<string>>([])
    const submit = () => {
        console.log('selectedSite======>', selectedSite.value)
        console.log('bookName======>', bookName.value)
        emit('getSearchList', selectedSite.value, bookName.value)
    }
    const siteList = ref([
        {
            label: 'kakuyomu',
            value: '1'
        },
        {
            label: 'syosetsunarou',
            value: '2'
        }
    ])
</script>