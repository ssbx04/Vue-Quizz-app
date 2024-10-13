<script setup>

  import q  from '../data/quizzes.json'
  import { ref,watch } from 'vue';
  import Card from '../components/card-item.vue'
  const search = ref('')
  const quizzes = ref(q);
  watch(search,()=>{
    quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })
</script>
<template>
  <div>
    <header>
      <h1>Quizzes</h1>
      <input v-model="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" class="card"/>
    </div>
  </div>
</template>

<style scoped>
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
    outline: none;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

</style>