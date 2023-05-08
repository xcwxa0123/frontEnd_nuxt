<template>
    <TopBanner :searchBtn="true"></TopBanner>
    <div class="opacity-div">
        <Card class="back-card">
            <template #content>
                <template v-for="item in titleList">
                    <Card class="list-card anime-div" @click="getPageDetail(item.book_id)">
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

</template>
<script setup lang="ts">
    import { Book } from '~~/composables/interfaceSet'
    // {[key: string]: any}
    const titleList = ref<Array<Book>>()
    const router = useRouter()
    const getPageDetail = async (book_id: string) => {
        router.push(`works/${book_id}`)
    }
    onMounted(async () => {
        const result = await $fetch('/api/getTitleList', { method: 'POST' })
        console.log('result======>', result.data)
        if(result && result.code === 200 && result.data){
            titleList.value = result.data
        }
    })
</script>
<style>
    .list-card{
        background-color: var(--bg-shiro);
        box-shadow: 0.3125rem -0.1875rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.2), 
                    -0.00625rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.14), 
                    0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
        margin: 1.25rem 3.75rem 1.25rem 3.75rem;
        flex: 1;
    }
</style>