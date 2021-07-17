<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Quiz from "../components/Quiz.vue";
import Welcome from "../components/Welcome.vue";
import Result from "../components/Result.vue";
import Loading from "../components/Loading.vue";

export default defineComponent({
  name: "App",
  components: {
    Quiz,
    Welcome,
    Result,
    Loading,
  },
  setup() {
    const score = ref<number>(0);
    const isVisibleResult = ref<boolean>(false);
    const isVisibleQuiz = ref<boolean>(false);
    const isVisibleWelcome = ref<boolean>(true);

    const goResult = (resultScore: number) => {
      score.value = resultScore;
      isVisibleResult.value = true;
      isVisibleQuiz.value = false;
    }

    const startQuiz = () => {
      isVisibleWelcome.value = false;
      isVisibleQuiz.value = true;
    }

    const restartQuiz = () => {
      isVisibleResult.value = false;
      isVisibleQuiz.value = true;
    }

    return {
      goResult,
      startQuiz,
      restartQuiz,
      score,
      isVisibleResult,
      isVisibleQuiz,
      isVisibleWelcome
    }
  }
});
</script>

<template>
  <main class="flex h-screen items-center justify-center bg-white">
    <Welcome v-if="isVisibleWelcome" @startQuiz="startQuiz" />
    <Loading v-if="false" />
    <Quiz v-show="isVisibleQuiz" @goResult="goResult" />
    <Result v-if="isVisibleResult" :score="score" @restartQuiz="restartQuiz" />
  </main>
</template>