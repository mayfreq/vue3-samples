<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "Quiz",
  components: {},
  setup() {
    const questions = reactive([
      {
        question:
          "In any programming language, what is the most common way to iterate through an array?",
        correct_answer: "'For' loops",
        answers: [
          "'If' Statements",
          "'Do-while' loops",
          "'While' loops",
          "'For' loops",
        ],
      },
      {
        question: "What does GHz stand for?",
        correct_answer: "Gigahertz",
        answers: ["Gigahotz", "Gigahetz", "Gigahatz", "Gigahertz"],
      },
    ]);
    const questionIndex = ref(0);
    const options = ref([] as any[]);

    const checkAnswer = (answer: string, index: number) => {

      const refItem = options.value[index]

      if (questions[questionIndex.value].correct_answer === answer) {
        console.log(refItem)
        refItem.classList.add("option-correct");
        refItem.classList.remove("option-default");
      } else {
        refItem.classList.add("option-wrong");
        refItem.classList.remove("option-default");
      }
    };

    const addRefs = (element: any) => {
      if (element) {
        options.value.push(element);
      }
    };

    return {
      questions,
      questionIndex,
      checkAnswer,
      options,
      addRefs,
    };
  },
});
</script>


<template>
  <div
    class="
      bg-gray-100
      flex-none
      container
      relative
      shadow-lg
      max-w-md
      rounded-lg
      p-5
    "
  >
    <div class="flex justify-between">
      <!-- title and score -->
      <span>Quiz App</span>
      <div>
        <span>Score</span>
        <span>10</span>
      </div>
    </div>

    <!-- countdown -->
    <div class="mt-4 h-3 bg-white rounded-full">
      <div
        class="bg-blue-700 h-full rounded-full w-full"
        style="width: 70%"
      ></div>
    </div>

    <!-- serparator -->
    <div class="separator mt-3 bg-gray-400 w-full absolute left-0"></div>

    <!-- quiestion -->
    <div class="mt-7 font-bold">
      <span>{{ questions[questionIndex].question }}</span>
    </div>

    <!-- answers -->
    <div
      class="mt-3"
      v-for="(item, index) in questions[questionIndex].answers"
      :key="index"
    >
      <div
        class="
          rounded-lg
          border-2 border-blue-200
          p-2
          mb-3
          cursor-pointer
          option-default
        "
        @click="checkAnswer(item,index)"
        :ref="addRefs"
      >
        <div class="absolute right-8 hidden">+10</div>
        <span>{{ item }}</span>
      </div>
    </div>

    <!-- serparator -->
    <div class="separator mt-2 bg-gray-400 w-full absolute left-0"></div>

    <!-- progress state and next question-->
    <div class="mt-8 flex justify-between">
      <span>1/5 question</span>
      <button class="bg-blue-600 rounded-lg text-white p-2">
        Next Question
      </button>
    </div>
  </div>
</template>

<style scoped>
.separator {
  height: 2px;
}
</style>