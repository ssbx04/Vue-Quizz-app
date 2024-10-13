<script setup>
    import { defineProps,defineEmits } from 'vue';
    const props = defineProps(['question'])
    const emits = defineEmits(['selectEmit'])
    const selectedOption = (selectState)=>{
        console.log('Is correct sent: ', selectState)
        emits("selectEmit",selectState)
    }
</script>
<template>
    <div class="questions-container">
        <span class="question-text">{{ props.question.text }}</span>
        <div class="answers">
            <div
             v-for="opt in props.question.options" 
             :key="opt.id" 
             class="answer"
             @click="selectedOption(opt.isCorrect)"
            >
                <span class="answer-order">{{ opt.label }}</span>
                <span class="answer-proposal">{{ opt.text }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .questions-container{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .question-text{
        font-size: 30px;
    }
    .answers{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .answer{
        width: 100%;
        display: flex;
        gap: 0;
    }
    .answer-order{
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: bisque;
        font-size: 30px;
    }
    .answer-proposal{
        width: 100%;
        height: 60px;
        display: flex;
        padding: 0px 10px;
        align-items: center;
        background-color: rgb(241, 241, 241);
        font-size: 30px;
    }
</style>