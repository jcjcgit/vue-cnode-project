<template>
  <div class="head">
    <div class="head-left icon-logo">
      <router-link :to="{name: 'home'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconcnodejs_light" />
        </svg>
      </router-link>
    </div>
    <div class="head-right">
      <a href>关于</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lagn="less">
.head {
  height: 60px;
  background: #5a5555;
}
.head-left {
  float: left;
}

.icon {
  font-family: "iconfont";
  height: 30px;
  margin-top: 10px;
}

.head-right {
  float: right;
  margin-right: 100px;
}

.head-right a {
  line-height: 60px;
  color: #cbc9c9;
  font-size: 20px;
  text-decoration: none;
}
</style>