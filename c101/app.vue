<template>
  <div class="flex flex-row min-h-screen justify-center items-center h-screen bg-gradient-to-r from-sky-800 to-indigo-100">
    <div class="h-screen grid grid-cols-2">
      <div class="items-center text-center space-x-4">
        <img 
          class="object-cover min-h-screen"
           src="https://motttey.github.io/perfectblue.jpg" 
           alt="cover"
        />
      </div>
      <div class="p-6 items-center align-middle	space-x-4 m-auto">
        <p class="text-8xl">TailWind.css</p>
        <p class="text-8xl">AAA</p>
      </div>
    </div>
  </div>
  <div class="flex flex-row min-h-screen justify-center items-center">
    <div class="p-6 grid grid-cols-4 gap-4">
      <div class="space-x-4" v-for="d in arr" v-bind:key="d.id"> {{ d.name }}</div>
    </div>
  </div>
  <div class="flex flex-row min-h-screen justify-center items-center">
    <div class="p-6 items-center space-x-4">
      <p class="text-1xl inline-block align-bottom">Copyright</p>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const arr = [
       {
        "id": 1,
        "name": "望月田吾作1"
       },
       {
        "id": 2,
        "name": "望月田吾作2"
       },
       {
        "id": 3,
        "name": "望月田吾作3"
       },
       {
        "id": 4,
        "name": "望月田吾作4"
       },       
       {
        "id": 5,
        "name": "望月田吾作5"
       },
       {
        "id": 6,
        "name": "望月田吾作6"
       },
       {
        "id": 7,
        "name": "望月田吾作7"
       },
       {
        "id": 8,
        "name": "望月田吾作8"
       },
       {
        "id": 9,
        "name": "望月田吾作9"
       }
    ]
    return {
      arr,
    }
  },
})
</script>