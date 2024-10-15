<!-- <template>
  <div>
    <h2>Options API</h2>
    <br />
    <p>{{ message }}</p>
    <p>{{ a }}</p>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  components: {}, // 외부 컴포넌트 등록
  data: () => {
    return {
      a: 10,
      message: 'Vue Hello'
    }
  },
  methods: {
    add() {
      return (this.a += 10)
    }
  },
  setup() {
    console.log('set up')
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
<style></style> -->

<!-- <template>
  <div>
    <h2>Composition API</h2>
    {{ message }}
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  setup() {
    const message = 'Hell yeah!!!!'
    onMounted(() => {
      console.log('on Mounted')
    })
    return {
      message
    }
  }
}
</script> -->

<template>
  <div>
    <h2>Script Setup</h2>
    {{ message }}
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
const message = 'hihihihi'
onMounted(() => {
  console.log('on mounted')
})
</script>
