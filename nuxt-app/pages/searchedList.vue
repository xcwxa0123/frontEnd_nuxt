<template>
    <TopBanner :searchBtn="true" @showSearch="showSearch"></TopBanner>
    <SearchBar ref="searchBar"></SearchBar>
    <div class="opacity-div">
        <Card class="back-card">
            <template #content>
                <template v-for="item in titleList">
                    <Card class="list-card anime-div" @click="getPageDetail(item)">
                        <template #title>{{ item.book_title }}</template>
                        <template #subtitle>
                            <div class="subtitle-box">
                                <span>{{ item.author.author_name }}</span>
                                <span>{{ item.publish_state == 1 ? '連載中': '完結済' }}&nbsp;&nbsp;&nbsp;&nbsp;{{ item.number_of_episode }}</span>
                                <span>{{ item.last_time }}</span>
                            </div>
                        </template>
                        <template #content>
                            <p>{{ item.book_desc }}</p>
                        </template>
                    </Card>
                </template>
            </template>
        </Card>
    </div>
    
    <LoadingMask :loading="loading"></LoadingMask>
</template>
<script setup lang="ts">
    import { watch } from 'vue'
    import { Book } from '~~/composables/interfaceSet'
    import { useToast } from "primevue/usetoast";
    const toast = useToast();
    // {[key: string]: any}
    const titleList = ref<Array<Book>>()
    const router = useRouter()
    const route = useRoute()
    let loading = ref(false)
    watch(route, ()=>{
        if(titleList.value) {
            getSearchedList()
        }
    })
    const getPageDetail = async (bookData: Book) => {
        loading.value = true
        const result = await $fetch('/api/getSearchedBook', { method: 'POST', body: { bookData: bookData } })
        if(result && result.code === 200){
            router.push(`works/${bookData.book_id}`)
        } else {
            toast.add({ severity: 'info', summary: 'Info', detail: result.msg || 'request fail', life: 3000 });
        }
        loading.value = false
    }
    const searchBar: Ref = ref()
    const showSearch = () => {
        searchBar.value.showSearch(true)
    }
    const getSearchedList = async () => {
        loading.value = true
        const result = await $fetch('/api/getSearchedList', { method: 'POST', body: { searchName: route.query.searchName, pageIndex: route.query.pageIndex } })
        if(result && result.code === 200 && result.data){
            titleList.value = result.data
            toast.add({ severity: 'success', summary: 'Success', detail: result.msg || 'request success', life: 3000 });
        } else {
            toast.add({ severity: 'info', summary: 'Info', detail: result.msg || 'request fail', life: 3000 });
        }
        loading.value = false

    }
    onMounted(async () => {
        loading.value = true
        await getSearchedList()
        loading.value = false
    })
</script>