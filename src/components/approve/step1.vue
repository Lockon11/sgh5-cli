<template>
    <div class="step1">
        <van-uploader :after-read="onReadFront" accept="image/*" class="approve_card_front" v-show="frontShow">
            <div class="card_front_content">
                <p>身份证正面（人像面）照片</p>
            </div>
        </van-uploader>
        <div id="frontShow" v-show="!frontShow">
            <span class="deleteImg" @click="deleteFront"></span>
            <!-- <img  :src="frontSrc" alt=""> -->
            <div class="show_img" :style="{backgroundImage:'url(\''+frontSrc+'\')'}"></div>
        </div>
       
        <van-uploader :after-read="onReadEnd" accept="image/*" class="approve_card_backend" v-show="backEndShow">
            <div class="card_backend_content">
                <p>身份证背面（国徽面）照片</p>
            </div>
        </van-uploader>
        <div id="backEndShow" v-show="!backEndShow">
            <span class="deleteImg" @click="deleteBackEnd"></span>
            <!-- <img  :src="backEndSrc" alt=""> -->
              <div class="show_img" :style="{backgroundImage:'url(\''+backEndSrc+'\')'}"></div>
        </div>
        <p class="step1_notice" v-show="isShow">
            请确认您的身份信息，如有误请重新上传
        </p>
        <van-cell-group v-show="isShow">
            <van-field
                v-model="username"
                label="姓名"
                disabled
            />
            <van-field
                v-model="cardCode"
                disabled
                label="证件号"
            />
        </van-cell-group>
        <button :class="{approve_next:true,approve_isNext:isShow}" :disabled="!isShow" @click="next">下一步</button>
    </div>
</template>

<script>
import { Uploader ,Field  ,CellGroup } from 'vant';
import Vue from 'vue';
Vue.use(Uploader).use(Field).use(CellGroup );
    export default {
        data() {
            return {
                frontShow: true,
                backEndShow: true,
                frontSrc:'',
                backEndSrc:'',
                username:'张三',
                cardCode:'422222123123122212'

            }
        },
        computed:{
            isShow(){
                if(!this.frontShow &&  !this.backEndShow){
                    return true 
                }else{
                    return false
                }
            }
        },
        methods:{
            onReadFront(file) {
                console.log(file)
                this.frontShow=false;
                this.frontSrc=file.content;
               
            },
            onReadEnd(file) {
                 console.log(file)
                 this.backEndShow=false;
                 this.backEndSrc=file.content;
            },
            deleteFront(){
                this.frontShow=true;
                this.frontSrc='';
            },
            deleteBackEnd(){
                this.backEndShow=true;
                this.backEndSrc='';
            },
            next(){
                this.$store.commit('SET_STEP',1)
                console.log(this.$store.state.step);
                this.$router.push({path:'/step2'})
                // this.active++;
                // if(this.active==4){
                //     this.active=0;
                // }
          
                
              
            },
        }
    }
</script>

<style lang="less">
.step1{
     background:#f3f3f3;

 .approve_card_front{
        width:690px;
        height:340px; 
        margin-left:30px;
        background: #fff;  
        border-radius: 10px;
        .card_front_content{
            width:100%;
            height:100%;
            position: relative;
            background-image: url('../../../static/images/approve/icon_shangchuang@2x.png');
            background-repeat: no-repeat;
            background-size:106px;
            background-position: center 68px;
            p{
                height:26px;
                line-height: 26px;
                text-align: center;
                width:100%;
                position: absolute;
                bottom:60px;
            }
        }
    }
    .approve_card_backend{
        width:690px;
        height:340px; 
        margin-top:20px;
        margin-left:30px;
        background: #fff;  
        border-radius: 10px;
        .card_backend_content{
            width:100%;
            height:100%;
            background-image: url('../../../static/images/approve/icon_shangchuang@2x.png');
            background-repeat: no-repeat;
            background-size:106px;
            background-position: center 68px;
              p{
                height:26px;
                line-height: 26px;
                text-align: center;
                width:100%;
                position: absolute;
                bottom:60px;
            }
        }
    }
    #frontShow{
        width:690px;
        height:340px; 
        margin-left:30px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
       
      
    }
    #backEndShow{
        width:690px;
        height:340px; 
        margin-top:30px;
        margin-left:30px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
       
    }
     .show_img{
        width:100%;
        height:100%;
        background-size:cover;
        background-repeat: no-repeat;
    }
      .deleteImg{
            padding:24px;
            border-radius: 100%;
            position: absolute;
            background-image: url('../../../static/images/approve/icon_shandiao@2x.png');
            background-repeat: no-repeat;
            background-size:48px;
            right:18px;
            top:18px;
        }
    .approve_next{
        
        width:690px;
        height:88px;
        margin:40px 30px;
        border:none;
        background: #8bbeff;
        border-radius: 44px;
        font-size: 36px;
        color:#fff;
        font-weight: 550;
    }
    .approve_isNext{
        background: #338cfd;
    }
    .step1_notice{
        padding:0 30px;
        height:98px;
        line-height: 98px;
        font-size: 26px;
        text-indent:46px;
        background-image: url('../../../static/images/approve/icon_tisi@2x.png');
        background-repeat: no-repeat;
        background-size: 28px;
        background-position: 30px center;
        color:#9a9a9a;
    }
    .van-field{
        height:100px;
        padding:0 30px;
        .van-cell__title{
            width:92px;
            height:100px;
            line-height: 100px;
            span{
                display: block;
                text-align-last: justify;
                font-size: 30px;
                color:#333333;
            }
        }
        .van-cell__value{
            .van-field__control{
                height:100px;
                text-indent:30px;
                font-size: 30px;
                color:#565555;
            }
                
        }
    }

   
}
</style>