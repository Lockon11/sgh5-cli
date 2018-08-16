<template>
  <div class="my-tabbar">
   
         <van-tabbar v-model="active" id="tabbar" replace="true" @change="changeTab(active)">
             <van-tabbar-item to="/page1"> 
                <span>page1</span>
                <template slot="icon" slot-scope="props">
                <img class="icon_img" :src="props.active ? icon[0].active : icon[0].normal" />
                </template>
            </van-tabbar-item>
             <van-tabbar-item to="/page2">
                <span>page2</span>
                <template slot="icon" slot-scope="props">
                <img class="icon_img" :src="props.active ? icon[1].active : icon[1].normal" />
                </template>
            </van-tabbar-item>
             <van-tabbar-item to="/page3">
                <span>page3</span>
                <template slot="icon" slot-scope="props">
                <img class="icon_img" :src="props.active ? icon[2].active : icon[2].normal" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
       
    
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

  export default {
    components: {
       
    },
    data() {
      return {
       active: 0,
        icon:[
            {
                normal: '../../static/images/tabbar/icon_shouye@3x.png',
                active: '../../static/images/tabbar/icon_shouyexuanzhong@3x.png'
             },
         
            {
                normal: '../../static/images/tabbar/icon_xiaoxi@3x.png',
                active: '../../static/images/tabbar/icon_xiaoxixuanzhong@3x.png'
             },
            {
                normal: '../../static/images/tabbar/icon_wode@3x.png',
                active: '../../static/images/tabbar/icon_wodexuanzhong@3x.png'
             },

        ] 
      }
    },
    methods:{
        changeTab(t){
            sessionStorage.setItem('active', t);
        }
    },
    mounted(){
        this.active=parseInt(sessionStorage.getItem('active'))?parseInt(sessionStorage.getItem('active')):0;
    }
    
   
  }
</script>

<style lang="less">
#tabbar{
    height:98px;
   .van-tabbar-item__icon .icon_img{
        width:44px;
        height:44px;
    }
    .van-icon__info{
        width:34px;
        height:34px;
        // padding:0 10px;
        border-radius: 17px;
        text-align: center;
        line-height: 34px;
        left:10px;
        top:-8px;
        font-size: 18px;
        font-weight: 550;
    }
    .van-tabbar-item span{
        font-size: 24px;
    }
}
</style>
