<template>
  <div>
    <h2>자식A에서 자식B 변경</h2>
    <h3>자식 컴포넌트 A</h3>
    <br />
    이름 : {{ props.user.name }} <br />
    나이 : {{ props.user.age }} <br />
    번호 : {{ props.user.tel }} <br />
    <button @click="clickFn">부모값 변경</button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps(['user'])
// props.user.name = 'Brand'             props는 readonly
// const u = props.user
// u.name = 'Brand'                      원하지 않는 컴포넌트까지 변경되어 버림
const newUser = {
  name: 'Jack',
  age: 32
}
const emit = defineEmits(['send-user'])
const clickFn = () => {
  emit('send-user', newUser)
}
</script>
