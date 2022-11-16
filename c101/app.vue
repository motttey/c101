<template>
  <div
      ref="scrollTopButton"
      class="absolute w-full flex justify-end bottom-0 pb-3 pr-5 transition"
  >
      <div
          class="text-gray-400 hover:text-blue-400 transition"
      >
          <button>
              Scroll to top
          </button>
      </div>
  </div>
  <div class="
    flex
    flex-row
    min-h-screen
    justify-center
    items-center
    h-screen
    scroll-smooth
  ">
    <div class="h-screen grid grid-cols-2">
      <div class="items-center text-center space-x-4">
        <img 
          class="object-cover min-h-screen"
          src="https://motttey.github.io/perfectblue.jpg" 
          alt="cover"
        />
      </div>
      <div class="p-6 items-center align-middle	space-x-4 m-auto">
        <p class="text-4xl">藤子不二雄オマージュマガジン</p>
        <p class="text-9xl">F.S</p>
        <p class="text-4xl">Fujiko Spirits</p>
        <p class="text-justify ...">
          説明
        </p>
      </div>
    </div>
  </div>
  <div class="flex flex-row min-h-screen justify-center items-center">
    <div class="p-4 items-center align-middle	space-x-4 m-auto">
        <p class="text-8xl">{{arr[currentIndex].description}}</p>
    </div>
    <div class="p-4 items-center align-middle m-auto">
      <div 
        class="grid grid-cols-1 items-center align-middle"
        v-for="(index) in currentIndexRange"
        @click="handleKeyLeft"
        v-bind:key="index"
      >
        <div class=
          "max-w-sm m-7 rounded overflow-hidden shadow-lg" 
          :class="{'opacity-50': index !== currentIndex}"
        >
          <img 
              class="w-full"
              src="https://motttey.github.io/perfectblue.jpg" 
              alt="cover"
            />
          <div class="m-7">
            <div class="font-bold text-xl mb-2">{{arr[index].name}}</div>
            <p class="text-gray-700 text-base">
              {{arr[index].description}}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a :href="arr[index].twitter">Twitter</a>
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a :href="arr[index].pixiv">Pixiv</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-row min-h-screen justify-center items-center">
    <div class="items-center align-middle">
      <div class="relative top-48 left-5 right-5">
        <p class="text-6xl text-white">2022/12/30 (金) 東京ビッグサイト</p>
        <p class="text-4xl text-white">東ハ50a</p>
      </div>
      <iframe 
        class="w-screen h-screen pointer-events-none"
        id="mapInlineFrame"
        src="https://main--relaxed-lovelace-59e029.netlify.app/"
        frameborder="0"
      >
      </iframe>.
      <div class="self-end space-y-4">
        <p class="text-1xl inline-block align-bottom">© 2022 Tagosaku Mochiduki</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const currentIndex = ref(0)
    const arr = [
       {
        "id": 1,
        "name": "望月田吾作1",
        "description": "説明1",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 2,
        "name": "望月田吾作2",
        "description": "説明2",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 3,
        "name": "望月田吾作3",
        "description": "説明3",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 4,
        "name": "望月田吾作4",
        "description": "説明4",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },       
       {
        "id": 5,
        "name": "望月田吾作5",
        "description": "説明5",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 6,
        "name": "望月田吾作6",
        "description": "説明6",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 7,
        "name": "望月田吾作7",
        "description": "説明7",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 8,
        "name": "望月田吾作8",
        "description": "説明8",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 9,
        "name": "望月田吾作9",
        "description": "説明9",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       }
    ]
    
    const handleKeyLeft = () => {
      console.log("left");
      if (currentIndex.value < arr.length - 1) {
        currentIndex.value++
      } else {
        currentIndex.value = 0
      }
    }
    
    const currentIndexRange = computed(() => {
      const retVal = []
      const minus = currentIndex.value - 1;
      const plus = currentIndex.value + 1;

      if (minus >= 0) retVal.push(minus);
      else retVal.push(arr.length - 1)

      retVal.push(currentIndex.value)

      if (plus < arr.length) retVal.push(plus);
      else retVal.push(0)
      // for (let i = 0; i < arr.length; i++) { }
      return retVal;
    })
    /*
    const handleKeyRight = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--
      } else {
        currentIndex.value = arr.length - 1
      }
    }
    */
    
    return {
      arr,
      currentIndex,
      currentIndexRange,
      handleKeyLeft,
    }
  },
})
</script>