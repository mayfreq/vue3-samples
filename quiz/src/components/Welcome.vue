<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name:"Welcome",
  setup(props,{emit}) {
    const startQuiz = () => {
      emit("startQuiz");
    };

    return {
      startQuiz,
    };
  },
});
</script>

<template>
  <div
    class="
      bg-gray-100
      container
      relative
      shadow-lg
      max-w-md
      rounded-lg
      p-5
      flex flex-col
    "
  >
    <span class="text-2xl font-bold self-center">Welcome To Quiz</span>
    <span class="text-1xl mt-5 self-center">Start when you are ready</span>
    <button
      class="bg-blue-600 rounded-lg text-white p-2 mt-10 self-end"
      @click="startQuiz"
    >
      Start Quiz
    </button>
  </div>
</template>