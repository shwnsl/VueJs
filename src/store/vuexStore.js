import { createStore } from 'vuex' // 1. Vuex의 createStore 함수를 사용하여 Vuex 스토어를 생성

// 2. createStore 함수를 사용하여 Vuex 스토어를 정의하고, 이를 export하여 애플리케이션에서 사용할 수 있도록 함
export default createStore({
  //namespace
  modules: {
    mycart: {
      namespaced: true,
      // 3. state: 애플리케이션의 전역 상태를 정의하는 객체
      state: {
        count: 1, // 4. 'count' 변수 초기값 설정 (기본값은 1)
        cart: [
          // 5. 'cart' 배열에 상품 정보를 저장
          {
            id: 1, // 상품 ID
            name: '키보드', // 상품 이름
            category: '컴퓨터' // 상품 카테고리
          },
          {
            id: 2, // 상품 ID
            name: '마우스', // 상품 이름
            category: '노트북' // 상품 카테고리
          }
        ]
      },

      // 6. getters: Vuex의 state를 기반으로 계산된 상태를 가져올 수 있는 메서드
      getters: {
        getCount: (state) => {
          // 7. 'count' 상태를 반환하는 getter 함수
          return state.count
        },
        getCart: (state) => {
          return state.cart
        }
      },

      // 8. mutations: Vuex의 상태(state)를 동기적으로 변경하는 메서드
      mutations: {
        increment: (state) => {
          // 9. 'increment' mutation은 state의 'count' 값을 1 증가시킴
          state.count++
        },
        decrement: (state) => {
          // 10. 'decrement' mutation은 state의 'count' 값을 1 감소시킴
          state.count--
        }
      },

      // 11. actions: 비동기 작업을 처리하거나, 여러 mutation을 호출하여 상태를 변경할 수 있는 메서드
      actions: {
        input: (context) => {
          // 12. 'input' 액션은 'increment' mutation을 호출하여 'count' 값을 증가시킴
          context.commit('increment')
        },
        output: (context) => {
          // 13. 'output' 액션은 'decrement' mutation을 호출하여 'count' 값을 감소시킴
          context.commit('decrement')
        }
      }
    }
  }
})
