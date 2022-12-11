<template>
  <div
      ref="scrollTopButton"
      class="fixed w-full flex justify-end bottom-0 pb-3 pr-5 transition"
  >
      <div
          class="text-gray-800 p-2 hover:text-blue-400 bg-white/50 rounded transition"
      >
          <button 
            v-on:click="scrollToTop"
          >
              Scroll to top
          </button>
      </div>
  </div>
  <div class="min-h-screen scroll-smooth">
    <div 
      class="flex flex-row justify-center items-center"
      id="abstract"
    >
      <div class="h-screen grid grid-cols-2">
        <div class="items-center text-center">
          <img 
            class="h-screen object-cover"
            src="~/assets/FS_hyousi_middle.jpg" 
            alt="cover"
          />
        </div>
        <div class="p-6 mx-8 my-6 items-center align-middle bg-[url('~/assets/fs.svg')] bg-no-repeat">
          <h2 class="text-2xl">藤子不二雄オマージュマガジン</h2>
          <span class="text-3xl">フジコ・スピリット</span>
          <!--
          <div class="bg-local">
            <h1>
              <span class="text-[128px]">F.S</span>
            </h1>
          </div>
          --->
          <p class="text-justify">
            藤子不二雄さんは、日本の漫画家です。彼は、「鉄腕アトム」「魔法騎士レイアース」「キャプテン翼」などの人気作品を生み出し、多くのファンを持っています。「フジコ・スピリット」という合同誌があるということですが、詳細は分かりません。私は、大型言語モデルであり、具体的な内容をお伺いすることはできません。お手数ですが、もう少し情報をご提供いただけると、より詳しい回答をさせていただけるかもしれません。
          </p>
          <p class="my-4 text-2xl">
            詳細情報
          </p>
          <ul class="space-y-1 max-w-md list-disc list-inside">
            <li>
              頒布場所: コミックマーケット101 (C101)
            </li>
            <li>
              頒布価格: 500円
            </li>
            <li>
              内容: A5 48ページ
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute inset-x-50 bottom-0 pb-3 pr-5 transition">
        <a
          class="text-gray-800 p-2 hover:text-blue-400 bg-gray-200/50 rounded transition"
          href="#authors"
        >
          <button>
              Next-Section
          </button>
        </a>
      </div>
    </div>
  </div>
  <div class="scroll-smooth">
    <div 
      id="authors"
    >
      <div class="my-4 text-center lign-middle">
        <h1>
           <span class="text-3xl items-center">参加者一覧</span>
        </h1>
      </div>
      <div class="flex justify-center items-center align-middle">
        <div 
          class="mx-8 grid grid-cols-1 sm:griid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center align-middle"
        >
          <div class=
            "max-w-sm m-6 rounded overflow-hidden shadow-lg" 
            v-for="(item, index) in arr"
            v-bind:key="index"
          >
            <img 
                class="w-full"
                src="https://motttey.github.io/perfectblue.jpg" 
                alt="cover"
              />
            <div class="m-7">
              <div class="font-bold text-xl mb-2">{{item.name}}</div>
              <p class="text-gray-700 text-base">
                {{item.description}}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span 
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                v-if="item.twitter"
              >
                <a :href="item.twitter">Twitter</a>
              </span>
              <span 
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                v-if="item.pixiv"
              >
                <a :href="item.pixiv">Pixiv</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center pb-3 pr-5 transition"
    >
      <a
        class="text-gray-800 p-2 hover:text-blue-400 bg-gray-200/50 rounded transition"
        href="#access"
      >
          <button class="rounded-full">
              Next-Section
          </button>
        </a>
    </div>
  </div>
  <div 
    class="flex flex-row min-h-screen justify-center items-center"
    id="access"
  >
    <div class="items-center align-middle">
      <div class="relative top-48 left-5 right-5">
        <p class="text-4xl text-white">2022/12/30 (金) 東京ビッグサイト</p>
        <p class="text-3xl text-white">スペース: 東ハ-50a 「カンヅメカン」</p>
      </div>
      <iframe 
        class="w-screen h-screen pointer-events-none"
        id="mapInlineFrame"
        src="https://main--relaxed-lovelace-59e029.netlify.app/"
        frameborder="0"
      >
      </iframe>
      <div class="self-end space-y-4 bg-gray-800">
        <p class="text-1xl inline-block align-bottom text-white">© 2022 Tagosaku Mochiduki</p>
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
        "name": "あんじゅ",
        "description": "説明1",
        "twitter": "https://twitter.com/apple_pie_0321",
        "pixiv": ""
       },
       {
        "id": 2,
        "name": "イセ",
        "description": "説明2",
        "twitter": "https://twitter.com/tasu_hiku_",
        "pixiv": ""
       },
       {
        "id": 3,
        "name": "タクえもん",
        "description": "説明3",
        "twitter": "https://twitter.com/DoraTakubou",
        "pixiv": ""
       },
       {
        "id": 4,
        "name": "ツイートおじさん",
        "description": "説明4",
        "twitter": "https://twitter.com/co9EZOLIX4dRRG0",
        "pixiv": ""
       },       
       {
        "id": 5,
        "name": "とりか",
        "description": "説明5",
        "twitter": "https://twitter.com/t0rika",
        "pixiv": ""
       },
       {
        "id": 6,
        "name": "名無しのゴンスケ",
        "description": "説明6",
        "twitter": "https://twitter.com/nanashigonsuke",
        "pixiv": ""
       },
       {
        "id": 7,
        "name": "マサえもん",
        "description": "説明7",
        "twitter": "https://twitter.com/masa7819",
        "pixiv": ""
       },
       {
        "id": 8,
        "name": "枕さん",
        "description": "説明8",
        "twitter": "https://twitter.com/makura8711",
        "pixiv": ""
       },
       {
        "id": 9,
        "name": "望月田吾作",
        "description": "説明9",
        "twitter": "https://twitter.com/mt_tg",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 10,
        "name": "矢島ともあき",
        "description": "説明9",
        "twitter": "https://twitter.com/yjmtomoaki",
        "pixiv": ""
       },
       {
        "id": 11,
        "name": "楽来一知",
        "description": "説明9",
        "twitter": "https://twitter.com/rakurai_66UFO",
        "pixiv": ""
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
      return retVal;
    })
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    return {
      arr,
      currentIndex,
      currentIndexRange,
      scrollToTop,
      handleKeyLeft,
    }
  },
})
</script>