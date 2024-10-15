<!-- <template>
  <div>
    <h2>부모 -> 자식 데이터 송신</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <br />
    <ChildComponent title="김병신" age="20" isTrue="false" /> <br />
    <ChildComponent :title="title" :age="age" :isTrue="isTrue" /> <br />
  </div>
</template>

<script setup>
import ChildComponent from '@/components/ChildComponent.vue'
const title = '십새끼'
const age = 24
const isTrue = false
</script> -->

<!-- <template>
  <div>
    <h2>유효성 검사</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <br />
    <ChildComponent
      :A="10"
      :B="'Hi'"
      :E="{ msg: 'hello~' }"
      :F="
        (a, b) => {
          return a + b
        }
      "
      :G="'경고'"
    />
    <br />
  </div>
</template>

<script setup>
import ChildComponent from '@/components/ChildComponent.vue'
</script> -->

<!-- <template>
  <div>
    <h2>Provide Inject</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <ChildComponent :user="user" />
  </div>
</template>

<script setup>
import ChildComponent from '@/components/ChildComponent.vue'
import { provide } from 'vue'
const user = {
  name: 'Jason',
  age: 30,
  tel: '111-222-333'
}
const product = {
  id: 100,
  name: 'computer',
  price: 1000000
}
provide('product', product)
</script> -->

<!-- <template>
  <div>
    <h2>부모에서 자식 이벤트 발생</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <ChildComponent ref="child_component" />
  </div>
</template>

<script setup>
import ChildComponent from '@/components/ChildComponent.vue'
import { onMounted, ref, useTemplateRef } from 'vue'
const child_component = ref()
const childRef = useTemplateRef('child_component')
onMounted(() => {
  childRef.value.$refs.btn.click()
  child_component.value.$refs.btn.focus()
})
</script> -->

<!-- <template>
  <div>
    <h2>부모에서 자식 함수 호출</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <button @click="clickFn">자식 함수 호출</button>
    <br />
    <ChildComponent ref="child_component" />
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'
const child_component = ref()
const chilRef = useTemplateRef('child_component')
const clickFn = () => {
  child_component.value.childFn('ref 이용해서 자식 함수 접근')
  chilRef.value.childFn('useTemplateRef 이용해서 자식 함수 호출')
}
</script> -->

<!-- <template>
  <div>
    <h2>부모에서 자식 변수 변경</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <button @click="clickFn">자식 변수 변경</button>
    <br />
    <ChildComponent ref="child_component" />
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'
const child_component = ref()
const childRef = useTemplateRef('child_component')
const clickFn = () => {
  child_component.value.msg1 = 'ref 이용 부모에서 자식 변수 변경'
  childRef.value.msg2 = 'useTemplateRef 이용 부모에서 자식 변수 변경'
}
</script> -->

<!-- <template>
  <div>
    <h2>자식에서 부모로 데이터 전달</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <ChildComponent @send_data="childMsg" />
    <br />
    {{ msg }}
  </div>
</template>

<script setup>
import ChildComponent from '@/components/ChildComponent.vue'
import { ref } from 'vue'

const msg = ref('')
const childMsg = (value) => {
  msg.value = value.name + ' : ' + value.age
}
</script> -->

<!-- <template>
  <div>
    <h2>자식변수 부모에서 동기화</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <ChildComponent :ref="child_component" />
    <br />
    {{ childMsg }}
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'
const child_component = ref('')
const childMsg = computed(() => {
  return child_component.value
})
</script> -->

<!-- <template>
  <div>
    <h2>자식A에서 자식B 변경</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    이름 : {{ user.name }} <br />
    나이 : {{ user.age }} <br />
    번호 : {{ user.tel }} <br />
    <br />
    <ChildA :user="user" @send-user="changeUser" />
    <br />
    <ChildB :user="user" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildA from '@/components/ChildA.vue'
import ChildB from '@/components/ChildB.vue'
const user = ref({
  name: 'jason',
  age: 24,
  tel: '010-1111-1111'
})
const changeUser = (value) => {
  user.value.name = value.name
  user.value.age = value.age
}
</script> -->

<template>
  <div>
    <h2>v - slot</h2>
    <h3>부모 컴포넌트</h3>
    <br />
    <ChildComponent />
    <br />
    <ChildComponent>
      <template v-slot:header> 제품 소개 페이지 </template>
      <template v-slot:default>
        <ul>
          <li>aaa</li>
          <li>bbb</li>
          <li>ccc</li>
        </ul>
      </template>
      <template v-slot:footer> FFFFOOOOOOTTTTTEEEERRRRR </template>
    </ChildComponent>
  </div>
</template>

<script setup>
import ChildComponent from '@/components/ChildComponent.vue'
</script>
