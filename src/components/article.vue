<template>
  <div class="wrap">
    <div v-if="show">Loading......</div>
    <div v-else class="article-section">
      <div id="article">
        <h1 class="title" v-html="article.title"></h1>
        <div class="detail">
          <span>•分类:问答</span>
          <span>•{{article.visit_count}}次访问</span>
          <span>•发布于:{{article.create_at | formatDate }}</span>
          <span>•作者:{{name}}</span>
        </div>
        <div class="content" v-html="article.content"></div>
      </div>
      <div id="replies">
        <ul>
          <li v-for="(item, index) in article.replies" :key="index">
            <span>
              <img :src="item.author.avatar_url" alt />
            </span>
            <span>{{item.author.loginname}}</span>
            <span>{{index + 1}}楼</span>
            <p class="comment" v-html="item.content"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
      show: true
    };
  },
  props: ["id", "name"],
  methods: {
    handle() {
      console.log(this.article);
    },
    getDate() {
      this.axios
        .get(`https://cnodejs.org/api/v1/topic/${this.id}`)
        .then(res => {
          this.article = res.data.data;
          this.show = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getDate();
  },
  watch: {
    $route: function() {
      this.getDate();
    }
  }
};
</script>

<style lang="less"> //没有scoped 用于外部组件或者v-html内容
.content {
  .markdown-text {
    word-break: break-all;
    font-size: 14px;
    line-height: 30px;
    text-indent: 20px;

    pre {
      white-space: pre-wrap;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>

<style lang="less" scoped>
.mixin() {
  background: #fff;
  padding: 20px;
}

.wrap {
  width: 70%;
  float: left;
  margin-left: 3%;
}

.article-section {
  word-break: break-all;
  word-wrap: break-word;

  padding: 20px;
  box-sizing: border-box;
  #article {
    .mixin();
    .title {
      font-size: 18px;
    }

    .detail {
      margin: 10px 0;
      font-size: 14px;
      color: #ccc;

      span {
        margin: 0 10px;
        color: #f00;
      }
    }
  }

  #replies {
    background: #fff;
    margin-top: 10px;

    ul li {
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      padding: 10px 20px;
      span {
        line-height: 50px;
        display: inline-block;
        img {
          max-width: 50px;
          vertical-align: middle;
        }
      }

      p.comment {
        text-indent: 20px;
      }
    }
  }
}
</style>>
  