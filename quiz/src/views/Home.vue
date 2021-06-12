<script lang="ts">
import { defineComponent } from "vue";
import Quiz from "../components/Quiz.vue"

export default defineComponent({
  name: "App",
  components:{
    Quiz,
  }
});
</script>

<template>
  <main class="flex h-screen items-center justify-center bg-white">
    <Quiz />
  </main>
</template>