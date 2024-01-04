<template>
  <div
      ref="scrollTopButton"
      class="fixed w-full flex justify-end bottom-0 pb-3 pr-5 transition"
  >
    <div class="text-gray-800 p-2 hover:text-blue-400 bg-white/50 rounded transition">
      <button 
        id="scrollToTopButton"
        v-on:click="scrollToTop"
      >
        Scroll to top
      </button>
    </div>
  </div>
  <div class="scroll-smooth">
    <div class="bg-blue-100 border-t-4 border-red-500 text-gray-700 px-4 py-3 my-2" role="alert">
      <p class="font-bold">カンヅメカンからのお知らせ2</p>
      <p class="text-sm">FSの第二号をC103で出版しました!
        <a class="text-blue-600" href="https://yjmtomoaki.booth.pm/items/5330491">[矢島ともあきのBOOTH]</a>より購入よろしくお願いします。
      </p>
    </div>
    <div class="bg-blue-100 border-t-4 border-blue-500 text-gray-700 px-4 py-3 my-2" role="alert">
      <p class="font-bold">カンヅメカンからのお知らせ</p>
      <p class="text-sm">FSの通販を開始しました。
        <a class="text-blue-600" href="https://yjmtomoaki.booth.pm/items/4446490">[矢島ともあきのBOOTH]</a>より購入よろしくお願いします。
      </p>
      <p class="text-sm">望月によるドラえもん本の通販を開始しました。
        <a class="text-blue-600" href="https://motitago.booth.pm/">[望月田吾作のBOOTH]</a>より購入よろしくお願いします。
      </p>
    </div>
    <div 
      class="flex flex-row justify-center items-center"
      id="abstract"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="h-72 sm:h-screen items-center text-center">
          <img 
            class="cover-img w-full h-full sm:h-screen object-center object-cover"
            loading="lazy"
            src="~/assets/FS_hyousi_middle.jpg" 
            alt="FS表紙画像"
          />
        </div>
        <div class="p-6 mx-8 my-6 items-center align-middle bg-[url('~/assets/fs.svg')] bg-contain bg-no-repeat max-w-none">
          <h2 class="text-lg md:text-2xl font-bold">藤子不二雄オマージュマガジン</h2>
          <h1 class="text-2xl md:text-3xl font-bold">フジコ・スピリット</h1>
          <p class="text-right text-md md:text-lg font-semibold max-w-lg">by 
            <a class="text-blue-600" href="https://webcatalog-free.circle.ms/Circle/16802791">カンヅメカン</a>
          </p>
          <blockquote class="text-md text-gray-900 dark:text-white my-10">
            <svg 
              aria-hidden="true"
              class="w-8 h-8 text-gray-400"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg>
            <p class="text-justify text-sm font-semibold max-w-lg">
              日本を代表するトップクリエイターの多くは、インタビュー等を通して「自分の創作活動の原体験は藤子不二雄作品にある」と語っています。<br>
              本書「フジコ・スピリット」では、SNSで活動される藤子作品を愛してやまない11名の創作家による漫画・イラスト・小説をオムニバス形式で掲載させていただきました。
            </p>
            <p class="text-right text-md font-bold max-w-lg">
              ― 矢島ともあき (<a class="text-blue-600" href="https://twitter.com/yjmtomoaki" target="_blank">@yjmtomoaki</a>)
            </p>
          </blockquote>
          <img 
            class="my-4 items-center text-center max-w-sm w-full object-full"
            src="~/assets/hyoushi.jpg" 
            alt="FSのと表紙/裏表紙"
          />
          <h2 class="my-4 text-xl md:text-2xl font-medium">
            詳細情報
          </h2>
          <ul class="space-y-1 max-w-md text-sm list-disc list-inside">
            <li>
              コミックマーケット101 (C101)
            </li>
            <li>
              頒布場所: <span class="font-semibold">1日目 東ハ-50a カンヅメカン</span>
            </li>
            <li>
              頒布価格: <span class="font-semibold">500円</span>
            </li>
            <li>
              内容: <span class="font-semibold">A5 48ページ</span>
            </li>
            <li>
              通販: <span class="font-semibold">
                <a class="text-blue-600" href="https://yjmtomoaki.booth.pm/items/4446490">[BOOTH]</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="scroll-smooth my-8">
    <div id="authors">
      <div class="my-4 text-center lign-middle">
        <h1>
          <span class="text-2xl md:text-3xl items-center font-medium">参加者一覧</span>
        </h1>
      </div>
      <div class="flex justify-center items-center align-middle">
        <div 
          class="mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center align-middle"
        >
          <div class="max-w-sm my-6 mx-4 rounded overflow-hidden shadow-lg" 
            v-for="(item, index) in authorArr"
            v-bind:key="index"
          >
            <img 
              class="author-img w-full h-48 object-cover"
              :src="(hoveredArr[index]) ? getAuthorAltImageUrl(item.src) : getAuthorImageUrl(item.src)" 
              :alt="item.name"
              loading="lazy"
              @mouseover="hoveredArr[index] = true"
              @mouseout="hoveredArr[index] = false"
              @touchstart="hoveredArr[index] = true"
              @touchend="hoveredArr[index] = false"
            />
            <div class="mx-7 mt-5">
              <div class="font-bold text-xl mb-2">{{item.name}}</div>
              <!--
              <p class="text-gray-700 text-base">
                {{item.description}}
              </p>
              -->
            </div>
            <div class="px-6 pt-4 pb-2">
              <span 
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                v-if="item.twitter"
              >
                <a :href="item.twitter">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                  Twitter</a>
              </span>
              <span 
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                v-if="item.pixiv"
              >
                <a :href="item.pixiv">
                  <font-awesome-icon :icon="['fas','image']" />
                  Pixiv
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="scroll-smooth my-8">
    <div id="distributions">
      <div class="mx-5 md:mx-15 my-12 text-center lign-middle">
        <h1 class="text-3xl items-center font-medium">その他の頒布物</h1>
        <div class="flex justify-center items-center align-middle">
          <div 
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch align-middle"
          >
            <div class=
              "max-w-sm my-6 mx-5 rounded overflow-hidden shadow-lg" 
              v-for="(item, index) in contentArr"
              v-bind:key="index"
            > 
              <a :href="item.url" target=”_blank”>
                <img 
                  class="publish-content-img w-full h-84 max-h-84 object-cover"
                  :src="getImageUrl(item.src)" 
                  :alt="item.name"
                  loading="lazy"
                />
              </a>
              <div class="mx-5 mt-5">
                <div class="font-bold text-lg mb-2 text-left">
                  {{item.name}}
                </div>
                <p class="text-gray-700 text-sm text-left">
                  {{item.description}}
                </p>
                <p 
                  class="text-gray-700 text-sm text-left mt-2"
                  v-if="item.subdescription"
                >
                  {{item.subdescription}}
                </p>
                <p class="text-gray-700 text-sm text-left">
                  <a class="text-blue-600" :href="item.url" target=”_blank”>[詳細情報]</a>
                </p>
                <p class="text-gray-700 text-sm text-left" v-if="item.onlineOrderUrl">
                  <a class="text-blue-600" :href="item.onlineOrderUrl" target=”_blank”>[オンライン販売]</a>
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 text-left">
                <span 
                  class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
                  v-if="item.new"
                >
                  新刊
                </span>
                <span 
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  v-if="item.size || item.pages"
                >
                  {{item.size}} {{item.pages}}
                </span>
                <span 
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2"
                    v-if="item.price"
                  >
                    {{item.price}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div 
    class="flex flex-row min-h-screen justify-center items-center"
    id="access"
  >
    <div class="items-center align-middle">
      <div class="relative top-48 left-5 right-5">
        <p class="text-2xl md:text-3xl text-white font-medium">2022/12/30 (金) 東京ビッグサイト</p>
        <p class="text-2xl md:text-3xl text-white font-medium">東5ホール ハ-50a 「カンヅメカン」</p>
      </div>
      <img 
        class="place-doraemon-img w-screen max-w-screen-xl h-screen object-cover"
        loading="lazy"
        src="~/assets/map.jpg" 
        alt="ドラえもんが空を飛んでいる背景画像"
      />
      <!--
      <iframe 
        class="w-screen h-screen pointer-events-none touch-none hidden lg:block"
        id="mapInlineFrame"
        src="https://main--relaxed-lovelace-59e029.netlify.app/"
        loading="lazy"
        frameborder="0"
      >
      </iframe>
      -->
      <div 
        class="self-end space-y-4 bg-gray-800"
        id="footer"
      >
        <p class="text-1xl inline-block align-bottom text-white">© 2022 Tagosaku Mochiduki</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const authorArr = [
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
    
    const contentArr = [
    {
        "id": 1,
        "name": "夏色",
        "description": "枕さん (@makura8711)による、Twitterに掲載した夏がテーマのイラストをポストカードにしました。1セット3枚入り。",
        "subdescription": "",
        "src": "postcard",
        "url": "https://twitter.com/makura8711/status/1604460429945999362",
        "new": true,
        "size": "ポストカード",
        "pages": "",
        "price": "100円",
        "onlineOrderUrl": ""
       },
       {
        "id": 2,
        "name": "THE BOOK OF CIRCLES",
        "description": "望月田吾作 (@mt_tg)によるフルカラードラえもんイラスト総集編",
        "subdescription": "2018年-2022年に描かれた「ドラえもん」を中心としたイラストを収録。再録作も適宜加筆修正しています",
        "src": "book1",
        "url": "https://www.pixiv.net/artworks/103332022",
        "new": true,
        "size": "B5",
        "pages": "36ページ",
        "price": "800円",
        "onlineOrderUrl": "https://motitago.booth.pm/items/4441457"
       },
       {
        "id": 3,
        "name": "Perfect Blue",
        "description": "望月田吾作 (@mt_tg)がC93で頒布したフルカラードラえもんイラスト本",
        "subdescription": "2017年までに描かれた「青背景ドラえもん」を中心としたイラストを収録",
        "src": "book2",
        "url": "https://www.pixiv.net/artworks/66256659",
        "new": false,
        "size": "B5",
        "pages": "32ページ",
        "price": "700円",
        "onlineOrderUrl": "https://motitago.booth.pm/items/4441438"
       },
    ]

    const hoveredArr = ref(authorArr.map((_) => false));
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    // https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-img-src
    const getImageUrl = (src: string) => {
      const imageUrl = new URL(`./assets/${src}.jpg`, import.meta.url).href
      return imageUrl
    }

    const getAuthorImageUrl = (src: string) => {
      const imageUrl = new URL(`./assets/authors/${src}.jpg`, import.meta.url).href
      return imageUrl
    }

    const getAuthorAltImageUrl = (src: string) => {
      const imageUrl = new URL(`./assets/authors-alt/${src}.jpg`, import.meta.url).href
      return imageUrl
    }

    return {
      authorArr,
      contentArr,
      hoveredArr,
      scrollToTop,
      getImageUrl,
      getAuthorImageUrl,
      getAuthorAltImageUrl
    }
  },
})
</script>

<style>
html {
  font-family: 'M PLUS 2', sans-serif;
}
</style>