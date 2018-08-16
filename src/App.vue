<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  },
}
</script>

<style lang="less">
html,body,#app{
  width: 100% ;
  height:100%;
  font-family: '微软雅黑';
}
input{
    outline: none;
}
h1,h2,h3,h4,h5,h6,p,input{
    margin: 0;
    padding: 0;
}
body {

  overflow-x: hidden;
}
#app{

}
  .van-dialog{
        width:472px;
        height:254px;
        border-radius: 8px;
        padding:0 30px;
        .van-dialog__header{
            height:143px;
            padding:0;
            font-size: 30px;
            color:#333333;
            line-height: 160px;
            border-bottom:1px solid #e4e4e4;
        }
        .van-dialog__footer{
            height:48px;
            margin-top:32px;
            .van-button__text{
                color:#3a8bf2;
                font-size: 32px;
            }
        }

    }
</style>
