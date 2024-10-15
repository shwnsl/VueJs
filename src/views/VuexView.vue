<!-- 
  <template>
  <div>
    <h2>Vuex namespace</h2>
    <br />
    수량 : {{ count }}

    <br /><br />
    <p v-for="(cart, index) in carts" :key="index">
      {{ cart.id }} : {{ cart.name }} : {{ cart.category }} <br />
    </p>
    <br /><br />

    <button @click="getCount">확인1</button>
    <button @click="getCart">확인2</button>

    <button @click="increase">증가</button>

    <button @click="decrease">감소</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue' // 5. ref를 사용하여 반응형 변수 선언
import { useStore } from 'vuex' // 6. useStore 훅을 사용하여 Vuex 스토어에 접근

const vuexStore = useStore() // 7. useStore()를 호출하여 Vuex 스토어 인스턴스 생성
//ref()적용
//const count = ref(0) // 8. 반응형 변수 count를 초기값 0으로 선언
const count = computed(() => {
  return vuexStore.state.mycart.count
})

// 9. getCount 함수 정의
// 버튼 클릭 시 Vuex 스토어의 getter를 통해 상태 값을 가져와 count에 할당
const getCount = () => {
  // count.value = vuexStore.getters.getCount // 10. Vuex 스토어의 getCount getter를 통해 상태 값을 count에 할당
  //namespace 적용시
  carts.value = vuexStore.getters['mycart/getCart']
}
const carts = ref([])
const getCart = () => {
  carts.value = vuexStore.getters.getCart
}

// 11. increase 함수 정의
// 'input' 액션을 dispatch하여 Vuex의 상태 값을 증가시킴
const increase = () => {
  console.log('increase') // 증가 버튼 클릭 시 콘솔에 로그를 출력
  //vuexStore.dispatch('input') // Vuex 스토어의 'input' 액션을 호출하여 상태 증가
  //namespace
  vuexStore.dispatch('mycart/input')
}

// 12. decrease 함수 정의
// 'output' 액션을 dispatch하여 Vuex의 상태 값을 감소시킴
const decrease = () => {
  console.log('decrease') // 감소 버튼 클릭 시 콘솔에 로그를 출력
  //vuexStore.dispatch('output') // Vuex 스토어의 'output' 액션을 호출하여 상태
  //namespace
  vuexStore.dispatch('mycart/output') // Vuex 스토어의 'output' 액션을 호출하여 상태 감소
}
</script> -->

<!-- <template>
  <div>
    <h2>Vuex namespace</h2>
    <br />
    수량 : {{ count }}<br />
    수량 : {{ piniaStore.getCount }}

    <br /><br />

    <button @click="input">증가</button>
    <button @click="output">감소</button>
  </div>
</template>

<script setup>
import { counterStore } from '@/store/piniaStore.js' // Pinia 스토어에서 counterStore를 import
import { storeToRefs } from 'pinia' // Pinia의 storeToRefs를 사용하여 상태를 반응형으로 변환

const piniaStore = counterStore() // Pinia 스토어 인스턴스 생성

// Pinia 스토어의 상태를 storeToRefs를 사용하여 반응형 변수로 변환
const { count } = storeToRefs(piniaStore)

// 증가 함수
const input = () => {
  piniaStore.increment()
}

// 감소 함수
const output = () => {
  piniaStore.decrement()
}
</script> -->

<template>
  <div>
    <h2>Redux</h2>
  </div>
</template>

<script setup>
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  addTodo,
  toggleTodo,
  setVisibilityFilter
} from '@/store/actions'

import todoApp from '@/store/reducers'
import { createStore } from 'redux'

const store = createStore(todoApp)
console.log(store.getState().visibilityFilter)
console.log(store.getState().todos)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(addTodo('커피 마시기'))
store.dispatch(addTodo('수업 듣기'))
store.dispatch(addTodo('점심 먹기'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
</script>
