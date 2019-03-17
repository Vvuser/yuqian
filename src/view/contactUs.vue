<template>
  <div>
    <div class="header">
      <img class="headerImg" src="../assets/imgs/u1253.jpg">
      <h1>亦城时代广场</h1>
    </div>
    <div class="title">
      <h1>联系我们</h1>
      <img src="../assets/imgs/u50.png">
      <h2>CONTACT US</h2>
    </div>
    <div class="msg">
      <div>
        <div class="tr">
          <div class="left">招商热线</div>
          <div class="right">8610-8673-9999</div>
        </div>
        <div class="tr">
          <div class="left">项目地址</div>
          <div class="right">
            <p>北京经济技术开发区</p>
            <p>经海四路与科创五街交叉口<span>（地铁17号线北神树站西侧）</span></p>
          </div>
        </div>
        <div class="tr">
          <div class="left">开发商</div>
          <div class="right">
            <p>北京亦庄盛元投资开发有限公司</p>
          </div>
        </div>
        <div class="tr">
          <div class="left">微信公众号</div>
          <div class="right">
            <p>亦城时代广场</p>
          </div>
        </div>
      </div>
      <div>
        <img src="../assets/imgs/u1267.jpg"/>
      </div>
    </div>
    <div class="map">
      <img src="../assets/imgs/u1300.png"/>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .map{
    margin-top: 40px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 985px;
      height: 730px;
    }
  }
  .msg{
    margin-top: 40px;
    display: flex;
    padding: 0 25%;
    justify-content: space-between;
    align-items: center;
    .tr{
      display: flex;
      margin-top: 20px;
      .left{
        color: #666666;
        font-size: 18px;
        font-weight: 700;
        width: 160px;
      }
      .right{
        color: #B28955;
        font-weight: 700;
        font-size: 18px;
        span{
          font-size: 12px;
        }
      }
    }
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    h1{
      font-size: 32px;
      color: #333;
      font-weight: bold;
    }
    h2{
      color: #B28955;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .header{
    position: relative;
    h1{
      position: absolute;
      font-size: 100px;
      width: 600px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: white;
      top: 50%;
      left: 50%;
      margin: -150px 0 0 -300px;
    }
  }
  .headerImg{
    width: 100vw;
    z-index: -1;
    opacity: 0.9;
  }
  .body{
    margin-top: -100px;
    width: 100vw;
    background: white;
  }
</style>
