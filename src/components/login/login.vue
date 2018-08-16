<template>
    <div class="login">
        <!-- <p class="sign_up_title">
            手机号登录
        </p>
        <p class="sign_up_explain">
            使用此账号登录以使用更多服务
        </p>   -->
        <div class="sign_up_phone">
            <p>手机号</p>
            <div :class="{sign_up_phone_input:true,on_focus:onPhone}">
                <input type="number" v-model="phoneNumber" maxlength="11" @focus="onInput" @blur="unInput">
                <span class="sign_up_clear" v-show="onPhone && phoneNumber.length>0" @click="clear"></span>
                <button :class="{sign_up_code_btn:true,isClick:isClick}" :disabled="isClick" @click="getCode">获取验证码</button>
            </div>
        </div>
        <div class="sign_up_code">
            <p>验证码</p>
            <div :class="{sign_up_code_input:true,on_focus:onCode}">
                <input type="number" v-model="code" maxlength="6" @focus="codeInput" @blur="codeUnInput">
                <span class="sign_up_clear" v-show="onCode && code.length>0" @click="clearCode"></span>
            </div>
        </div>
        <button :class="{sign_up_submit:true,sign_up_isSubmit:!isClick && code.length==6}" :disabled="!(!isClick && code.length==6)" @click="submit">注册</button>
        <p class="sign_up_go" @click="signup">已有账号？去登录</p>
        <div class="sign_up_wechat"></div>
        <p class="sign_up_bottom">
            注册/登录即代表同意 <a href="javascript:;">《xxxx用户协议》</a>    
        </p>
    </div>
</template>

<script>
import sgDialog from '../sgDialog'
    export default {
        components:{
            sgDialog
        },
        data() {
            return {
                onPhone: false,
                onCode:false,
                phoneNumber:'',
                countdown:60,
                disabled:false,
                buttonTxt:'获取验证码',
                isClick:true,
                code:'',
                isSubmit:false,
                show:true,
                isCheck:true,
                isShow:false
            }
        },
        watch:{
            phoneNumber(){
                if(this.phoneNumber.length==11){
                    this.isClick=false;
                }else{
                     this.isClick=true;
                }
            }
        },
        methods:{
            onInput(){
               
               this.onPhone=true
               let sign_up_phone = document.querySelector('.sign_up_phone');
               let position=uiScript.getDomPosition(sign_up_phone);
               window.scrollTo(100,position.top);
            },
            unInput(){
                this.onPhone=false
            },
            codeInput(){
                 this.onCode=true
            },
            codeUnInput(){
                this.onCode=false
            },
            clear(){
                this.phoneNumber=''
            },
            clearCode(){
                this.code=''
            },
            getCode(){
                let btn = document.querySelector('.sign_up_code_btn');
                uiScript.resend(btn);
                
            },
            submit(){
                this.isShow=true;
                console.log(222);
              
            },
            signup(){
                this.$router.push({path:'/signup'})
            },
            cancelCheck(){
                console.log(222);
            },
            confirmCheck(){
                console.log(333);
                this.$router.push({path:'/approve'});
            },
            closeDialog(){
                this.isShow=false;
            }
        },
    }
</script>

<style scoped lang="less">
.login{
    height:100%;
    padding:0 30px;
    overflow: hidden;
    background-image:url('../../../static/images/login/image_pg@2x.png');
    background-repeat: no-repeat;
    background-position:center bottom;
    background-size:750px;
    position: relative;
    .sign_up_title{
        height:76px;
        line-height: 76px;
        font-size: 60px;
        color:#333333;
        font-weight: 500;
        
        margin-top: 62px;
    }
    .sign_up_explain{
        height:50px;
        line-height: 50px;
        color:#9a9a9a;
        font-size: 28px;
       
        
    }
    .sign_up_phone{
        margin-top:30px;
        p{
            height:62px;
            line-height: 62px;
            color:#333333;
            font-size: 28px;
        }
        .sign_up_phone_input{
            height:80px;
            overflow: hidden;
            border-bottom:2px solid #e4e4e4;   
            position: relative;
            input{
                width:347px;
                height:70px;
                line-height: 70px;
                font-size: 48px;
                color:#333333;
                border:none;
                margin-top:5px;
            }
            .sign_up_clear{
                padding:22px;
                position: absolute;
                background-image: url('../../../static/images/message/icon_qinchu@2x.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size:22px 22px;
                top:18px;
                left:423px;
            }
            .sign_up_code_btn{
                float:right;
                width:300px;
                height:70px;
                font-size:28px;
                border:none;
                text-align:right;
                margin-top:5px;
                color:#333333;
                background: #fff;
            }
            .isClick{
                color:#9a9a9a;
            }
        }
        .on_focus{
            border-color:#338cfd;
        }
    }
    .sign_up_code{
        margin-top:60px;
        p{
            height:62px;
            line-height: 62px;
            color:#333333;
            font-size: 28px;
        }
        .sign_up_code_input{
            height:80px;
            overflow: hidden;
            border-bottom:2px solid #e4e4e4;   
            position: relative;
            input{
                width:347px;
                height:70px;
                line-height: 70px;
                font-size: 48px;
                color:#333333;
                border:none;
                margin-top:5px;
            }
            .sign_up_clear{
                padding:22px;
                position: absolute;
                background-image: url('../../../static/images/message/icon_qinchu@2x.png');
                background-repeat: no-repeat;
                background-position: center right;
                background-size:22px 22px;
                top:18px;
                right:0;
            }
            .sign_up_code{
                float:right;
                width:220px;
                height:70px;
                border:none;
                margin-top:5px;
                color:#333333;
                background: #fff;
            }
            .isClick{
                color:#9a9a9a;
            }
        }
        .on_focus{
            border-color:#338cfd;
        }
    }
    .sign_up_submit{
        width:690px;
        height:88px;
        margin-top:90px;
        border:none;
        background: #8bbeff;
        border-radius: 44px;
        font-size: 36px;
        color:#fff;
        font-weight: 550;
    }
    .sign_up_isSubmit{
        background: #338cfd;
    }
    .sign_up_go{
        height:90px;
        line-height:90px;
        text-align:center;
        font-size:28px;
        color:#565555;
    }
    .sign_up_wechat{
        width:80px;
        height:80px;
        position:absolute;
        bottom:130px;
        left:335px;
        background-image:url('../../../static/images/login/icon_weixin@2x.png');
        background-repeat: no-repeat;
        background-size:cover;
    }  
    .sign_up_bottom{
        width:690px;
        height:92px;
        font-size:22px;
        text-align:center;
        position:absolute;
        bottom:37px;
        line-height:92px;
        color:#9a9a9a;
        a{
            color:#9a9a9a;
            text-decoration:underline;
        }
    } 
    .login_dialog_content{
        position:relative;
        border-bottom:1px solid #e4e4e4;
        .login_dialog_content_top{
            height:108px;
            line-height:108px;
            text-indent:70px;
            font-size:28px;
            color:#333333;
            .login_dialog_approve{
                color:#3a8bf2;
            }
            .message_check{
                display: block;
                padding: 18px;
                border: 2px solid #9a9a9a;
                position: absolute;
                border-radius: 100%;
                top:36px;
                left:13px;
            }
            .message_isCheck{
                padding:20px;
                border:none;
                background-image: url('../../../static/images/message/icon_gouxuan@2x.png');
                background-repeat: no-repeat;
                background-size:40px 40px;
            }
        }
        .login_dialog_explain{
            height:72px;
            margin-bottom:33px;
            color:#9a9a9a;
            font-size:28px;
            line-height:36px;
        }
    }
}
</style>