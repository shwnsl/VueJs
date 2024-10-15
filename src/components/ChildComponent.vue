<!-- <template>
  <div>
    <h2>컴포넌트 통신</h2>
    <h3>자식 컴포넌트</h3>
    <p>제목 : {{ props.title }}</p>
    <p>나이 : {{ props.age }}</p>
    <p>혼인 : {{ props.isTrue }}</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
// const props = defineProps(['title', 'age', 'isTrue'])
const props = defineProps({
  title: {
    Type: String,
    default: '제목입니다'
  },
  age: {
    Type: Number,
    default: 20,
    required: true
  },
  isTrue: {
    Type: Boolean,
    default: false
  }
})
</script> -->

<!-- <template>
  <div>
    <h2>Props 유효성 검사</h2>
    <h3>자식 컴포넌트</h3>
    A :
    <p>{{ props.A }} : {{ typeof props.A }}</p>
    B :
    <p>{{ props.B }} : {{ typeof props.B }}</p>
    C :
    <p>{{ props.C }} : {{ typeof props.C }}</p>
    D :
    <p>{{ props.D }} : {{ typeof props.D }}</p>
    E :
    <p>{{ props.E.msg }} : {{ typeof props.E }}</p>
    F :
    <p>{{ props.F(3, 4) }} : {{ typeof props.F }}</p>
    G :
    <p>{{ props.G }} : {{ typeof props.G }}</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  A: Number,
  B: [String, Number],
  C: {
    Type: String,
    required: true
  },
  D: {
    default: 'hello'
  },
  E: {
    Type: Object
  },
  F: {
    Type: Function
  },
  G: {
    Type: String,
    validator(value) {
      return ['경고', '위험', '성공'].includes(value) // false return 시 에러 발생, 논리값만 return
    }
  }
})
props.A + 10
</script> -->

<!-- <template>
  <div>
    <h2>Provide Inject</h2>
    <h3>자식 컴포넌트</h3>
    이름 : {{ props.user.name }} <br />
    나이 : {{ props.user.age }} <br />
    번호 : {{ props.user.tel }} <br />
    <br />
    <ChildChildComponent :user="props.user" />
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import ChildChildComponent from './ChildChildComponent.vue'
const props = defineProps({
  user: {
    Type: Object,
    default: () => {
      return { name: '', age: '', tel: '' }
    }
  }
})
</script> -->

<!-- <template>
  <div>
    <h2>부모에서 자식 이벤트 발생</h2>
    <h3>자식 컴포넌트</h3>
    <br />
    <button @click="clickFn" @focus="focusFn" ref="btn">Click</button>
    <br />
    Click Event :
    <p v-html="msg1"></p>
    <br />
    Focus Event :
    <p v-html="msg2"></p>
    <br />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const msg1 = ref('')
const msg2 = ref('')
const clickFn = () => {
  msg1.value += '클릭 이벤트 발생<br>'
}
const focusFn = () => {
  msg2.value += '포커스 이벤트 발생<br>'
}
</script> -->

<!-- <template>
  <div>
    <h2>부모에서 자식 함수 호출</h2>
    <h3>자식 컴포넌트</h3>
    <br />
    함수 호출 :
    <p v-html="msg"></p>
  </div>
</template>
<script setup>
import { ref, defineExpose } from 'vue'
const msg = ref('')
const childFn = (m) => {
  msg.value += m + '<br>'
}
defineExpose({
  childFn
})
</script> -->

<!-- <template>
  <div>
    <h2>부모에서 자식 변수 변경</h2>
    <h3>자식 컴포넌트</h3>
    <br />
    값 변경 : {{ msg1 }} <br />
    값 변경 : {{ msg2 }} <br />
  </div>
</template>
<script setup>
import { ref, defineExpose } from 'vue'
const msg1 = ref('기존값1')
const msg2 = ref('기존값2')
defineExpose({ msg1, msg2 })
</script> -->

<!-- <template>
  <div>
    <h2>자식에서 부모로 데이터 전달</h2>
    <h3>자식 컴포넌트</h3>
    <br />
    <button @click="clickFn">Send Data</button>
  </div>
</template>
<script setup>
import { defineEmits } from 'vue'
const data = {
  name: 'jason',
  age: 24
}
const emit = defineEmits(['send_data'])
const clickFn = () => {
  emit('send_data', data)
}
</script> -->

<!-- <template>
  <div>
    <h2>자식변수 부모에서 동기화</h2>
    <h3>자식 컴포넌트</h3>
    <br />
    <button @click="clickFn">변경</button>
    <br />
    {{ msg }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref('초기값')
const clickFn = () => {
  msg.value = '변경된 값'
}
</script> -->

<template>
  <div>
    <h2>v - slot</h2>
    <h3>자식 컴포넌트 template</h3>
    <div class="a">
      <slot name="header">Header</slot>
    </div>
    <div class="a">
      <slot>Main Page</slot>
    </div>
    <div class="a">
      <slot name="footer">Footer</slot>
    </div>
  </div>
</template>
<style scoped>
.a {
  border: 1px solid red;
  margin: 20px;
}
</style>
<script setup></script>
