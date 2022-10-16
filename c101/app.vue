<template>
  <div class="flex flex-row min-h-screen justify-center items-center h-screen bg-gradient-to-r from-sky-500 to-indigo-100">
    <div class="h-screen grid grid-cols-2">
      <div class="p-6 max-w-sm items-center text-center	space-x-4">
        <img class="object-none h-screen" src="https://motttey.github.io/perfectblue.jpg" alr="cover">
      </div>
      <div class="p-6 items-center align-middle	space-x-4 h-screen">
        <p class="text-8xl">TailWind.css</p>
        <p class="text-8xl">AAA</p>
      </div>
    </div>
  </div>
  <div class="flex flex-row min-h-screen justify-center items-center">
    <div class="p-6 grid grid-cols-4 gap-4">
      <div class="space-x-4" v-for="(d, i) in arr" v-bind:key="i"> {{ d }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ]
    return {
      arr,
    }
  },
})
</script>