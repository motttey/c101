<template>
  <div class="flex flex-row min-h-screen justify-center items-center h-screen">
    <div class="h-screen grid grid-cols-2">
      <div class="items-center text-center space-x-4">
        <img 
          class="object-cover min-h-screen"
          src="https://motttey.github.io/perfectblue.jpg" 
          alt="cover"
        />
      </div>
      <div class="p-6 items-center align-middle	space-x-4 m-auto">
        <p class="text-6xl">藤子不二雄<br>オマージュマガジン</p>
        <p class="text-9xl">F.S</p>
        <p class="text-4xl">Fujiko Spirits</p>
      </div>
    </div>
  </div>
  <div class="flex flex-row min-h-screen justify-center items-center">
    <div class="p-4 items-center align-middle	space-x-4 m-auto">
        <p class="text-8xl">説明</p>
    </div>
    <div class="p-4 items-center align-middle	space-x-4 m-auto">
      <div 
        class="grid grid-cols-1 items-center align-middle"
        v-for="(d, index) in arr"
        v-bind:key="d.id"
      >
        <div class=
          "max-w-sm m-7 rounded overflow-hidden shadow-lg" 
          v-if="index === currentIndex"
        >
          <img 
              class="w-full"
              src="https://motttey.github.io/perfectblue.jpg" 
              alt="cover"
            />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{d.name}}</div>
            <p class="text-gray-700 text-base">
            説明文
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Twitter</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pixiv</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-row min-h-screen justify-center items-center">
    <div class="self-end space-y-4">
      <p class="text-1xl inline-block align-bottom">© 2022 Tagosaku Mochiduki</p>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const currentIndex = 0
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
      currentIndex
    }
  },
})
</script>