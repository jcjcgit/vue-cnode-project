<template>
  <div id="list">
    article list page
    <button @click="handle">bbb</button>
    <ul>
      <li v-for="(info, index) in listInfo" :key="index">
        <span>
          <router-link :to="{name: 'userInfo', params: {name:info.author.loginname} }">
            <img :src="info.author.avatar_url" alt />
          </router-link>
        </span>
        <span>{{info.reply_count}}/{{info.visit_count}}</span>
        <h1>
          <router-link :to="{name: 'article', params: {id: info.author_id, name: info.loginname}}">
            <div v-html='info.title'></div>
          </router-link>
        </h1>
      </li>
    </ul>
    <router-link :to="{name: 'article', params: {id: 1223,name: 'jc'}}">to article</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      listInfo: []
    };
  },
  methods: {
    handle() {
      console.log(this.listInfo);
    }
  },
  created() {
    axios
      .get("https://cnodejs.org/api/v1/topics")
      .then(res => {
        this.listInfo = res.data.data;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>