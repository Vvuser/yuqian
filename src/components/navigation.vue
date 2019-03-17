<template>
  <div>
      <div class="nav">
          <div class="loge">
              <img src="../assets/imgs/u145.png">
          </div>
          <ul class="navBox">
              <li class="item" v-for="(item, index) in navList" :key="index" @click="to(item.path)">
                    <span>{{item.text}}</span>
                    <div class="b_border"></div>
                    <ol>
                        <li  v-for="(c_item, index) in item.child" :key="index" @click.stop="to(c_item.path)">
                            <span>{{c_item.text}}</span>
                        </li>
                    </ol>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [{
                text: "首页",
                path: "/index",
                child: []
            },{
                text: "项目介绍",
                path: "/project",
                child: [{
                    text: "项目规划",
                    path: "/project"
                },{
                    text: "项目概况",
                    path: "/situation"
                },{
                    text: "项目配置",
                    path: "/page"
                }]
            },{
                text: "区位优势",
                path: "/positionAdvantage",
                child: []
            },{
                text: "商务特色",
                path: "/businessCharacteristics",
                child: []
            },{
                text: "开发实力",
                path: "/develop",
                child: [{
                    text: "亦庄控股",
                    path: "/develop"
                },{
                    text: "亦庄盛元",
                    path: "/shengYuan"
                },{
                    text: "标准化物业",
                    path: "/estate"
                }]
            },{
                text: "联系我们",
                path: "/contactUs",
                child: []
            }]
        }
    },
    methods: {
        to(path) {
            this.$router.push({
                path
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .nav{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        height: 100px;
        width: 100vw;
        font-size: 24px;
        display: flex;
        align-items: center;
        padding-left: 300px;
        background: rgba(0, 0, 0, 0.5);
        .logo{
            img{
                width: 300px;
                height: 60px;
            }
        }
        .navBox{
            margin-left: 60px;
            display: flex;
            position: relative;
            .item{
                margin-right: 20px;
                width: 120px;
                height: 100px;
                color:#DCA969;
                text-align: center;
                line-height: 100px;
                font-weight: bold;
                cursor: pointer;
                .b_border{
                    visibility: hidden;
                    width: 120px;
                    height: 3px;
                    background:  #E1AD00;
                }
                ol{
                    position: absolute;
                    visibility: hidden;
                    top: 100px;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 0 0 8px 8px;
                    li{
                        font-size: 20px;
                        width: 120px;
                        height: 60px;
                        color:#DCA969;
                        text-align: center;
                        line-height: 60px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                    li:hover{
                        color:rgb(178, 137, 85);
                    }
                }
                ol:hover, .b_border:hover{
                    visibility: visible;
                }
            }
            .item:hover{
                color:rgb(178, 137, 85);
                ol{
                    visibility:visible;
                }
                .b_border{
                    visibility:visible;
                }
            }
            
        }
    }
</style>
