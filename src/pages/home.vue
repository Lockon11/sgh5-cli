<template>
    <div class="home">
        <!-- <h2>内置模块</h2> -->
        <div class="card" v-for="(i,index) in cardList" :key="index" :style="{ borderLeft:'4px solid'+i.color}" @click="goTo(i.url)">
            <div class="circle" :style="{background:i.color,boxShadow:i.color1}">
                {{i.circle}}
            </div>
            <div class="rt">
                <p>{{i.title}}</p>
                <p>
                    {{i.explain}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                cardList: [
                    {   
                        circle:'Login',
                        title:'登录模块',
                        explain:'包含注册，登录，获取验证码，以及协议。',
                        color:'#25c7e9',
                        color1:'0 5px 15px 1px rgba(37, 199, 233 , 0.5)',
                        url:'/login'
                    },
                    {   
                        circle:'Tab',
                        title:'tab模块',
                        explain:'常见h5页面tab布局，可根据需要自行增加或删除。',
                        color:'#1bd5ca',
                        color1:'0 5px 15px 1px rgba(27, 213, 202 , 0.5)',
                        url:'/tabs'
                    },
                    {   
                        circle:'Face',
                        title:'人脸识别模块',
                        explain:'人脸识别，前端获取数据流程，可根据项目需要自行选择百度或是腾讯接口进行对接。',
                        color:'#2cd992',
                        color1:'0 5px 15px 1px rgba(44, 217, 146 , 0.5)',
                        url:'/approve'
                    },
                    {   
                        circle:'uiScript',
                        title:'小工具',
                        explain:'常用小工具，缓存、格式验证、数据操作等。',
                        color:'#25c7e9',
                        color1:'0 5px 15px 1px rgba(37, 199, 233 ,0.5)',
                        url:'http://192.168.10.9:3002/doc/#/uiScript/readMe'
                    },
                ]
            }
        },
        methods:{
            goTo(url){
                if(url.indexOf('http')>-1){
                    window.open(url); 
                }else{
                    this.$router.push({path:url});
                }
                 
            }
        },
        mounted(){
           
        }
    }
</script>

<style scoped lang="less">
.home{
    width:100%;
    height:100%;
    background: #f0f5f8;
    overflow: hidden;
    h2{
        margin-top:30px;
        padding:0 30px;
        color:#333;
    }
    .card{
        height:270px;
        background: #fff;
        margin:0 30px;
        padding:60px;
        box-sizing: border-box;
        color:#333;
        margin-top:30px;
        border-bottom:1px solid #dfdfdf;
        // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        p{
            
            font-size: 30px;
            font-family:PingFangSC-Regular, sans-serif;;
        }
        p:nth-child(1){
            color:#333;
            font-weight: 600;
        }
        p:nth-child(2){
            margin-top:10px;
            font-size: 26px;
        }
        .circle{
            width:120px;
            height:120px;
            border-radius: 100%;
            line-height:120px;
            text-align: center;
            font-size: 36px;
            color:#fff;
            float: left;
            margin-top:8px;
            font-weight: 700;
            font-family:  Arial;
            
        }
        .rt{
            float: right;
            height:127px;
            width:440px;
            box-sizing: border-box;
            padding-left:40px;
        }
    }
}
 
</style>