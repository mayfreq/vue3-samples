<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Result",
  props: {
    score: Number,
  },
  setup(props,{emit}) {

    const restartQuiz = () => {
      emit("restartQuiz")
    }

    return {
      restartQuiz
    }
  },
});
</script>

<template>
  <div class="bg-gray-100 container relative shadow-lg max-w-md rounded-lg p-5 flex flex-col">
    <span class="text-2xl font-bold self-center">Your Score {{score}}</span>
    <span class="text-1xl mt-5 self-center">if you want play again, just press Restart Quiz :)</span>
    <button
      class="bg-blue-600 rounded-lg text-white p-2 mt-10 self-end"
      @click="restartQuiz"
    >Restart Quiz</button>
  </div>
</template>