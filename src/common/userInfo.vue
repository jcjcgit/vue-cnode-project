<template>
  <div id="userInfo">
    <div class="authorInfo">
      <h2>作者</h2>
      <div>
        <img :src="userInfo.avatar_url" alt />
        <span class="username">{{userInfo.loginname}}</span>
        <h3>积分:{{userInfo.score}}</h3>
      </div>
    </div>
    <div class="recent_topic">
      <h2>作者最近主题</h2>
      <div class="topics">
        <router-link
          v-for="(topic,index) in userInfo.recent_topics"
          :key="index"
          :to="{name: 'article', params: {id: topic.id,name: topic.author.loginname}}"
        >{{topic.title}}</router-link>
      </div>
    </div>
    <div class="recent_replies">
      <h2>作者最新回复</h2>
      <div class="replies">
        <router-link
          v-for="(reply,index) in userInfo.recent_replies"
          :key="index"
          :to="{name: 'article', params: {name: reply.author.loginname,id: reply.id}}"
        >{{reply.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  props: ["name"],
  methods: {
    handle() {
      console.log(this.author);
    },
    getUserInfo() {
      this.axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.userInfo = res.data.data;
          console.log(this.userInfo);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getUserInfo();
  },
  watch: {
    $route: function() {
      this.getUserInfo();
    }
  }
};
</script>

<style lang="less" scoped>
.mixin() {
  line-height: 40px;
  padding-left: 20px;
  font-size: 16px;
  background: #eee;
}
#userInfo {
  width: 80%;
  margin: 20px auto;
}

.authorInfo {
  background: #fff;
  h2 {
    .mixin();
  }

  div {
    padding: 20px 10px;
    img {
      max-width: 60px;
      vertical-align: middle;
    }

    .username {
      line-height: 50px;
      display: inline-block;
      font-size: 20px;
    }

    h3 {
      font-size: 12px;
      margin-top: 10px;
    }
  }
}

.recent_topic,
.recent_replies {
  background: #fff;
  margin-top: 10px;
  h2 {
    .mixin();
  }

  .topics,
  .replies {
    padding-left: 20px;
    line-height: 30px;
    font-weight: 300;
    a {
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 12px;
      text-decoration: none;
      color: #a8a3a3;
    }
  }
}
</style>