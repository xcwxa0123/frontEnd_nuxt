<template>
    <h2>{{  $route.params.bookId  }}</h2>
    <Button label="Submit" @click="getTitleList">点一下试试{{ btnText }}</Button>
</template>
<script setup lang="ts">
    let btnText = ref()
</script>
<script lang="ts">
export default {
    data() {
        return {
            btnText1: '123123',    
        }
    },
    methods: {
        async getTitleList(){
            const result = await $fetch('/api/getTitleList')
            console.log('result=====>', result)
        }
    }
}
</script>