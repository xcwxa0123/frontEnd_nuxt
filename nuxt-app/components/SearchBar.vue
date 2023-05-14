<template>
    <Sidebar v-model:visible="showSideBar" position="top" class="seacher-bar" update:visible>
        <template #header>
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="bookName" placeholder="" class="p-inputtext-sm"/>
            </span>
            <MultiSelect v-model="selectedSite" :options="siteList" optionLabel="label" optionValue="value"/>
            <Button label="Submit" @click="submit"/>
        </template>
    </Sidebar>
</template>
<script setup lang="ts">
    const router = useRouter()
    let showSideBar = ref(false)
    const showSearch = (flag: boolean) => {
        showSideBar.value = flag
    }
    let bookName = ref()
    let selectedSite = ref<Array<string>>([])
    // const emit = defineEmits(['getSearchList'])
    const submit = async () => {
        router.push({ path: '/searchedList', query: { searchName: bookName.value, pageIndex: 1 } })
        showSideBar.value = false
        // emit('getSearchList', selectedSite.value, bookName.value)
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
    defineExpose({
        showSearch
    })
</script>
<style>
.seacher-bar{
    opacity: 0.8;
    background-color: rgb(186, 206, 211);
}
.seacher-bar .p-sidebar-header{
    justify-content: space-between;
}
.seacher-bar .p-inputtext.p-inputtext-sm, .seacher-bar .p-multiselect .p-multiselect-label{
    padding: 0.3rem 0.3rem;
    padding-left: 2rem;
}
.seacher-bar .p-multiselect{
    margin: 0 2rem;
}
.seacher-bar .p-button{
    padding: 0.3rem 1.5rem;
    background: rgba(129, 164, 221, 0.9);
    border: 1px solid rgba(129, 164, 221, 0.9);
}
.seacher-bar .p-sidebar-content{
    display: none;
}
.seacher-bar.p-sidebar.p-component{
    height: auto;
}
div:has(.seacher-bar) ~ .p-multiselect-panel .p-multiselect-items .p-multiselect-item, div:has(.seacher-bar) ~ .p-multiselect-panel .p-multiselect-header{
    padding: 0.3rem 1.5rem!important;
}
</style>