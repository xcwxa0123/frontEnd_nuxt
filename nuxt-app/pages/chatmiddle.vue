<template>
    <div class="opacity-div">
        <Card class="back-card">
            <template #content>
                <div class="full-screen">
                    <InputText type="text" v-model="searchValue" />
                    <div class="btnGroup">
                        <Button class="ml10" label="发送" icon="pi pi-check" @click="searchFunc"/>
                        <Button class="ml10" label="清空" icon="pi pi-times" severity="secondary" @click="clearText"/>
                    </div>
                    <div>
                        <p>
                            {{ answer }}
                        </p>
                    </div>
                </div>
            </template>
        </Card>
    </div>

    <LoadingMask :loading="loading"></LoadingMask>
</template>
<script setup lang="ts">
    import { useToast } from "primevue/usetoast";
    const toast = useToast();
    // {[key: string]: any}
    const router = useRouter()
    let loading = ref(false)
    const searchValue = ref()
    const answer = ref()
    // onMounted(async () => {
    // })\
    const clearText = () => {
        searchValue.value = ''
    }
    const searchFunc = async () => {
        loading.value = true
        const msgData = {
            model: "gpt-3.5-turbo",
            messages: [
                {"role":"user","content": searchValue.value }
            ]
        }
        const startTime = new Date().getTime()
        const result = await $fetch('/api/getChatCompletions', { method: 'POST', body: { msgData } })
        const endTime = new Date().getTime()
        console.log('FrontAccessTime==========>', endTime - startTime)
        answer.value = result
        loading.value = false
    }
</script>
<style>
.full-screen{
    height: 100vw;
    width: 90vw;
}
.full-screen .p-inputtext{
    text-align: start;
    width: 100vh;
}
.ml10{
    margin-left: 10vh;
}
.btnGroup{
    display: inline;
}

@media screen and (max-width: 600px) {
    .full-screen .p-inputtext{
        text-align: start;
        width: 80%;
        display: block;
    }
    .full-screen{
        height: 200vw;
        width: 70vw;
    }
    .btnGroup{
        display: block;
        margin-top: 2rem;
    }
    .ml10{
        margin-left: 1rem;
    }
}
</style>