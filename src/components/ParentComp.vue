<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { provide, getCurrentInstance } from 'vue'
  provide('test', {
    a: 1,
  })

  console.log('Parent: provides', getCurrentInstance()?.provides)
</script>