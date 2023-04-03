<template>
    <Card>
        <!-- <template #title> Simple Card </template> -->
        <template #content>
            <DataTable :value="epiList" tableStyle="min-width: 50rem" class="bgcolor m07">
                <Column field="mian_title" header="title"></Column>
                <Column>
                    <template #body="scope">
                        <DataTable :value="scope.data.episode_list" tableStyle="min-width: 50rem" class="bgcolor m07">
                            <Column header="subepi_title">
                                <template #body="rowScope">
                                    <!-- <a href="javascript:void(0)" @click="()=>getPageDetail(scope.data.book_href)">{{ scope.data.book_title }}</a> -->
                                    <a href="javascript:void(0)" @click="">{{ rowScope.data.episode_title }}</a>
                                </template>
                            </Column>
                            <Column field="refresh_time" header="last refresh"></Column>
                        </DataTable>
                    </template>
                </Column>
            </DataTable>
        </template>
    </Card>
</template>
<script setup lang="ts">
    const route = useRoute()
    const epiList = ref()
    onMounted(async () => {
        const result = await $fetch('/api/getPageDetail', { method: 'POST', body: { pageHref: `/works/${route.params.bookId}` } })
        console.log('res=====>', result)
        epiList.value = result.data.data.episode_data
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