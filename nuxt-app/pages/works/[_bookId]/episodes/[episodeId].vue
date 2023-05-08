<template>
    <TopBanner :downloadBtn="true" :searchBtn="true" @episodeDownload="episodeDownload"></TopBanner>
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
</template>
<script setup lang="ts">
import { EpisodeText } from '~~/composables/interfaceSet'
    // {[key: string]: any}
    const episodeTextData = ref<EpisodeText>({})
    const router = useRouter()
    const route = useRoute()
    const episodeDownload = async () => {
        const result = await $fetch('/api/getEpisodeFile', { method: 'POST', body: { bookId: route.params._bookId, episodeId: route.params.episodeId } })
        console.log('result======>', result)
        // debugger
        // const arrayBuffer = await result.arrayBuffer();
        // // 将文件数据转换为 Blob 对象
        // // const blob = result.blob();
        // const blob = new Blob([arrayBuffer], { type: 'text/html' })
        // // 创建链接并下载文件
        
        // const blob = new Blob([result], {
        //     type: 'text/html'
        // });
        // const link = document.createElement('a');
        // link.href = result
        // link.download = 'myfile.txt';
        // document.body.appendChild(link);
        // link.click();
    }
    onMounted(async () => {
        const result = await $fetch('/api/getEpisodeText', { method: 'POST', body: { bookId: route.params._bookId, episodeId: route.params.episodeId } })
        if(result && result.code === 200 && result.data){
            episodeTextData.value = result.data
        }
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
</style>