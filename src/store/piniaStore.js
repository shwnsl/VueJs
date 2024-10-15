import { defineStore } from 'pinia'
export const counterStore = defineStore('counter', {
  state: () => {
    //함수
    return {
      //객체 retrun
      count: 2,
      cart: [
        {
          id: 1,
          name: '키보드',
          category: '노트북'
        },
        {
          id: 2,
          name: '마우스',
          category: '노트북'
        }
      ]
    }
  },
  getters: {
    //속성, 매개변수 state값으로 state 함수의 상태값 사용
    getCount: (state) => {
      return state.count
    },
    getCart: (state) => {
      return state.cart
    }
  },
  actions: {
    //속성, 상태값 사용할려면 this로 접근
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
