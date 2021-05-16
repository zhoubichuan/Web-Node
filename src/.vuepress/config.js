module.exports = {
  // 基础配置
  base: '/Web-Node/', // 部署站点的基础路径
  description: 'JavaScript相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'JavaScript笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
    }],
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  plugins: [
    'demo-block',
    // you can use this plugin multiple times
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // this is how VuePress Default Theme use this plugin
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
            text: '基础知识',
            items: [{
                text: '一、堆栈内存和闭包作用域',
                link: '/base/stack/1.dataType'
              },
              {
                text: '二、面向对象程序设计',
                link: '/base/oop/1.objectOriented'
              },
              {
                text: '三、浏览器渲染机制',
                link: '/base/3.browser/1.browser'
              },
              {
                text: '四、DOM事件及设计模式',
                link: '/base/dom/1.event'
              },
              {
                text: '五、ES6+核心源码分析',
                link: '/base/es6/1.let'
              },
              {
                text: '六、AJAX/HTTP数据通信',
                link: '/base/http/1.http'
              }
            ]
          },
          {
            text: '专项知识',
            items: [{
                text: '一、前端性能优化',
                link: '/senior/performance/1.CDN'
              },
              {
                text: '二、TypeScript',
                link: '/senior/typeScript/15.api'
              },
              {
                text: '三、前端监控',
                link: '/senior/monitor/13.jiankong'
              },
              {
                text: '四、安全防范',
                link: '/senior/security/1.xss'
              },
              {
                text: '五、文件上传下载',
                link: '/senior/security/1.xss'
              },
              {
                text: '六、移动端开发',
                link: '/senior/h5/skill',
              }
            ]
          },
          {
            text: '阅读书籍',
            items: [{
                text: '一、Node.js 开发指南',
                link: '/senior/book1/1.preparation'
              },
              {
                text: '二、了不起的 Node.js',
                link: '/senior/vuex'
              },
              {
                text: '三、Node.js 实战',
                link: '/senior/vue-router'
              },
              {
                text: '四、深入浅出 Node.js',
                link: '/senior/element/Pagination'
              }
            ]
          }
        ],
        sidebar: {
          '/base/stack/': [ //一、堆栈内存和闭包作用域
            '1.dataType', //9 种数据类型区别及相互转换
            '2.lexicalAnalysis',
            '3.heapStack',
            '4.bottomLayerOperation',
            '5.scope',
            '7.closure',
            '8.highLevelProgramming',
            '9.utils',
            '10.ui',
            '11.data',
            '12.skill',
            '13.com',
            '14.data',
            '15.api'
          ],
          '/base/oop/': [ //二、面向对象程序设计
            '1.objectOriented',
            '2.constructor',
            '3.prototype',
            '4.function',
            '5.this',
            '6.origin',
            '7.extends',
            '8.jQuery',
            '9.lodash'
          ],
          '/base/3.browser/': [ //三、同步异步编程及浏览器渲染机制
            '1.browser',
            '2.tree',
            '3.reflow',
            '4.async',
            '5.eventLoop',
            '6.microtaskMacrotask',
            '7.crp',
            '8.skeleton',
            '9.test'
          ],
          '/base/dom/': [ //四、DOM事件及设计模式
            '1.event'
          ],
          '/base/es6/': [ //五、ES6+核心知识和源码分析
            '1.let',
          ],
          '/base/http/': [ //六、AJAX/HTTP前后端数据通信
            '1.http',
            '2.https',
            '3.tcp',
            '4.catch',
            '5.dns',
            '6.http',
          ],
          '/senior/h5/': [
            'skill',
            'bug',
            'webpack',
            'vscode',
            'test',
            'prem',
            'i18n'
          ],
          '/senior/performance/': [ //性能优化
            '1.CDN', //cdn
            '2.cache', //缓存
            '3.componentCommunication',
            '4.render',
            '5.api',
            '6.form',
            '7.checkBox',
            '8.EventLoop',
            '9.alert',
            '10.serviceRender', //服务端渲染
            '11.debounceAndThrottle', //防抖与节流
            '12.webpack'
          ],
          '/senior/typeScript/': [
            '15.api'
          ],
          '/senior/monitor/': [ //前端监控
            '13.jiankong'
          ],
          // '/senior/npm/': [
          //   '1.recursionAndDynamics'
          // ],
          '/senior/security/': [ //前端安全
            '1.xss',
            '2.csrf',
            '3.doos',
            '4.http'
          ],
          '/senior/book1/': [
            '1.preparation',
            '2.dataDriven',
            '3.componentization',
            '4.deepResponsePrinciple',
            // '5.compile',
            // '6.extend',
            // '7.vueRouter',
            // '8.vuex'
          ],
          '/senior/element/': [
            'Pagination',
            'Dialog',
            'Autocomplete',
            'Dropdown',
            'DropdownMenu',
            'DropdownItem',
            'Menu',
            'Submenu',
            'MenuItem',
            'MenuItemGroup',
            'Input',
            'InputNumber',
            'Radio',
            'RadioGroup',
            'RadioButton',
            'Checkbox',
            'CheckboxButton',
            'CheckboxGroup',
            'Switch',
            'Option',
            'OptionGroup',
            'Button',
            'ButtonGroup',
            'Table',
            'TableColumn',
            'DatePicker',
            'TimeSelect',
            'TimePicker',
            'Popover',
            'Tooltip',
            'Breadcrumb',
            'BreadcrumbItem',
            'Form',
            'FormItem',
            'Tabs',
            'TabPane',
            'Tag',
            'Tree',
            'Alert',
            'Slider',
            'Icon',
            'Row',
            'Col',
            'Upload',
            'Progress',
            'Spinner',
            'Badge',
            'Card',
            'Rate',
            'Steps',
            'Step',
            'Carousel',
            'Scrollbar',
            'CarouselItem',
            'Collapse',
            'CollapseItem',
            'Cascader',
            'ColorPicker',
            'Transfer',
            'Container',
            'Header',
            'Aside',
            'Main',
            'Footer',
            'Timeline',
            'TimelineItem',
            'Link', 'Divider',
            'Image',
            'Calendar',
            'Backtop',
            'PageHeader',
            'CascaderPanel',
            'Avatar',
            'Drawer',
            'Popconfirm',
            'CollapseTransition',
            'MessageBox'
          ]
        }
      }
    }
  },
}