<template>
    <TopBanner @showDetail="showDetail" @refreshBook="refreshBook" @showSearch="showSearch" @setMultipale="setMultipale" :searchBtn="true" :detailBtn="true" :refreshBtn="true" :multipleCheckBtn="true"></TopBanner>
    <SearchBar ref="searchBar"></SearchBar>
    <div class="opacity-div">
        <Card class="back-card right">
            <template #title>{{ bookFullData?.book_title }}</template>
            <template #subtitle>
                <div class="subtitle-box">
                    <span>{{ bookFullData?.author.author_name }}</span>
                    <span>{{ bookFullData?.publish_state == 1 ? '連載中': '完結済' }}&nbsp;&nbsp;&nbsp;&nbsp;{{ bookFullData?.number_of_episode }}</span>
                    <span>{{ bookFullData?.last_time }}</span>
                </div>
            </template>
            <template #content>
                <template v-for="item in episodeFullData">
                    <Card class="main-card">
                        <template #title>{{ item && item.main_title }}</template>
                        <template #content>
                            <template v-for="episodeItem in item.episodeDetail">
                                <Card class="sub-card anime-div" @click="toEpisodeText(item.book_id, episodeItem.episode_id)">
                                    <template #content>
                                        <div class="text-content">
                                            <span>{{ episodeItem && episodeItem.sub_title }}</span>
                                            <span>{{ episodeItem && episodeItem.refresh_time }}</span>
                                        </div>
                                    </template>
                                </Card>
                            </template>
                        </template>
                    </Card>
                </template>
            </template>
        </Card>
    </div>
        
    <Card class="back-card text-card">
        <template #content>
            <Card class="main-card">
                <template #content>
                    <Card>
                        <template #content>
                            <ScrollPanel class="text-panel">
                                <p class="text-div">
                                    {{ bookFullData?.full_desc }}
                                </p>
                            </ScrollPanel>
                        </template>
                    </Card>
                </template>
            </Card>
        </template>
    </Card>
    <LoadingMask :loading="loading"></LoadingMask>
</template>
<script setup lang="ts">
    import { Book, EpisodeObj } from '~~/composables/interfaceSet'
    import { useToast } from "primevue/usetoast";
    const route = useRoute()
    const router = useRouter()
    const showDetailFlag = ref(false)
    const episodeFullData = ref<Array<EpisodeObj>>()
    const bookFullData = ref<Book>()
    const toast = useToast();
    let loading = ref(false)
    const showDetail = () => {
        showDetailFlag.value = !showDetailFlag.value
        const target: HTMLElement = document.querySelector('.text-card')!
        target.style.opacity = showDetailFlag.value ? '1' : '0'
        target.style.zIndex = showDetailFlag.value ? '1' : '-1'
    }
    const searchBar: Ref = ref()
    const showSearch = () => {
        searchBar.value.showSearch(true)
    }
    const uploadEpisode = async () => {
        const result = await $fetch('/api/uploadEpisode', { method: 'POST', body: { bookId: route.params.bookId } })
        if(result && result.code === 200){
            toast.add({ severity: 'success', summary: 'Success', detail: result.data && result.data.msg, life: 3000 });
        } else {
            toast.add({ severity: 'info', summary: 'Info', detail: result.msg || 'request fail', life: 3000 });
        }
    }
    const setMultipale = async () => {
        toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    }
    const toEpisodeText = (book_id: string, episode_id: string) => {
        router.push(`/works/${book_id}/episodes/${episode_id}`)
    }
    const refreshBook = async () => {
        loading.value = true
        await uploadEpisode()
        await getPageDetail()
        loading.value = false
    }
    const getPageDetail = async () => {
        const result = await $fetch('/api/getPageDetail', { method: 'POST', body: { bookId: route.params.bookId } })
        if(result && result.code === 200 && result.data && result.data.episodeResult){
            const episodeData: Array<{ [key: string]: string }> = result.data.episodeResult
            bookFullData.value = result.data.bookResult
            let currentMainTitle: string = ''
            let currentEpisodeObj: EpisodeObj
            const episodeList: Array<EpisodeObj> = []
            episodeData.forEach((item, index) => {
                // 新的大章
                if(item.main_title != currentMainTitle){
                    if(currentEpisodeObj){
                        episodeList.push(currentEpisodeObj)
                    }
                    currentEpisodeObj = { main_title: '', book_id: '', episodeDetail: [] }
                    currentMainTitle = item.main_title
                    currentEpisodeObj.main_title = item.main_title
                    currentEpisodeObj.book_id = item.book
                    currentEpisodeObj.episodeDetail = [
                        {
                            episode_id: item.episode_id,
                            refresh_time: item.refresh_time,
                            sub_title: item.sub_title
                        }
                    ]
                } else {
                    currentEpisodeObj.episodeDetail.push(
                        {
                            episode_id: item.episode_id,
                            refresh_time: item.refresh_time,
                            sub_title: item.sub_title
                        }
                    )
                }
                // 把最后一个放进去
                if(index == episodeData.length - 1){
                    episodeList.push(currentEpisodeObj)
                }
            });
            episodeFullData.value = episodeList
        } else {
            toast.add({ severity: 'info', summary: 'Info', detail: result.msg || 'request fail', life: 3000 });
        }
    }
    onMounted(async () => {
        await getPageDetail()
    })
</script>
<style>
.right{
    flex: 1;
    display: block;
}
.right .p-card .p-card-title{
    font-size: 1.3rem;
    font-weight: 500;
}
.p-card-content .main-card{
    background-color: rgba(178, 221, 231, 0.7);
    box-shadow: 0.3125rem -0.1875rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.2), 
                -0.00625rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.14), 
                0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
    margin: 1.25rem 3.75rem 1.25rem 3.75rem;
}
.sub-card{
    margin-bottom: 0.5rem;
}
.sub-card .p-card-body{
    padding: 0;
}
.sub-card .p-card .p-card-footer{
    margin: 0;
}
.text-content{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.text-content span:first-child{
    grid-column: 2/5;
}
.text-content span:last-child{
    grid-column: 5;
    font-size: 0.8rem;
    justify-self: flex-end;
    margin-right: 0.8rem;
    align-self: flex-end;
}
.text-card{
    display: block;
    position: fixed;
    top: 4rem;
    left: 5rem;
    width: 30%;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease, z-index 0.3s ease;
}
.text-card .p-card-content .main-card{
    margin: 0;
}
.text-div{
    text-align: start;
    padding-right: 1rem;
    white-space: pre-line;
    /* text-indent: 1rem; */
}
.main-card .p-fieldset .p-fieldset-legend{
    text-align: start;
}
.text-panel{
    height: 50vh
}
</style>