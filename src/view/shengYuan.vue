<template>
  <div>
    <img class="headerImg" src="../assets/imgs/u1122.jpg">
    <div class="title">
      <h1>亦庄盛元</h1>
      <img src="../assets/imgs/u50.png">
      <h2>YIZHUANGSHENGYUAN</h2>
    </div>
    <div class="content">
        <p>北京亦庄盛元投资开发有限公司是北京亦庄投资控股有 限公司(国有独资)下属的全资子公司。按照战略部署，承担开发区“助推产业转型升级,打造高端创新台、提升城市功能品质、服务区域经济发展”之历史使命。亦庄盛元始终秉承“盛德日新,元善致诚”之核心价值观，致力于成为区域城市综合体开发建设、运营管理的领跑者和区域产业转型升级、城市更新的主力军,是高精尖科技创新型企业的最佳合作伙伴。而今,盛元地产以亦城时代广场为载体,盛邀中国时代仁人志士，践行中国科创之梦,向伟大时代致敬。</p>
    </div>
    <div class="bodyImg">
      <img src="../assets/imgs/u1127.jpg">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .bodyImg{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    img{
      width: 1200px;
      height: 762px;
    }
  }
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
  .content{
    margin-top: 40px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    p{
      width: 1180px;
      color: #666;
      text-align: center;
    }
  }
</style>
