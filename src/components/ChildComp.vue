<template>
  <div>
    1
  </div>
</template>

<script setup lang="ts">
  import { inject, getCurrentInstance } from 'vue'

  console.log('Child: injected', inject('test'))
  console.log('Child: provides', getCurrentInstance()?.provides)
  console.log('Child: parent', getCurrentInstance()?.parent)
</script>