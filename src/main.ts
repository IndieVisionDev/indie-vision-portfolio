import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faUser, faCode, faHandshake, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhone, faUser, faGithub, faLinkedin, faCode, faHandshake, faEnvelope, faMapMarkerAlt);

import './assets/main.css'
import './index.css'


const app = createApp(App)
.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia())
app.use(router)
app.mount('#app')
