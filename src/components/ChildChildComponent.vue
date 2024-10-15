<template>
  <div>
    <h2>Provide Inject</h2>
    <h3>손자 컴포넌트</h3>
    이름 : {{ props.user.name }} <br />
    나이 : {{ props.user.age }} <br />
    번호 : {{ props.user.tel }} <br />
    <br />
    제품번호 : {{ product.id }} <br />
    상품명 : {{ product.name }} <br />
    가격 : {{ product.price }} <br />
  </div>
</template>
<script setup>
import { defineProps, inject } from 'vue'
const props = defineProps({
  user: {
    Type: Object
  }
})
const product = inject('product')
</script>
