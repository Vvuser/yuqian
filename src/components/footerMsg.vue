<template>
  <div class="footer" v-show="isShow">
    <div class="bar">
        <div class="top"></div>
        <div class="center"></div>
        <div class="bottom"></div>
    </div>
    <div class="msg">
        <div class="left">
            <img src="../assets/imgs/u114.jpg">
        </div>
        <div class="center">
            <div class="title">关于亦城时代广场</div>
            <div v-for="(item,index) in list" :key="index" class="row">
                <div @click.stop="to(c_item.path)" v-for="(c_item,index) in item" :key="index">{{c_item.text}}</div>
            </div>
        </div>
        <div class="right">
            <p>8610-8673-9999</p>
            <p>yichengshidai@163.com</p>
            <div>
                <img src="../assets/imgs/u124.png">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: true,
            list: [[{
                path: '/project',
                text: '项目规划'
            },{
                text: "区位优势",
                path: "/positionAdvantage",
            },{
                text: "亦庄控股",
                path: "/develop"
            }],[{
                text: "项目概况",
                path: "/situation"
            },{
                text: "商务特色",
                path: "/businessCharacteristics",
            },{
                text: "亦庄盛元",
                path: "/shengYuan"
            }],[{
                text: "项目配置",
                path: "/page"
            },{
                text: "标准化物业",
                path: "/estate"
            }]]
        }
    },
    methods: {
        to(path) {
            this.$router.push({
                path
            })
        }
    },
    watch:{
        $route(e) {
            console.log(e)
            if(e.path === '/contactUs') {
                this.isShow = false
            }else{
                this.isShow = true
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .footer{
        margin-top: 40px;
        .bar{
            // width: 100vw;
            div{
                background: rgba(178, 137, 85, 1);
            }
            .top{
                height: 20px;
            }
            .center{
                height: 4px;
                margin-top: 2px;
            }
            .bottom{
                height: 4px;
                margin-top: 1px;
            }
        }
        .msg{
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            .center{
                margin-left: 200px;
                .title{
                    margin-bottom: 30px;
                    font-size: 18px;
                    color: #B28955;
                    font-weight: bold;
                }
                .row{
                    display: flex;
                    width: 300px;
                    justify-content: space-between;
                    margin-top: 20px;
                    color: #999999;
                    font-size: 12px;
                    div{
                        cursor: pointer;
                    }
                }
            }
            .right{
                margin-left: 200px;
                color: #B28955;
                font-size: 28px;
                font-weight: bold;
                p{
                    padding-left: 30px;
                }
            }
        }
    }
</style>
