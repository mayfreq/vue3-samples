<script lang="ts">
import { defineComponent } from "vue";
import Quiz from "../components/Quiz.vue";
import Welcome from "../components/Welcome.vue";

export default defineComponent({
  name: "App",
  components: {
    Quiz,
    Welcome,
  },
});
</script>

<template>
  <main class="flex h-screen items-center justify-center bg-white">
    <Welcome v-if="true"/>
    <Quiz v-if="false" />
  </main>
</template>