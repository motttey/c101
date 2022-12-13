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
  <div class="scroll-smooth">
    <div 
      class="flex flex-row justify-center items-center"
      id="abstract"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="h-96 sm:h-screen items-center text-center">
          <img 
            class="h-full w-full sm:h-screen object-cover"
            loading="lazy"
            src="~/assets/FS_hyousi_middle.jpg" 
            alt="cover"
          />
        </div>
        <div class="p-6 mx-8 my-6 items-center align-middle bg-[url('~/assets/fs.svg')] bg-no-repeat">
          <h2 class="text-2xl font-bold">藤子不二雄オマージュマガジン</h2>
          <p class="text-3xl font-bold">フジコ・スピリット</p>
          <p class="text-right text-xl">by <a class="text-blue-600" href="https://webcatalog-free.circle.ms/Circle/16802791">カンヅメカン</a></p>
          <!--
          <div class="bg-local">
            <h1>
              <span class="text-[128px]">F.S</span>
            </h1>
          </div>
          --->
          <p class="text-justify mt-12">
            藤子不二雄さんは、日本の漫画家です。彼は、「鉄腕アトム」「魔法騎士レイアース」「キャプテン翼」などの人気作品を生み出し、多くのファンを持っています。「フジコ・スピリット」という合同誌があるということですが、詳細は分かりません。私は、大型言語モデルであり、具体的な内容をお伺いすることはできません。お手数ですが、もう少し情報をご提供いただけると、より詳しい回答をさせていただけるかもしれません。
          </p>
          <img 
            class="my-4 items-center text-center max-w-sm w-full object-full"
            src="~/assets/hyoushi.jpg" 
            alt="表紙/裏表紙"
          />
          <p class="my-4 text-2xl font-medium">
            詳細情報
          </p>
          <ul class="space-y-1 max-w-md list-disc list-inside">
            <li>
              イベント: コミックマーケット101 (C101)
            </li>
            <li>
              スペース: 東は-50a
            </li>
            <li>
              サークル: カンヅメカン
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
    </div>
    <div 
        class="flex justify-center my-4 pb-3 pr-5 transition"
      >
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
  <div class="scroll-smooth">
    <div 
      id="authors"
    >
      <div class="my-4 text-center lign-middle">
        <h1>
           <span class="text-3xl items-center font-medium">参加者一覧</span>
        </h1>
      </div>
      <div class="flex justify-center items-center align-middle">
        <div 
          class="mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center align-middle"
        >
          <div class=
            "max-w-sm my-6 mx-4 rounded overflow-hidden shadow-lg" 
            v-for="(item, index) in arr"
            v-bind:key="index"
          >
            <img 
              class="w-full h-48 object-cover"
              :src="getImageUrl(item.src)" 
              :alt="item.name"
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
      class="flex justify-center my-4 pb-3 pr-5 transition"
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
        <p class="text-2xl md:text-3xl text-white font-medium">2022/12/30 (金) 東京ビッグサイト</p>
        <p class="text-2xl md:text-3xl text-white font-medium">スペース: 東ハ-50a 「カンヅメカン」</p>
      </div>
      <iframe 
        class="w-screen h-screen pointer-events-none touch-none"
        id="mapInlineFrame"
        src="https://main--relaxed-lovelace-59e029.netlify.app/"
        loading="lazy"
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
        "src": "01",
        "pixiv": "https://www.pixiv.net/users/4036156"
       },
       {
        "id": 2,
        "name": "イセ",
        "description": "説明2",
        "twitter": "https://twitter.com/tasu_hiku_",
        "src": "02",
        "pixiv": "https://www.pixiv.net/users/3014124"
       },
       {
        "id": 3,
        "name": "タクえもん",
        "description": "説明3",
        "twitter": "https://twitter.com/DoraTakubou",
        "src": "03",
        "pixiv": "https://www.pixiv.net/users/11660552"
       },
       {
        "id": 4,
        "name": "ツイートおじさん",
        "description": "説明4",
        "twitter": "https://twitter.com/co9EZOLIX4dRRG0",
        "src": "04",
        "pixiv": "https://www.pixiv.net/users/12512382"
       },       
       {
        "id": 5,
        "name": "とりか",
        "description": "説明5",
        "twitter": "https://twitter.com/t0rika",
        "src": "05",
        "pixiv": "https://www.pixiv.net/users/2638861"
       },
       {
        "id": 6,
        "name": "名無しのゴンスケ",
        "description": "説明6",
        "twitter": "https://twitter.com/nanashigonsuke",
        "src": "06",
        "pixiv": "https://www.pixiv.net/users/45100114"
       },
       {
        "id": 7,
        "name": "マサえもん",
        "description": "説明7",
        "twitter": "https://twitter.com/masa7819",
        "src": "07",
        "pixiv": "https://www.pixiv.net/users/3942792"
       },
       {
        "id": 8,
        "name": "枕さん",
        "description": "説明8",
        "twitter": "https://twitter.com/makura8711",
        "src": "08",
        "pixiv": "https://www.pixiv.net/users/3106182"
       },
       {
        "id": 9,
        "name": "望月田吾作",
        "description": "説明9",
        "twitter": "https://twitter.com/mt_tg",
        "src": "09",
        "pixiv": "https://www.pixiv.net/users/415546"
       },
       {
        "id": 10,
        "name": "矢島ともあき",
        "description": "説明10",
        "twitter": "https://twitter.com/yjmtomoaki",
        "src": "10",
        "pixiv": "https://www.pixiv.net/users/6451424"
       },
       {
        "id": 11,
        "name": "楽来一知",
        "description": "説明11",
        "twitter": "https://twitter.com/rakurai_66UFO",
        "src": "11",
        "pixiv": "https://www.pixiv.net/users/474750"
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

    // https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-img-src
    const getImageUrl = (src) => {
      const imageUrl = new URL(`./assets/authors/${src}.jpg`, import.meta.url).href
      return imageUrl
    }

    return {
      arr,
      currentIndex,
      currentIndexRange,
      scrollToTop,
      handleKeyLeft,
      getImageUrl
    }
  },
})
</script>

<style>
html {
  font-family: 'M PLUS 2', sans-serif;
}
</style>