<template>
  <div class="userInfo">
    <userInfo></userInfo>
  </div>
</template>

<script>
import userInfo from "../common/userInfo.vue";
export default {
  date() {
    return {};
  },
  components: {
    userInfo
  }
};
</script>

<style>
/* #app .userInfo #userInfo { 1.改变子组件的样式
  width: 100% !important;
  
} */
</style> 

<style scoped>
/* 对于scoped属性， vue会在dom节点和css加上对应的data-v-属性 只对当前组件有效 避免了样式冲突 */
/* 对于当前页面引用别的组件，vue只会在别的组件最外层加上data-v-属性  里面没有加上data-v-属性，所以css找不到*/
/* 覆盖别的组件样式方式 1.重新建一个没有scoled的style  2.使用 <<< 来穿透*/
.userInfo {
  float: right;
  margin-right: 20px;
  width: 25%;
  box-sizing: border-box;
}

.userInfo #userInfo {
  width: 100%;
}

.userInfo #userInfo >>> .authorInfo {
  /* 使用 >>> 穿透来改变子组件的样式 */
  background: #a10;
}
</style>