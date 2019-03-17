<template>
  <div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide class="ss_box">
        <img src="../assets/imgs/u1.jpg">
        <div class="boxbg"></div>
        <div class="box">
          <p>亦庄路东区</p>
          <p>商务综合体标杆</p>
        </div>
      </swiper-slide>
      <swiper-slide class="ss_box">
        <img src="../assets/imgs/u11.jpg">
        <div class="boxbg"></div>
        <div class="box">
          <p>43万㎡</p>
          <p>国际甲级写字楼集群</p>
        </div>
      </swiper-slide>
      <swiper-slide class="ss_box">
        <img src="../assets/imgs/u30.jpg">
        <div class="boxbg"></div>
        <div class="box">
          <p>170-486㎡</p>
          <p>绿色商务办公 自由分割</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <div class="title">
      <h1>项目概况</h1>
      <img src="../assets/imgs/u50.png">
      <h2>PROJECT PROFILE</h2>
    </div>
    <div class="context">
      <p>亦城时代广场由北京亦庄盛元投资开发有限公司开发，总建筑面积约43万㎡，由12栋建筑组成的商务甲级写字楼聚落，项目位于北京经济技术开发区路东区，地处经海路与科创五街主干道交叉口，毗邻在建的地铁17号线北神树站。</p>
    </div>

    <swiper :options="swiperOption1" class="lsiwper">
      <swiper-slide  class="ss_box" v-for="(item, index) in s1" :key="index">
        <img :src="item.img">
        <p>{{item.text}}</p>
      </swiper-slide>
    </swiper>
    <p class='s_text'>{{text}}</p>
    <div class="board">
      <img class="bg" src="../assets/imgs/u13.jpg">
      <div class="mapBox">
        <img class="map" src="../assets/imgs/u105.png" alt="">
        <img class="poi" :src="poiUrl">
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import jpg1 from '../assets/imgs/u65.jpg'
import jpg2 from '../assets/imgs/u66.jpg'
import jpg3 from '../assets/imgs/u67.jpg'
import jpg4 from '../assets/imgs/u63.jpg'
import jpg5 from '../assets/imgs/u64.jpg'
import poiBig from '../assets/imgs/u107.png'
import poiSmall from '../assets/imgs/u108.png'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      poiUrl: poiBig,
      s1:[{
        text:"项目东南角慢跑道",
        img: jpg1
      },{
        text:"Q3底广场",
        img: jpg2
      },{
        text:"Q3公益图书馆",
        img: jpg3
      },{
        text:"Q5临街商业",
        img: jpg4
      },{
        text:"T9办公区域",
        img: jpg5
      }],
      text:"",
      swiperOption: {
        loop: true,
        // 滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        // 上一张，下一张
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperOption1: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
.swiper {
  .ss_box {
    position: relative;
  }
  img {
    width: 100vw;
    height: 920px;
  }
  .boxbg {
    position: absolute;
    width: 1190px;
    height: 500px;
    left: 50%;
    top: 50%;
    margin-left: -595px;
    margin-top: -250px;
    background: black;
    opacity: 0.5;
  }
  .box {
    position: absolute;
    width: 1190px;
    height: 500px;
    left: 50%;
    top: 50%;
    margin-left: -595px;
    margin-top: -250px;
    font-size: 110px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
}
.title{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 32px;
    font-weight: bold;
  }
  h2{
    font-size: 24px;
    color: #b28955;
  }
}
.context{
  display: flex;
  justify-content: center;
  margin-top: 40px;
  p{
    text-align: center;
    font-size: 18px;
    width: 980px; 
  }
}
.board{
  margin-top: 40px;
  position: relative;
  .map{
    width: 800px;
    height: 800px;
  }
  .mapBox{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -400px;
    margin-left: -400px;
  }
  .poi{
    position: absolute;
    width: 20px;
    height: 30px;
    top: 62%;
    left: 40.5%;
  }
  .bg{
    width: 100%;
    height: 798px;
    opacity: 0.7;
  }
}
.lsiwper{
  margin-top: 40px;
  .ss_box{
    width: 480px;
  }
  img{
    width: 480px;
    height: 320px;
  }
  p{
    width: 100%;
    text-align: center;
    color: #b28955;
    font-size: 20px;
  }
}
</style>
