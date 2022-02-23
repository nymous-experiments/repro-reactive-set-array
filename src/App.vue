<template>
  <h1>Hello</h1>
  <ReactivitySet/>
  <pre>{{ storeWithSet.filters }}</pre>
  <ReactivityArray/>
  <pre>{{ storeWithArray.filters }}</pre>
  <ReactivityMapSet/>
  <pre>{{ storeWithMapSet.filters }}</pre>
</template>

<script setup lang="ts">
import ReactivitySet from "./components/ReactivitySet.vue"
import ReactivityArray from "@/components/ReactivityArray.vue";
import ReactivityMapSet from "@/components/ReactivityMapSet.vue";
import storeWithSet from "@/storeWithSet";
import storeWithArray from "@/storeWithArray";
import storeWithMapSet from "@/storeWithMapSet";
</script>

<style></style>
