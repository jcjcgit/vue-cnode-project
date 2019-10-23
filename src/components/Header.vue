<template>
    <div class="head">
        <div class="head-left"></div>
        <div class="head-right">
            <a href="">关于</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .head {
        height: 60px;
        background: #5a5555;
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