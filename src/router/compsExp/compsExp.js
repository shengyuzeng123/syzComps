// 组件示例路由
export default [
  {
    path: '/compsExp',
    name: 'CompsExp',
    meta: {
      title: "组件",
      icon:'el-icon-menu'
    },
    component: () => import("@/views/compExp/Index"),
    children: [
      {
        path: 'shMarquee',
        name: 'ShMarquee',
        meta: {
          title: "文字跑马灯"
        },
        component: () => import("@/views/compExp/ShMarquee")
      },
      {
        path: 'shRichText',
        name: 'ShRichText',
        meta: {
          title: "富文本"
        },
        component: () => import("@/views/compExp/ShRichText")
      }
    ]
  }
]