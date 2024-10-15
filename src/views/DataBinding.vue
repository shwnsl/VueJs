<!-- <template>
  <div>
    <h2>문자열 바인딩</h2>
    <br />
    제목 : {{ title }}
    <br />
  </div>
</template>
<script setup>
const title = '데이터 바인딩 레쓰고'
</script> -->

<!-- <template>
  <div>
    <h2 v-html="title"></h2>
    <br />
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
  </div>
</template>
<script setup>
const title = 'v-html'
const htmlString = '<p style="color:red">빨간색</p>'
</script> -->

<!-- <template>
  <div>
    <h2>v - model</h2>
    <br />
    <input type="text" name="name" v-model="name" /> <br />
    이름 : {{ name }} <br />
    <input type="number" name="age" v-model.number="age" /> <br />
    나이 : {{ age }} <br />
    <textarea name="msg" v-model="msg"></textarea> <br />
    메세지 : {{ msg }} <br />
    <select name="city" v-model="addr">
      <option value="1">서울</option>
      <option value="2">인천</option>
      <option value="3">부산</option>
    </select>
    <br />
    주소 : {{ addr }} <br />
    <input type="checkbox" name="hobby" v-model="hobby" value="1" /> 독서
    <input type="checkbox" name="hobby" v-model="hobby" value="2" /> 등산
    <input type="checkbox" name="hobby" v-model="hobby" value="3" /> 게임
    <br />
    취미 : {{ hobby }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('Junhee')
console.log(name.value)
const age = ref(30)
const msg = ref('메세지를 입력해라')
const addr = ref(2)
const hobby = ref([])
</script> -->

<!-- <template>
  <div>
    <h2>v - bind</h2>
    <img v-bind:src="imgsrc" :width="imgw" :height="imgh" /> <br />
    <input type="password" name="pwd" v-model="disabled" />
    <button v-bind:disabled="disabled == ''">Click</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const imgsrc = 'https://kr.vuejs.org/images/logo.png'
const imgw = '100px'
const imgh = '100px'
const disabled = ref('')
</script> -->

<!-- <template>
  <div>
    <h2>v - bind:class</h2>
    <p class="container" :class="{ active: isActive, 'text-red': hasError }">
      클래스 바인딩 - JSON
    </p>
    <p class="container" :class="['active', 'text-red']">클래스 바인딩 - 배열</p>
    <p class="container" style="color: red" :style="[styleA, styleB]">인라인 스타일 바인딩</p>
  </div>
</template>
<script setup>
const isActive = true
const hasError = true
const styleA = {
  'background-color': 'yellow',
  'font-weight': true
}
const styleB = {
  'font-size': '1.5em'
}
</script>
<style scoped>
.container {
  border: 1px solid blue;
  width: 200px;
  height: 100px;
}
.active {
  background-color: aquamarine;
  font-weight: 700;
}
.text-red {
  color: red;
}
</style> -->

<!-- <template>
  <div>
    <h2>v - for</h2>
    <table border="1">
      <thead>
        <tr>
          <th>번호</th>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productList" :key="index">
          <td>{{ index }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <p v-for="i in 10" :key="i">{{ i }}</p>
  </div>
</template>
<script setup>
const productList = [
  { name: 'Keyboard', price: 20000, category: 'Computer' },
  { name: 'Mouse', price: 15000, category: 'Computer' },
  { name: 'Monitor', price: 30000, category: 'Computer' },
  { name: 'Speaker', price: 20000, category: 'Computer' }
]
</script> -->

<!-- <template>
  <div>
    <h2>v - if</h2>
    <h3>학점 출력</h3>
    <input type="number" v-model.number="score" />
    <div v-if="score >= 0 && score <= 100">
      <p v-if="score >= 90">A학점</p>
      <p v-else-if="score >= 80">B학점</p>
      <p v-else-if="score >= 70">C학점</p>
      <p v-else-if="score >= 60">D학점</p>
      <p v-else>F학점</p>
    </div>
    <div v-else>잘못 입력했다 시발아</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const score = ref(0)
</script> -->

<!-- <template>
  <div>
    <h2>v - for 구구단</h2>
    <table border="1">
      <tr>
        <th v-for="i in 8" :key="i">{{ i + 1 }}단</th>
      </tr>
      <tr v-for="i in 9" :key="i">
        <td v-for="j in 8" :key="j">{{ j + 1 }} * {{ i }} = {{ (j + 1) * i }}</td>
        <br />
      </tr>
    </table>
  </div>
</template>
<script setup></script> -->

<!-- <template>
  <div>
    <h2>v - on:click = @click로도 쓰인다</h2>
    <button @click="increase">increase</button><br />
    <button @click="decrease">decrease</button><br />
    <button @click="setCount(0), setSum(0)">reset</button><br />
    counter : {{ counter }} <br />
    result : {{ sum }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
const counter = ref(0)
const sum = ref(0)

const increase = () => {
  counter.value++
  sum.value += counter.value
}
const decrease = () => {
  counter.value--
  sum.value -= counter.value
}
const setCount = () => {
  counter.value = 0
}
const setSum = () => {
  sum.value = 0
}
</script> -->

<!-- <template>
  <div>
    <h2>v - on:change = @change로도 쓰인다</h2>
    <select v-model="selected" @change="changeSelect">
      <option value="seoul">seoul</option>
      <option value="suwon">suwon</option>
      <option value="incheon">incheon</option>
      <option value="ansan">ansan</option>
    </select>
    <br />
    주소 : {{ selected }}
  </div>
</template>
<script setup>
import { ref } from 'vue'

const selected = ref('')
const changeSelect = () => {
  console.log(selected.value)
}
</script> -->

<!-- <template>
  <div>
    <h2>이벤트 버블링 / 기본이벤트 막기</h2>
    <div @click="console.log('OUT')">
      바깥쪽(클릭)
      <div @click="console.log('IN')">안쪽(클릭)</div>
    </div>
    <a href="http://www.naver.com" @click.prevent="console.log('click')">Naver</a>
  </div>
</template>
<script setup></script> -->

<!-- <template>
  <div>
    <h2>키 이벤트 v-on:key, v-on:mouse</h2>
    <button @click.once="console.log('Div : click')">once(이벤트를 한 번 만 실행)</button><br />
    <button @click.self="console.log('Div : click')">
      self(이벤트 버블링을 막아줌) <br />
      <input
        type="text"
        v-focus
        @click="console.log('Input Click')"
        @keyup.exact.enter="console.log('Input Enter')"
        @keyup.page-down="console.log('Input PageDown')"
        @keyup.ctrl.enter="console.log('Input Ctrl+Enter')"
        @mousedown.left="console.log('Input MouseDown Left')"
      />
    </button>
    <br />
  </div>
</template>
<script setup></script> -->

<!-- <template>
  <div>
    <h2>사용자 정의 Directive</h2>
    <p v-highlight="{ color: 'red', background: 'gray' }">컴포넌트 내 등록</p>
  </div>
</template>
<script setup>
const vHighlight = {
  mounted: (el, binding) => {
    el.style.color = binding.value.color
    el.style.backgroundColor = binding.value.background
  }
  // beforeMount(el, binding) {}
  // beforeUpdate(el, binding) {}
  // updated(el, binding) {}
  // beforeUnmount(el, binding) {}
  // unmounted(el, binding) {}
}
</script> -->

<!-- <template>
  <div>
    <h2>Compute</h2>
    이름 : <input type="text" name="firstName" placeholder="이름" v-model="firstName" /> <br />
    성 : <input type="text" name="lastName" placeholder="성" v-model="lastName" /> <br />
    {{ fullName }}님 하이요 <br />
    {{ fullName }}님 반갑다 씨발아 <br />
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'

const firstName = ref('Jason')
const lastName = ref('Bourne')
// const fullName = ref('')
// fullName.value = lastName.value + firstName.value
const fullName = computed(() => {
  return lastName.value + firstName.value
})
</script> -->

<template>
  <div>
    <h2>Watch</h2>
    이름 : <input type="text" name="firstName" placeholder="이름" v-model="firstName" /> <br />
    성 : <input type="text" name="lastName" placeholder="성" v-model="lastName" /> <br />
    {{ fullName }}님 하이요 <br />
    {{ fullName }}님 반갑다 씨발아 <br />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const firstName = ref('Jason')
const lastName = ref('Bourne')
const fullName = ref('')
watch([firstName, lastName], () => {
  // (newValues, oldValues)
  fullName.value = lastName.value + firstName.value
})
</script>
