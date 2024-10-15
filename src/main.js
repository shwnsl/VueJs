import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' //createPinia() 함수 불러오기
import App from './App.vue'
import router from './router'
import vuexStore from './store/vuexStore' //Vuex 스토어 설정 파일을 import하여 전역 상태 관리 기능 추가

const app = createApp(App)
//Directive 전역등록
//'focus'라는 이름의 전역 디렉티브를 등록하여 컴포넌트가 마운트되었을 때(el) 자동으로 해당 엘리먼트에 포커스가 가도록 설정
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.use(router)
//vuexStore 설정을 app 인스턴스에 추가하여 전역 상태 관리 기능을 사용할 수 있게 함
app.use(vuexStore)
app.use(createPinia()) //pinia 인스턴스 생성하여 등록
app.mount('#app')
