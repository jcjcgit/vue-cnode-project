<template>
  <div class="wrap">
    <div v-if="show">Loading......</div>
    <div v-else id="list">
      <ul>
        <li v-for="(info, index) in listInfo" :key="index">
          <span class="picture">
            <router-link :to="{name: 'userInfo', params: {name:info.author.loginname} }">
              <img :src="info.author.avatar_url" alt />
            </router-link>
          </span>
          <span class="count">{{info.reply_count}}/{{info.visit_count}}</span>
          <h1 class="list-title">
            <!-- <div v-html="info.title" @click="toArticle(info.id,info.author.loginname)"></div> -->
            <router-link
              :to="{name: 'article', params: {id: info.id, name: info.author.loginname}}"
            >{{info.title}}</router-link>
          </h1>
          <span class="replyDate">{{info.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from "vue-router";
export default {
  data() {
    return {
      listInfo: [],
      show: true
    };
  },
  methods: {
    handle() {
      console.log(this.listInfo);
    },
    toArticle(id, name) {
      console.log(1);
      this.$router.push({
        name: "article",
        params: {
          id,
          name
        }
      });
    },
    getPostList() {
      this.axios
        .get("https://cnodejs.org/api/v1/topics")
        .then(res => {
          this.listInfo = res.data.data;
          this.show = false;
          console.log(this.listInfo);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getPostList();
  }
};
</script>

<style lang="less" scoped>
#list {
  width: 90%;
  margin: 5px auto;
  background-color: #fff;
}

ul li {
  padding: 5px 10px;
  border-bottom: 1px solid #ccc;
}

ul li .picture img {
  width: 30px;
}

.count {
  margin-left: 30px;
  width: 100px;
  display: inline-block;
}

.list-title {
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  width: 70%;
  a:link {
    color: #333;
    text-decoration: none;
  }
  a:visited {
    color: #ccc;
  }
}

.replyDate {
  margin-right: 20px;
  float: right;
  font-size: 12px;
  color: #ccc;
  margin-top: 10px;
}

.list-title div {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>