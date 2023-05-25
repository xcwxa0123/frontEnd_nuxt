<template>
    <TopBanner :downloadBtn="true" :searchBtn="true" @episodeDownload="episodeDownload" @showSearch="showSearch"></TopBanner>
    <SearchBar ref="searchBar"></SearchBar>
    <div class="opacity-div">
        <Card class="back-card">
            <template #title>{{ episodeTextData.file_name }}</template>
            <template #content>
                <Card class="text-content-card">
                    <template #content>
                        <ScrollPanel>
                            <p class="text-content-div">
                                {{ episodeTextData.file_content }}
                            </p>
                        </ScrollPanel>
                    </template>
                </Card>
            </template>
        </Card>
    </div>
    <LoadingMask :loading="loading"></LoadingMask>
</template>
<script setup lang="ts">
    import { EpisodeText } from '~~/composables/interfaceSet'
    import { useToast } from "primevue/usetoast";
    // {[key: string]: any}
    const episodeTextData = ref<EpisodeText>({} as EpisodeText)
    const route = useRoute()
    const toast = useToast();
    let loading = ref(false)
    
    const searchBar: Ref = ref()
    const showSearch = () => {
        searchBar.value.showSearch(true)
    }
    const episodeDownload = async () => {
        loading.value = true
        const result = await $fetch('/api/getEpisodeFile', { method: 'POST', body: { bookId: route.params._bookId, episodeId: route.params.episodeId }, responseType: 'blob' })
        // // 创建链接并下载文件
        if(result instanceof Blob){
            const blob = new Blob([result], {
                type: 'application/octet-stream'
            });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob)
            link.download = `${episodeTextData.value.file_name}.txt`;
            document.body.appendChild(link);
            link.click();
        } else {
            toast.add({ severity: 'info', summary: 'Info', detail: 'download fial', life: 3000 });
        }
        loading.value = false
    }
    onMounted(async () => {
        loading.value = true
        const result = await $fetch('/api/getEpisodeText', { method: 'POST', body: { bookId: route.params._bookId, episodeId: route.params.episodeId } })
        if(result && result.code === 200 && result.data){
            episodeTextData.value = result.data
        } else {
            toast.add({ severity: 'info', summary: 'Info', detail: result.msg || 'request fail', life: 3000 });
        }
        loading.value = false
    })
</script>
<style>

.text-content-div{
    text-align: start;
    padding-right: 1rem;
    white-space: pre-line;
}
.text-content-card .p-scrollpanel-wrapper{
    float: none;
}
.back-card .text-content-card {
    margin: auto 3.5rem;
}
@media screen and (max-width: 600px) {
    .back-card .text-content-card{
        margin: 0;
        margin-bottom: 1rem;
    }
}
</style>