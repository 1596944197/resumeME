<script setup lang="ts">
import { ref } from 'vue'
import EducationSection from './components/EducationSection.vue'
import HeaderSection from './components/HeaderSection.vue'
import LeftContentSection from './components/LeftContentSection.vue'
import LinkSection from './components/LinkSection.vue'
import PageSection from './components/PageSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import SocialSection from './components/SocialSection.vue'
import WorksSection from './components/WorksSection.vue'
import type { EducationProps, LinkProps, ProductProps, WorksProps } from './types/app'

const direction = ref<'left' | 'top'>('top')

const professionSkills = ref([
  '具备良好的<NodeJS、TS、Vue、react、electron、puppeteer、小程序>等工具的实操经验以及快速上手能力',
  `具备良好的<业务拆解能力>，能对业务按需求、功能划分成相应的函数，组件等，实践中<大量使用函数式>编程`,
  '具备良好的<debugger>能力，能在<不同环境>下对JS代码进行调试，熟悉<SourceMap>的使用',
  `熟悉前端性能优化的实现，例如<代码优化、打包优化、资源优化>能结合实际业务场景进行优化`,
  `熟悉<webpack/vite/tsup/bun/docker> 等打包工具的基本配置，能结合业务进行<二次封装>`,
  `熟悉代码开发到上线全流程，对<协同开发、分支管理、项目配置> 等都有实践，有对<千星开源项目ChatGPT-Desktop（tarui项目)>做过贡献`,
])

const works = ref<WorksProps['works']>([
  {
    company: '广州XXXX有限公司',
    time: '2024年2月—2024年10月',
    role: 'Node开发',
    depart: 'CRM部',
  },
  {
    company: '广东XXXX有限公司',
    time: '2022年6月—2024年1月',
    role: '前端开发',
    depart: '创新业务部',
  },
  // {
  //   company: '广东睿佳医疗科技有限公司(实习)',
  //   time: '2021年12月—2022年5月',
  //   role: '前端开发',
  //   depart: '研发部'
  // }
])

const linkInfo = ref<LinkProps>({
  email: 'a2339822910@gmail.com',
  phone: '1302580XXXX',
  experience: '3',
})

const product1 = ref<ProductProps>({
  role: [
    '负责<调度器>的<开发和部署>',
    '负责自动化脚本<基层功能支持>',
    '负责与自动化脚本<管理后台人员进行功能协调，需求探讨>等',
  ],
  title: 'FB自动化脚本',
  time: '2024年2月—2024年10月',
  bg: [
    `为<提升营销效率>，团队计划开发一款专门服务于<FB、TW等平台的自动化脚本>，
    该脚本实现了自动预览养号、自动加群、群组发帖、自动加好友和自动聊天回复等功能，并且编写了一个<任务调度器进行全自动调度>`,
  ],
  result: [
    '<express>搭建调度器，最终实现<可根据账号状态分发任务>，Json配置文件以设置脚本参数、优先级、时间间隔等',
    '优化基础脚本使其<更具有拟人随机性操作>，最终配合调度机制使其周百号<封号率由60%降低至15%>',
  ],
  skills: [
    'puppeteer、express、redis、docker、postgresql、AppIum、S3存储、orm、esBuild、openAi、pkg',
  ],
})

const product2 = ref<ProductProps>({
  title: '个人站点 [mh33.top](https://mh33.top/paylist)（独立开发）',
  time: '2023年6月—2024年5月',
  skills: [
    'vue、react、ts、tailwind、parallax-scrolling、express、socket、nginx、docker、mysql、redis、chatGpt、Micro Frontend、HotLinking、alipay、clash、cli、chrome-extension、mail-api',
  ],
  bg: [
    '项目起因是当初gpt公测，计划做个公益中转站赚点流量，后因扛不住一天接近30刀的开销，遂止。作为本人第一个<长期维护>的网站，目前有<云存储、国际服务转发、匿名群聊、阿里支付>等功能点，以及衍生的<bun-cli>和<chrome插件>',
  ],
  role: ['前后台的<开发>，服务器的<运维、部署、维护>，交互的<设计>，商品<文案与支付逻辑>的设计'],
  result: [
    '通过论坛、群聊等前期<引流>，收获<流水2000+>，收获稳定客源<10+>',
    '原有基础上<优化加载速度>，利用nginx配置<http版本、代码压缩、多进程、ssl>，后端<优化缓存策略、多进程>，前端采用懒加载数据、懒路由、微前端、压缩、分包，最终优化达到<FCP几乎秒开，二次加载百毫秒级>',
    `在原有基础上提供更多<自定义的参数>，扩展<vision、dall3、assist、以及中转>等功能`,
  ],
})

const product3 = ref<ProductProps>({
  title: '数字化管理平台（小程序+web+h5）',
  time: '2022年7月—2024年1月',
  bg: [
    '为实现企业级后台管理系统的全面数字化转型，计划将<钉钉企业版的后台功能迁移至自主研发的平台>。该平台不仅<支持小程序、Web 和 H5 多端>接入，还具备<高度的灵活性和可扩展性>，以满足日益复杂的业务需求',
  ],
  skills: [`vue、uni、ts、echarts、bpmn、weixin-sdk、dingtalk-sdk`],
  role: ['项目主要开发者，负责小程序<90%的功能点和后续优化>', '提供<web优化方案，跨平台实现方案>'],
  result: [
    '小程序：通过Tree Shaking、OSS（对象存储服务）和 WebView 等技术手段，有效减少了打包后代码的体积，<从8.5 MB 缩减至 4.6 MB>。此外，采用元素懒加载、虚拟滚动、逆向无限滚动分页和骨架屏等优化策略，<大幅降低了用户可感知页面加载时间>。',
    '小程序：用<nodejs打通微信消息推送功能>，随后将其转换成java代码提供后端使用',
    '小程序：利用<nodejs开发自动更新脚本>，减少项目更新频繁导致的人力损耗',
    '小程序：在部门<推行eslint、commitLint>，有效减少团队code view时间',
    'web：<对接第三方平台>，对接和风、高德、萤石云等平台',
    'web: 优化原始审批模块渲染速度，<时间复杂度由 O(n^2) 降低至 O(n)>',
    'web：<解决公司频繁人工上传的问题>，编写了自动化脚本，结合系统定时任务，实现静默打包前端项目并自动上传到 FTP 服务器',
  ],
})

const product4 = ref<ProductProps>({
  title: 'XX医疗开发板（react-native）',
  time: '2022年2月—2022年5月',
  bg: [
    '公司的主要研发产品，一款<用于医疗护理呼叫的应用>，旨在实现病人、护士站和护士之间的高效呼叫',
  ],
  role: ['负责协助通讯<功能迁移>'],
  skills: ['web-rtc、react-native'],
  result: [
    '由原先的物理链路通讯成功迁移成使用web-rtc网络通讯，<降低了开发成本>，提高了<通讯成功率>，减少了<人力成本>',
    '成功为长尺寸安卓设备优化了样式',
  ],
})

const name = '梅XX'

const education = ref<EducationProps>({
  school: '广东XXX',
  time: '2019年9月—2022年6月',
  major: '计算机网络',
  degree: '全日制大专',
  gpa: '3.6/4.0',
})
</script>

<template>
  <PageSection>
    <HeaderSection :show-img="false" :name="name" />

    <LinkSection v-bind="linkInfo" />

    <LeftContentSection title="社交信息" :direction="direction">
      <SocialSection />
    </LeftContentSection>

    <LeftContentSection title="专业技能" :direction="direction">
      <SkillsSection :content="professionSkills" />
    </LeftContentSection>

    <LeftContentSection title="项目经历" :direction="direction">
      <ProductsSection v-bind="product1" />
      <ProductsSection v-bind="product2" />
      <ProductsSection v-bind="product3" />
      <ProductsSection v-bind="product4" />
    </LeftContentSection>

    <LeftContentSection title="工作经历" :direction="direction">
      <WorksSection :works="works" />
    </LeftContentSection>

    <LeftContentSection title="教育经历" :direction="direction">
      <EducationSection v-bind="education" />
    </LeftContentSection>
  </PageSection>
</template>

<style scoped>
svg {
  margin-bottom: 0.125rem;
}
</style>
