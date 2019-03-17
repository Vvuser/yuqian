<template>
  <div>
    <img class="headerImg" src="../assets/imgs/u1182.jpg">
    <div class="title">
      <h1>标准化物业</h1>
      <img src="../assets/imgs/u50.png">
      <h2>STANDARDIZED PROPERTY</h2>
    </div>
    <div class="row">
      <div class="item">
        <div class="box">
          <h1>物业顾问</h1>
          <h2>国贸酒店管理有限公司</h2>
          <p>国贸物业酒店管理有限公司借鉴国内外先进的管理方法，通过对标杆企业管控经验的潜心研究及多年服务经验积累,为项目提供了全方位的管理策略和专业化的解决方案,助力楼宇品质全面升级。</p>
        </div>
      </div>
      <div class="item">
        <div class="box">
          <h1>物业服务</h1>
          <h2>北京亦庄置业有限公司</h2>
          <p>北京亦庄置业有限公司通过多年的服务输出和品牌积累，已获得区域市场的高度认同。通过搭载先进的资产运营平台.智慧园区平台和配备高素质的管理团队,能够为入驻企业创造更加高效.舒适的商务办公体验。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .headerImg{
    width: 100vw;
    height: 560px;
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
  .row{
    margin-top: 40px;
    display: flex;
    padding: 0 18%;
    justify-content: space-between;
    .item{
      width: 575px;
      height: 291px;
      border: 1px solid rgba(178, 137, 85, 1);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      .box{
        width: 533px;
        height: 256px;
        background: url(../assets/imgs/u1188.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
          background: rgba(178, 137, 85, 1);
          width: 271px;
          height: 56px;
          border-radius: 10px;
          font-size: 32px;
          color: white;
          font-weight: bold;
          line-height: 56px;
          text-align: center;
        }
        h2{
          font-weight: bold;
          font-size: 18px;
          color: rgba(178, 137, 85, 1);
          margin: 20px 0;
        }
        p{
          font-size: 14px;
          color: #666;
          margin: 0 20px;
        }
      }
    }
  }
</style>
