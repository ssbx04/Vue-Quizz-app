<script setup>
  import { useRouter } from 'vue-router';
    import { defineProps } from 'vue';
    const props = defineProps(['quiz']);
    
  const router = useRouter();
  const linkRedirect = () =>{
    router.push(`/quiz/${props.quiz.id}`)
  }
</script>
<template>
    <div @click="linkRedirect" class="card">
        <img :src="props.quiz.img" alt="">
        <div class="card-text">
          <h2>{{ props.quiz.name }}</h2>
          <p>{{ props.quiz.questions.length }} questions</p>
        </div>
    </div>
</template>
<style scoped>
    .card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: 190px;
    margin: 0
  }

  .card .card-text {
    padding: 0 5px
  }

  .card .card-text h2 {
    font-weight: bold;
  }
</style>