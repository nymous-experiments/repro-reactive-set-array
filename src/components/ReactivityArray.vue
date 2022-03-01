<template>
  <h1>Reactivity with Arrays</h1>
  <details>
    <summary>Expand example</summary>
    <template v-for="[header, values] in Object.entries(inputList)" key="header">
      <p>{{ header }}</p>
      <label v-for="v in values">{{ v }}
        <input type="checkbox" @change="handleClick(header, v, $event)">
      </label>
    </template>
  </details>
</template>

<script setup lang="ts">
import inputList from "../inputList"
import store from "../storeWithArray"
import {useQuery} from "vue-query";

function handleClick(name: string, value: string, event: Event) {
  const checked = (event.target as HTMLInputElement).checked;
  if (checked) {
    store.add(name, value)
  } else {
    store.remove(name, value)
  }
}

const result = useQuery(["array", store.filters], () => console.log("array", store.filters));
</script>
