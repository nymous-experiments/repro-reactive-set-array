<template>
  <h1>Reactivity with Sets</h1>
  <template v-for="[header, values] in Object.entries(inputList)" key="header">
    <p>{{ header }}</p>
    <label v-for="v in values">{{ v }}
      <input type="checkbox" @change="handleClick(header, v, $event.target.checked)">
    </label>
  </template>
</template>

<script setup lang="ts">
import inputList from "../inputList"
import store from "../storeWithSet"

function handleClick(name: string, value: string, checked: boolean) {
  if (checked) {
    store.add(name, value)
  } else {
    store.remove(name, value)
  }
}
</script>
