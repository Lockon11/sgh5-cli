<template>
    <div class="step2">
        <div class="step2_background"></div>
        <div class="step2_notice_box">
            <div class="step2_item">水平拍照</div>
            <div class="step2_item">光线适宜</div>
            <div class="step2_item">环境清晰</div>
        </div>
        <p class="step2_notice">
             此过程需要您本人完成，验证过程中请您注意以上几点
        </p>
         <button class="approve_next"  @click="next">开始检测</button>
    </div>
</template>

<script>
    export default {
        methods: {
            next() {
                this.$store.commit('SET_STEP',2)
                 this.$router.push({path:'/step3'})
            }
        },
    }
</script>

<style scoped lang="less">
.step2{
    .step2_background{
        height:450px;
        background-image: url('../../../static/images/approve/image_people@2x.png');
        background-repeat: no-repeat;
        background-size:cover;
    }   
    .step2_notice_box{
        width:605px;
        height:48px;
        margin:28px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .step2_item{
       width:96px;
       height:84px;
       font-size: 24px;
       color:#9a9a9a;
       line-height: 140px;
        background-position: top center;
    }
    .step2_item:nth-child(1){
        background-image: url('../../../static/images/approve/icon_shuipin@2x.png');
        background-repeat: no-repeat;
        background-size:48px;
    }
    .step2_item:nth-child(2){
        background-image: url('../../../static/images/approve/icon_guanxian@2x.png');
        background-repeat: no-repeat;
        background-size:48px;
    }
    .step2_item:nth-child(3){
        background-image: url('../../../static/images/approve/icon_huanjin@2x.png');
        background-repeat: no-repeat;
        background-size:48px;
     
    }
    .step2_notice{
        position: absolute;
        width:100%;
        height:24px;
        line-height: 24px;
        color:#9a9a9a;
        font-size: 24px;
        text-align: center;
        bottom:160px;
    }
    .approve_next{
        
        width:690px;
        height:88px;
        // margin:40px 30px;
        position: absolute;
        bottom:40px;
        left:30px;
        border:none;
        background: #338cfd;
        border-radius: 44px;
        font-size: 36px;
        color:#fff;
        font-weight: 550;
    }
   
}
</style>