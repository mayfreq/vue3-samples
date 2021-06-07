<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <main class="flex h-screen items-center justify-center bg-white">
    <!-- quiz container -->
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
      <!-- top -->
      <div class="flex justify-between">
        <span>Quiz App</span>
        <div>
          <span>Score</span>
          <span>10</span>
        </div>
      </div>

      <!-- progress bar -->
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
        <span
          >Which internet company began life as an online bookstore called
          &#039;Cadabra&#039;?</span
        >
      </div>

      <!-- answers -->
      <div class="mt-3">
        <ul>
          <li class="rounded-lg border-2 border-green-200 pl-2 mb-3">eBay</li>
          <li class="rounded-lg border-2 border-green-200 pl-2 mb-3">eBay</li>
          <li class="rounded-lg border-2 border-green-200 pl-2 mb-3">eBay</li>
        </ul>
      </div>

      <!-- serparator -->
      <div class="separator mt-2 bg-gray-400 w-full absolute left-0"></div>

      <!-- bottom -->
      <div class="mt-8 flex justify-between">
        <span>1/5 question</span>
        <button class="bg-blue-600 rounded-lg text-white p-2">Next Question</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.separator {
  height: 2px;
}
</style>
