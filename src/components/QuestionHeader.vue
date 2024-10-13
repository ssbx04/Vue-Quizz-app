<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['questionStatus','bgFill'])
</script>

<template>
    <div class="label-input">
        <label>Question {{ props.questionStatus }}</label>
        <div class="bar">
            <div :style="{width: props.bgFill}" class="completion"></div>
        </div>
    </div>
</template>
<style scoped>
    .label-input{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .label-input label{
        font-size: 25px;
    }
    .bar{
        width: 300px;
        height: 40px;
        border: 2px solid bisque;
    }
    .completion{
        height: 100%;
        background-color: bisque;
    }
</style>