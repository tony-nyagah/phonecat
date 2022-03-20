<script>
import json from "@/assets/phones/phones.json";

export default {
  name: "App",
  data() {
    return {
      phones: json
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="phone in phones" :key="phone.id">
      <span>{{ phone.name }}</span>
      <p>{{ phone.snippet }}</p>
    </li>
  </ul>

  <p>Total number of phones: {{ phones.length }}</p>
</template>

<style>
</style>
