<template>
    <Toolbar class="back-card top">
        <template #start>
            <div class="icon-box">
                <div class="icon-bg anime-div" v-tooltip="'search'"><i class="pi pi-search"></i></div>
                <div class="icon-bg anime-div" v-tooltip="'detail'"><i class="pi pi-bars"></i></div>
                <div class="icon-bg anime-div" v-tooltip="'refresh'"><i class="pi pi-sync"></i></div>
                <div class="icon-bg anime-div" v-tooltip="'download'"><i class="pi pi-download"></i></div>
                <div class="icon-bg anime-div" v-tooltip="'multiple check'"><i class="pi pi-check-circle"></i></div>
            </div>
        </template>
    </Toolbar>
</template>

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
</style>