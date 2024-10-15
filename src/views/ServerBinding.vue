<!-- <template>
  <div>
    <h2>Postman - Axios</h2>
    <button @click="getUsers()">보기</button>
    <br />
    <table border="1" v-show="userList[0]">
      <thead>
        <th>아이디</th>
        <th>이름</th>
        <th>나이</th>
        <th>번호</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userList" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.tel }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
const userList = ref([])
const getUsers = () => {
  console.log('axios 요청')
  axios
    .post('https://84ac30a5-10ec-4434-bf94-ff3742299b07.mock.pstmn.io/test')
    .then((res) => {
      console.log('res : ', res)
      userList.value = res.data
    })
    .catch((res) => {
      console.error(res)
    })
}
</script> -->

<!-- <template>
  <div>
    <h2>Postman - Axios</h2>
    <br />
    <form method="post" action="https://84ac30a5-10ec-4434-bf94-ff3742299b07.mock.pstmn.io/test">
      <div>아이디</div>
      <div>
        <input type="text" name="id" />
      </div>
      <br />
      <input type="submit" value="전송" />
      <br />
    </form>
    <input type="button" value="확인" @click="getUsers()" />
    <br />
    사용자
    <p v-html="result"></p>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
const result = ref([])
const id = ref([])
const getUsers = () => {
  let params = {
    id: id.value
  }
  let config = {
    header: {
      'content-type': 'application/json'
    }
  }
  axios
    .post('https://84ac30a5-10ec-4434-bf94-ff3742299b07.mock.pstmn.io/test', params, config)
    .then((res) => {
      console.log(res.data.id)
      result.value =
        '아이디 : ' +
        res.data[0].id +
        '이름 : ' +
        res.data[0].name +
        '나이 : ' +
        res.data[0].age +
        '번호 : ' +
        res.data[0].tel
    })
    .catch((res) => {
      console.error(res)
    })
}
</script> -->

<template>
  <div>
    <h2>Chart</h2>
    <br />
    <canvas ref="lineChart"></canvas>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
const lineChart = ref('HTMLCanvasElement | undefined')
const context = ref('CanvasRenderingContext2D | undefined')
onMounted(() => {
  context.value = lineChart.value?.getContext('2d') || undefined
  let chart = new Chart(context.value, {
    type: 'line',
    data: {
      labels: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
      ],
      datasets: [
        {
          label: '출석 일 수',
          backgroundColor: 'rgb(200,100,50)',
          borderColor: 'rgb(50,100,200)',
          data: [20, 30, 28, 27, 18, 22, 29, 24, 23, 27, 21, 25]
        }
      ]
    },
    options: {}
  })
  console.log(chart)
})
</script>
