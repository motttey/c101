import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
export default defineNuxtPlugin( ( nuxtApp: any) =>
{
  library.add( fas, fab );
  nuxtApp.vueApp.component( 'font-awesome-icon', FontAwesomeIcon);
});