<template>
    <Toolbar class="m07">
        <template #start>
            START
        </template>
        <template #end>
            END
        </template>
    </Toolbar>
    <Card>
        <!-- <template #title> Simple Card </template> -->
        <template #content>
            <DataTable :value="titleList" tableStyle="min-width: 50rem" class="bgcolor m07">
                <Column field="book_title" header="title">
                    <template #body="scope">
                        <a href="javascript:void(0)" @click="()=>getPageDetail(scope.data.book_href)">{{ scope.data.book_title }}</a>
                    </template>
                </Column>
                <Column field="boot_auther" header="auther"></Column>
                <Column field="book_desc" header="desc"></Column>
            </DataTable>
        </template>
    </Card>

</template>
<script setup lang="ts">
    const titleList = ref()
    onMounted(async () => {
        const result = await $fetch('/api/getTitleList', { method: 'POST' })
        if(result && result.code === 200 && result.data){
            titleList.value = result.data
        }
    })
</script>
<script lang="ts">
export default {
    methods: {
        async getPageDetail(pageHref: string){
            this.$router.push(`${pageHref}`)
        }
    }
}
</script>
<style>
    body {
        font-family: var(--font-family);
        color: var(--text-color);
        background-color: var(--surface-ground);
        margin: 0;
        padding: 0;
        min-height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>