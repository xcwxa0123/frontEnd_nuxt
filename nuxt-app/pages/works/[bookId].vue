<template>
    <Toolbar class="back-card">
        <template #start>
            <!-- START -->
            <!-- search() -->
        </template>
        <template #end>
            <!-- END -->
        </template>
    </Toolbar>
    <div class="opacity-div">
        <Card class="back-card left">
            <template #content>
                <div class="icon-box">
                    <div class="icon-bg"><i class="pi pi-bars"></i></div>
                    <div class="icon-bg"><i class="pi pi-sync"></i></div>
                </div>
            </template>
        </Card>
        <Card class="back-card right">
            <template #content>
                <template v-for="item in episodeFullData">
                    <!-- <Card class="list_card" @click="getPageDetail(item.book_id)"> -->
                    <Card class="main_card">
                        <template #title>{{ item && item.main_title }}</template>
                        <!-- <template #title>{{ item.book_title }}</template> -->
                        <!-- <template #subtitle>{{ item.author.author_name }}</template> -->
                        <template #content>
                            <template v-for="episodeItem in item.episodeDetail">
                                <Card class="sub-card">
                                    <template #content>
                                        <p>{{ episodeItem && episodeItem.sub_title }}</p>
                                    </template>
                                    <template #footer>
                                        2023/4/27 183话
                                    </template>
                                </Card>
                            </template>
                        </template>
                        <template #footer>
                            2023/4/27 183话
                        </template>
                    </Card>
                </template>
            </template>
        </Card>
    </div>
</template>
<script setup lang="ts">
    const route = useRoute()
    interface EpisodeDetail {
        episode_id: string,
        refresh_time: string,
        sub_title: string
    }
    interface EpisodeObj {
        main_title: string,
        book_id: string,
        episodeDetail: Array<EpisodeDetail>
    }
    const episodeFullData = ref<Array<EpisodeObj>>()
    episodeFullData.value = []
    onMounted(async () => {
        const result = await $fetch('/api/getPageDetail', { method: 'POST', body: { bookId: route.params.bookId } })
        if(result && result.code === 200 && result.data && result.data.episodeResult){
            const episodeData: Array<{ [key: string]: string }> = result.data.episodeResult
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
                    // 把最后一个放进去
                    if(index == episodeData.length - 1){
                        episodeList.push(currentEpisodeObj)
                    }
                }
            });
            console.log('episodeList========>', episodeList)
            episodeFullData.value = episodeList
        }
    })
</script>
<script lang="ts">
export default {
    data() {
        return {
            // epiList: [] 
        }
    },
    methods: {
    }
}
</script>
<style>
body{
    background: var(--bg-ao);
    font: "Rounded Mplus 1c";
}
.back-card{
    background-color: var(--bg-haiao);
    box-shadow: 0.3125rem -0.1875rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.2), 
                -0.00625rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.14), 
                0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
    margin: 1.25rem 3.75rem 1.25rem 3.75rem;
}
.p-card *{
    text-align: center;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
}
.p-card .p-card-footer {
    padding: 0;
    margin: 1rem 0;
    text-align: end;
    position: relative;
    right: 1rem;
}
/* .back-card .p-card:hover{
    cursor: pointer;
    position: relative;
    left: 0.3125rem;
    bottom: -0.1875rem;
    box-shadow: 0.3125rem -0.1875rem 0.1875rem 0.0625rem rgb(0, 44, 54, 0.5), 
                -0.00625rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.14), 
                0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
    background-color: rgba(178, 221, 231, 0.7);
} */
/* .back-card .p-card:active{
    cursor: pointer;
    position: relative;
    left: 0.625rem;
    bottom: 0rem;
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.7);
    transition: background-color 0.2s, box-shadow 0.2s;
    animation-timing-function: linear;
} */
.p-card .p-card-content{
    padding: 0;
    font-weight: 500;
    font-size: 1.1rem;
}
.p-card .p-card-subtitle{
    font-weight: 900;
}
.p-card .p-card-title{
    font-size: 1.4rem;
}
.p-card-content p {
    padding-left: 1rem;
    text-align: left;
}
.p-card .p-card-body { padding-bottom: 0.5rem; }
.p-card-content .main_card{
    background-color: rgba(178, 221, 231, 0.7);
    box-shadow: 0.3125rem -0.1875rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.2), 
                -0.00625rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.14), 
                0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
    margin: 1.25rem 3.75rem 1.25rem 3.75rem;
    flex: 1;
}
.opacity-div{
    display: flex;
}
.back-div{
    background-color: var(--bg-haiao);
    margin: 1.25rem 1rem 1.25rem 3.75rem;
    flex: 1;
    display: block;
    margin-right: 1rem;
}
.left{
    flex: 1;
    display: block;
    margin-right: 1rem;
}
.left .p-card-body {
    padding: 0.5rem;
}
.right{
    flex: 29;
    display: block;
    margin-left: 0;
    width: 90vh;
}
.icon-box{
    position: fixed;
}
.icon-bg{
    background-color: rgba(178, 221, 231, 0.7);
    box-shadow: 0rem 0rem 0.1875rem 0.1875rem rgba(0, 0, 0, 0.12), 
                0rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.1), 
                0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
    padding: 0.5rem 0.8rem;
    margin: 1rem 0;
    border-radius: 0.375rem;
}
.sub-card{
    /* background-color: var(--shiro); */
}
.sub-card .p-card .p-card-footer{
    margin: 0;
}
</style>