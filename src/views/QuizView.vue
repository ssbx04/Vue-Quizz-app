<script setup>
    import { useRoute } from 'vue-router';
    import { computed, ref } from 'vue';
    import QuestionComponent from '@/components/QuestionComponent.vue';
    import QuestionHeader from '@/components/QuestionHeader.vue';
    import quizzes from '../data/quizzes.json'
    import ResultComponent from '@/components/ResultComponent.vue';
    const route = useRoute()
    const quizId = parseInt(route.params.id)
    const quiz = quizzes.find(q => q.id === quizId)
    const currentQuestionIndex = ref(0)
    const questionStatus = computed(()=>`${currentQuestionIndex.value} / ${quiz.questions.length}`)
    const bgFill = computed(()=>`${((currentQuestionIndex.value) / (quiz.questions.length)) * 100}%`)
    const foundAnswers = ref(0);
    const updateEmitted = (selectState)=>{
        currentQuestionIndex.value = currentQuestionIndex.value + 1
        if(selectState)
            foundAnswers.value = foundAnswers.value + 1
    }
    const endedGame = computed(()=>currentQuestionIndex.value >= quizzes.length)
    
</script>
<template>
    <div class="main-container">
        <QuestionHeader :questionStatus="questionStatus" :bgFill="bgFill" />
        <QuestionComponent v-if="!endedGame" :question = "quiz.questions[currentQuestionIndex]" @selectEmit="updateEmitted" />
        <ResultComponent v-else :foundedQuestions="foundAnswers" :totalQuestions = "quiz.questions" />
    </div>
</template>
<style scoped>
    .main-container{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>