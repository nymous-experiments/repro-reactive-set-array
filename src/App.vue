<template>
  <BugReproduction/>

  <h1>More advanced examples (closer to our use case)</h1>
  <ReactivityArray/>
  <pre>{{ storeWithArray.filters }}</pre>
  <ReactivitySet/>
  <pre>{{ storeWithSet.filters }}</pre>
  <ReactivityMapSet/>
  <pre>{{ storeWithMapSet.filters }}</pre>
  <VueQueryDevTools initialIsOpen/>
</template>

<script setup lang="ts">
import {VueQueryDevTools} from "vue-query/devtools";
import ReactivitySet from "@/components/ReactivitySet.vue"
import ReactivityArray from "@/components/ReactivityArray.vue";
import ReactivityMapSet from "@/components/ReactivityMapSet.vue";
import BugReproduction from "@/components/BugReproduction.vue";
import storeWithSet from "@/storeWithSet";
import storeWithArray from "@/storeWithArray";
import storeWithMapSet from "@/storeWithMapSet";
</script>

<style></style>
