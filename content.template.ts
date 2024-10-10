import type { AppState } from '@/types/app'

const _default: AppState = {
  works: [
    {
      company: '广州XXXX有限公司',
      time: '2024年2月—2024年10月',
      role: 'Node开发',
      depart: 'CRM部',
    },
  ],
  link: {
    email: 'a2424@gmail.com',
    phone: '130XXXXXXXX',
    experience: '3',
  },
  skills: [
    '具备良好的<业务拆解能力>，能对业务按需求、功能划分成相应的函数，组件等，实践中<大量使用纯函数>开发',
  ],
  products: [
    {
      title: '[mh33.top](https://mh33.top/paylist)（独立开发）',
      time: '2023年6月—2024年5月',
      skills: [
        'vue、react、ts、tailwind、parallax-scrolling、express、socket、nginx、docker、mysql、redis、chatGpt、Micro Frontend、HotLinking、alipay、clash、cli、chrome-extension、mail-api',
      ],
      bg: ['功能性站点，提供网络代理、云存储、匿名群聊、商品购买>等功能点'],
      role: [
        '前后台的<开发>，服务器的<运维、部署、维护>，交互的<设计>，商品<文案与支付逻辑>的设计',
      ],
      result: [
        '通过论坛、群聊等前期<引流>，收获<流水2000+>，并收获了稳定客源',
        '原有基础上<优化加载速度>，利用nginx配置<http版本、代码压缩、多进程、ssl>，后端<优化缓存策略、多进程>，前端采用懒加载数据、懒路由、微前端、压缩、分包，最终优化达到<FCP几乎秒开，二次加载百毫秒级>',
        '在原有基础上提供更多<自定义的参数>，扩展<vision、dall3、assist、以及中转>等功能 ',
      ],
      actions: [],
    },
  ],
  educations: [
    {
      school: '广东XXXX',
      time: '2019年9月—2029年6月',
      major: '计算机网络',
      degree: '本科',
      gpa: '3.6/4.0',
    },
  ],
  header: { name: 'ssffs', showImg: false },
  direction: 'top',
  socials: [
    {
      iconUrl: 'https://cdn.simpleicons.org/aiqfome',
      name: '我的站点',
      value: 'mh33.top',
      a_href: 'https://mh33.top/payList',
    },
  ],
}

export default _default
