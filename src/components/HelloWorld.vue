<script setup>
import {ref} from 'vue'
import {sayHello} from "../api/hello";

const count = ref(0)
const message = ref("小新的音乐后台")

const hi = () => {
  sayHello().then(request => {
    console.log(request)
    message.value = request.data
  })
}
</script>

<template>
  <h1>{{ message }}</h1>

  <q-btn color="primary" @click="count++">点击次数 {{ count }}</q-btn>
  <br>
  <br>
  <q-btn color="primary" @click="hi">请求函数</q-btn>


</template>

<style scoped>
a {
  color: #42b983;
}


</style>
