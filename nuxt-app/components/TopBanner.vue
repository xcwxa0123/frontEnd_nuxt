<template>
    <Toolbar class="back-card top">
        <template #start>
            <div class="icon-box">
                <div class="icon-bg anime-div" v-tooltip="'search'" v-if="props.searchBtn" @click="(event: MouseEvent)=>bannerClick(event, 'search')"><i class="pi pi-search"></i></div>
                <div class="icon-bg anime-div" v-tooltip="'detail'" v-if="props.detailBtn" @click="(event: MouseEvent)=>bannerClick(event, 'detail')"><i class="pi pi-bars"></i></div>
                <div class="icon-bg anime-div" v-tooltip="'refresh'" v-if="props.refreshBtn" @click="(event: MouseEvent)=>bannerClick(event, 'refresh')"><i class="pi pi-sync"></i></div>
                <div class="icon-bg anime-div" v-tooltip="'download'" v-if="props.downloadBtn" @click="(event: MouseEvent)=>bannerClick(event, 'download')"><i class="pi pi-download"></i></div>
                <div class="icon-bg anime-div" v-tooltip="'multipleCheck'" v-if="props.multipleCheckBtn" @click="(event: MouseEvent)=>bannerClick(event, 'multipleCheck')"><i class="pi pi-check-circle"></i></div>
            </div>
        </template>
    </Toolbar>
</template>

<script setup lang="ts">
    import { myHTMLElement } from '~~/composables/interfaceSet'
    const props = defineProps({
        searchBtn: { type: Boolean, default: false },
        detailBtn: { type: Boolean, default: false },
        refreshBtn: { type: Boolean, default: false },
        downloadBtn: { type: Boolean, default: false },
        multipleCheckBtn: { type: Boolean, default: false },
    })
    const emit = defineEmits({
        showSearch: Function,
        showDetail: Function,
        refreshBook: Function,
        episodeDownload: Function,
        setMultipale: Function,
        
    })
    const bannerClick = (event: MouseEvent, tag: string) => {
        const target: myHTMLElement = event.target as myHTMLElement
        if(target.tagName.toLowerCase() === 'i'){
            target.parentElement?.click()
        } else {
            switch (tag) {
                case 'search': emit('showSearch'); break;
                case 'detail': emit('showDetail'); break;
                case 'refresh': emit('refreshBook'); break;
                case 'download': emit('episodeDownload'); break;
                case 'multipleCheck': emit('setMultipale'); break;
            }
            // if(target.isClicked){
            //     cancelSpin(target)
            // } else {
            //     target.isClicked = true
            //     spinDom(target)
            // }
        }
    }
    // const spinDom = (target: myHTMLElement) => {
    //     target.style.animation = 'spinMove 1s forwards'
    //     target.style.animationTimingFunction  = 'ease-in-out'
    //     moveTop(target.nextElementSibling as myHTMLElement)
    // }
    // const cancelSpin = (target: myHTMLElement) => {

    // }
    // const moveTop = (target: myHTMLElement) => {
    //     target.style.animation = 'moveTop 0.3s forwards'
    //     target.style.animationTimingFunction  = 'ease-in-out'
        
    // }
</script>

<style>
.top{
    position: fixed;
    padding: 0;
    gap: 0;
}

.icon-bg{
    background-color: rgba(178, 221, 231, 0.7);
    box-shadow: 0rem 0rem 0.1875rem 0.1875rem rgba(0, 0, 0, 0.12), 
                0rem 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.1), 
                0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.12);
    padding: 0.5rem 0.8rem;
    margin: 0.5rem;
    border-radius: 0.375rem;
    display: block;
}
@keyframes spinMove {
    from { transform: translateX(0); }
    50% { transform: translateX(4rem); width: 2.7rem; margin-top: 0 }
    75% { width: 35rem; text-align: center; position: fixed; }
    to { transform: translateX(4rem); width: 35rem; text-align: center; opacity: 0; position: fixed; margin-top: 0 }
}
@keyframes moveTop {
    from { transform: translateY(0); position: static; }
    to { transform: translateY(-2.9rem); position: relative; }
}

@media screen and (max-width: 600px) {
    .icon-bg{
        padding: 0.2rem 0.5rem;
    }
    .pi{
        font-size: 0.8rem;
    }
}
</style>