import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import project from "@/view/project"
import situation from "@/view/situation"
import page from "@/view/page"
import positionAdvantage from "@/view/positionAdvantage"
import develop from "@/view/develop"
import businessCharacteristics from "@/view/businessCharacteristics"
import shengYuan from "@/view/shengYuan"
import estate from "@/view/estate"
import contactUs from "@/view/contactUs"

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      component: index
    },
    // 项目介绍 项目规划
    {
      path: '/project',
      component: project
    },
    // 项目概况
    {
      path: '/situation',
      component: situation
    },
    // 项目配置
    {
      path: '/page',
      component: page
    },
    // 区位优势
    {
      path: '/positionAdvantage',
      component: positionAdvantage
    },
    // 商务特色
    {
      path: '/businessCharacteristics',
      component: businessCharacteristics
    },
    // 开发实力 亦庄控股
    {
      path: '/develop',
      component: develop
    },
    // 亦庄盛元
    {
      path: '/shengYuan',
      component: shengYuan
    },
    // 标准化物业
    {
      path: '/estate',
      component: estate
    },
    // 联系我们
    {
      path: '/contactUs',
      component: contactUs
    },
    {
      path: '/*',
      component: index
    }
  ]
})
