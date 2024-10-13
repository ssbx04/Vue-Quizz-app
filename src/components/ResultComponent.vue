<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['foundedQuestions','totalQuestions'])
</script>
<template>
    <h1>You founded {{ props.foundedQuestions }} questions in {{ props.foundedQuestions }}</h1>
</template>