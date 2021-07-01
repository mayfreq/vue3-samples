<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { get, IQuestion } from "../util/data";

export default defineComponent({
  name: "Quiz",
  components: {},
  setup() {
    const btnElement = ref<HTMLElement | null>(null);
    let questions = reactive([] as IQuestion[]);
    const questionIndex = ref(0);
    const answers = ref([] as any[]);
    const score = ref(0);
    let optionStatus = true;

    onMounted(async () => {
      await get().then((data) =>
        data.forEach((item) =>
          questions.push({
            question: item.question,
            correct_answer: item.correct_answer,
            answers: item.answers,
          })
        )
      );
    });

    const checkAnswer = (answer: string, index: number) => {
      if (!optionStatus) return;
      const refItem = answers.value[index];
      if (questions[questionIndex.value].correct_answer == answer) {
        refItem.classList.add("option-correct");
        refItem.classList.remove("option-default");
        score.value += 10;
        optionStatus = false;
      } else {
        refItem.classList.add("option-wrong");
        refItem.classList.remove("option-default");
        optionStatus = false;
      }

      answers.value
        .filter((anwser, i) => i != index)
        .forEach((answer) => answer.classList.add("disabled"));
    };

    const addRefs = (element: any) => {
      if (element) {
        answers.value.push(element);
      }
    };
    const nextQuestion = () => {
      questionIndex.value++;
      if (questionIndex.value === 9) {
        if (btnElement.value) {
          btnElement.value.innerText="Finish"
        }
      }
      clear()
    };

    const clear = () => {
      optionStatus = true;
      answers.value.forEach((item) => {
        item.classList.remove("option-correct");
        item.classList.remove("option-wrong");
        item.classList.remove("disabled");
        item.classList.add("option-default");
      });
      answers.value.length = 0;
    };

    return {
      questions,
      questionIndex,
      checkAnswer,
      answers,
      addRefs,
      nextQuestion,
      score,
      btnElement,
    };
  },
});
</script>


<template>
  <div
    v-if="questions.length != 0"
    class="
      bg-gray-100
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
        <span>Score </span>
        <span>{{ score   }}</span>
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
      <span v-html="questions[questionIndex].question"></span>
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
        @click="checkAnswer(item, index)"
        :ref="addRefs"
      >
        <div class="absolute right-8 hidden">+10</div>
        <span v-html="item"></span>
      </div>
    </div>

    <!-- serparator -->
    <div class="separator mt-2 bg-gray-400 w-full absolute left-0"></div>

    <!-- progress state and next question-->
    <div class="mt-8 flex justify-between">
      <span>{{ questionIndex + 1 }}/10 question</span>
      <button
        class="bg-blue-600 rounded-lg text-white p-2"
        ref="btnElement"
        @click="nextQuestion"
      >
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