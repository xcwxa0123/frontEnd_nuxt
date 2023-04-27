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
    <Card class="back-card">
        <template #content>
            <template v-for="item in titleList">
                <Card class="list_card" @click="getPageDetail(item.book_id)">
                    <template #title>{{ item.book_title }}</template>
                    <template #subtitle>{{ item.author_id.author_name }}</template>
                    <template #content>
                        <p>{{ item.book_desc }}</p>
                    </template>
                    <template #footer>
                        2023/4/27 183话
                    </template>
                </Card>
            </template>
        </template>
    </Card>

</template>
<script setup lang="ts">
    const titleList = ref()
    titleList.value = []
    onMounted(async () => {
        const result = await $fetch('/api/getTitleList', { method: 'POST' })
        console.log('result======>', result.data)
        if(result && result.code === 200 && result.data){
            titleList.value = result.data
        }
    })
</script>
<script lang="ts">
export default {
    methods: {
        async getPageDetail(book_id: string){
            // this.$router.push(`${pageHref}`)
            console.log('getPageDetail=========>', book_id);
        }
    }
}
</script>
<style>
    /* body {
        font-family: var(--font-family);
        color: var(--text-color);
        background-color: var(--surface-ground);
        margin: 0;
        padding: 0;
        min-height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    } */
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
    .back-card .p-card:hover{
        cursor: pointer;
        position: relative;
        /* box-shadow: none; */
        left: 0.3125rem;
        bottom: -0.1875rem;
        box-shadow: 0.3125rem -0.1875rem 0.1875rem 0.0625rem rgb(0, 44, 54, 0.5), 
                    -0.00625rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.14), 
                    0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
        background-color: rgba(178, 221, 231, 0.7);
    }
    .back-card .p-card:active{
        cursor: pointer;
        position: relative;
        /* box-shadow: none; */
        left: 0.625rem;
        bottom: 0rem;
        box-shadow: none;
        background-color: rgba(255, 255, 255, 0.7);
        transition: background-color 0.2s, box-shadow 0.2s;
        animation-timing-function: linear;
    }
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
    .p-card-content .list_card{
        background-color: var(--bg-shiro);
        box-shadow: 0.3125rem -0.1875rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.2), 
                    -0.00625rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.14), 
                    0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
        margin: 1.25rem 3.75rem 1.25rem 3.75rem;
        flex: 1;
    }
</style>