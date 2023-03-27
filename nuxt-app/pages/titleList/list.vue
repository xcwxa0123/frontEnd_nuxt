<template>
    <h2>到里面来了</h2>
    <Button label="Submit" @click="getTitleList">点一下试试{{ btnText }}</Button>
</template>
<script setup>
    let btnText = ref()
</script>
<script>
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