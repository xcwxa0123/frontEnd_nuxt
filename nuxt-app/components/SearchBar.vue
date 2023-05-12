<template>
    <Sidebar v-model:visible="showSideBar" position="top" class="seacher-bar" update:visible>
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
    // const props = defineProps({
    //     showSideBar: { type: Boolean, default: false },
    // })
    let showSideBar = ref(false)
    
    const showSearch = (flag: boolean) => {
        showSideBar.value = flag
    }
    defineExpose({
        showSearch
    })
    interface SearchBarEmits {
        getSearchList: (selectedList: Array<string>, bookName: string) => void
    }
    // defineEmits
    const emit = defineEmits(['getSearchList'])
    // let showSideBar = ref(false)
    let bookName = ref()
    let selectedSite = ref<Array<string>>([])
    const submit = () => {
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
<style>

.seacher-bar{
    opacity: 0.8;
    background-color: rgb(186, 206, 211);
}
</style>