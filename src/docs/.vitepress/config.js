import { defineConfig } from "vitepress";

export default defineConfig({
  title: "VueUse中文文档",
  description: "VueUse中文网-非官方文档",
  lang: "zh-CN",
  themeConfig: {
    logo: "/logo.svg",
    lastUpdated: true,
    editLink: {
      pattern:
        "https://github.com/programmer-fly/VueUse-doc/tree/main/src/docs/:path",
      text: "对此页面建议反馈",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/programmer-fly/VueUse-doc" },
    ],
    footer: {
      message: "非官方文档，感谢建议、指正",
      copyright:
        'Copyright © 2022-2023 <a href="https://beian.miit.gov.cn/">豫ICP备2023004982号</a>',
    },
    head: [["link", { rel: "icon", href: "/logo.svg" }]],
    sidebar: [
      {
        text: "使用指南",
        items: [
          {
            text: "开始使用",
            link: "/guide/",
          },
          {
            text: "最佳实践",
            link: "/guide/best",
          },
          {
            text: "配置项",
            link: "/guide/config",
          },
          {
            text: "组件",
            link: "/guide/components",
          },
          {
            text: "代码规范",
            link: "/guide/guidelines",
          },
        ],
      },
      {
        text: "常用函数",
        items: [
          {
            text: "状态管理",
            link: "state",
          },
          {
            text: "页面元素",
            link: "elements",
          },
          {
            text: "浏览器",
            link: "browser",
          },
          {
            text: "传感器",
            link: "sensors",
          },
          {
            text: "传感器",
            link: "sensors",
          },
          {
            text: "网络",
            link: "sensors",
          },
          {
            text: "动画",
            link: "animation",
          },
          {
            text: "组件",
            link: "component",
          },
          {
            text: "监听",
            link: "watch",
          },
          {
            text: "响应对象",
            link: "reactivity",
          },
          {
            text: "数组",
            link: "array",
          },
          {
            text: "时间",
            link: "time",
          },
          {
            text: "工具集",
            link: "utilities",
          },
        ],
      },
      {
        text: "插件",
        items: [
          // {
          //   text: "Electron",
          //   link: "electron",
          // },
          // {
          //   text: "Firebase",
          //   link: "firebase",
          // },
          {
            text: "文档标题",
            link: "head",
          },
          {
            text: "功能整合",
            link: "integrations",
          },
          {
            text: "数学方法",
            link: "math",
          },
          {
            text: "动画辅助",
            link: "motion",
          },
          {
            text: "路由",
            link: "router",
          },
          {
            text: "声音",
            link: "sound",
          },
        ],
      },
      {
        text: "学习",
        items: [
          {
            text: "官方课程",
            link: "https://vueschool.io/courses/vueuse-for-everyone?friend=vueuse",
          },
        ],
      },
      {
        text: "链接",
        items: [
          {
            text: "插件",
            link: "/add-ons",
          },
          {
            text: "生态系统",
            link: "/ecosystem",
          },
          {
            text: "文件大小",
            link: "/export-size",
          },
        ],
      },
    ],
    nav: [
      {
        text: "使用指南",
        items: [
          {
            text: "开始使用",
            link: "/guide/index",
          },
          {
            text: "最佳实践",
            link: "/guide/best",
          },
          {
            text: "配置项",
            link: "/guide/config",
          },
          {
            text: "组件",
            link: "/guide/components",
          },
          {
            text: "代码规范",
            link: "/guide/guidelines",
          },
        ],
      },
      {
        text: "功能函数",
        items: [
          { text: "函数列表", link: "func" },
          { text: "最近更新", link: "update" },
          {
            text: "常用函数",
            items: [
              {
                text: "状态管理",
                link: "state",
              },
            ],
          },
          {
            text: "插件",
            items: [
              // {
              //   text: "Electron",
              //   link: "electron",
              // },
              // {
              //   text: "Firebase",
              //   link: "firebase",
              // },
              {
                text: "文档标题",
                link: "head",
              },
              {
                text: "功能整合",
                link: "integrations",
              },
              {
                text: "数学方法",
                link: "math",
              },
              {
                text: "动画辅助",
                link: "motion",
              },
              {
                text: "路由",
                link: "router",
              },
              {
                text: "声音",
                link: "sound",
              },
            ],
          },
        ],
      },
      {
        text: "插件",
        link: "/add-ons",
      },
      
      {
        text: "链接",
        items: [
          {
            text: "插件",
            link: "/add-ons",
          },
          {
            text: "生态系统",
            link: "/ecosystem",
          },
          {
            text: "文件大小",
            link: "/export-size",
          },
        ],
      },
      {
        text: "在线演示",
        link: "https://play.vueuse.org/",
      },
      {
        text: "10.0.0",
        items: [
          {
            text: "版本",
            items: [
              {
                text: "10.0.0",
                link: "/",
              },
            ],
          },
        ],
      },
    ],
  },
});
