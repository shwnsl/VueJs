<template>
  <div>
    <h2>자식A에서 자식B 변경</h2>
    <h3>자식 컴포넌트 B</h3>
    <br />
    이름 : {{ props.user.name }} <br />
    나이 : {{ props.user.age }} <br />
    번호 : {{ props.user.tel }} <br />
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps(['user'])
</script>
