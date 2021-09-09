<script lang="ts" setup nuxt>
import { ref, onServerPrefetch, onMounted } from 'vue'

const { data } = asyncData('hello', () => $fetch('/api/hello'))

const data2 = ref(null)

function fetch () {
  return new Promise((resolve) => {
    setTimeout(() => {
      data2.value = 'data2 from server prefetch meow'
      resolve()
    }, 100)
  })
}

onServerPrefetch(fetch)
onMounted(fetch)
</script>

<template>
  <div>
    Hello Nuxt3!

    <pre>{{ data }}</pre>
    <pre>{{ data2 }}</pre>

    <img src="@/assets/nuxt.png" alt="Logo">
  </div>
</template>
