<template>
  <h1>Bug reproduction</h1>
  <details open>
    <summary>Expand example</summary>
    <p>With ref([])</p>
    <div>Checked names: {{ checkedNamesRefArray }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNamesRefArray">
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNamesRefArray">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNamesRefArray">
    <label for="mike">Mike</label>

    <p>With ref(new Set())</p>
    <div>Checked names: {{ checkedNamesRefSet }}</div>
    <input type="checkbox" id="james" value="James" v-model="checkedNamesRefSet">
    <label for="james">James</label>

    <input type="checkbox" id="peter" value="Peter" v-model="checkedNamesRefSet">
    <label for="peter">Peter</label>

    <input type="checkbox" id="terry" value="Terry" v-model="checkedNamesRefSet">
    <label for="terry">Terry</label>
  </details>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useQuery} from "vue-query";

const checkedNamesRefArray = ref([]);
const checkedNamesRefSet = ref(new Set<string>() as unknown as any[]); // Workaround a Vue typing bug?

useQuery(["simplestRefArray", checkedNamesRefArray], () => console.log("simplestRefArray", checkedNamesRefArray));
useQuery(["simplestRefSet", checkedNamesRefSet], () => console.log("simplestRefSet", checkedNamesRefSet));
</script>
