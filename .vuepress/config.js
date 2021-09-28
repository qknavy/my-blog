module.exports = {
  "title": "Navy's Blog",         //加载页标题
  "description": "个人博客初始化",  //加载页副标题
  "dest": "public",               //编译后的静态文件存放目录
  "head": [
    [
      "link",                     //浏览器tab页的小图标
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",                     //手机兼容
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [                      //导航栏
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {           //博客配置
      "category": {
        "location": 2,        //“分类”在导航栏的位置
        "text": "Category"
      },
      "tag": {
        "location": 3,        //"标签"在导航栏的位置
        "text": "Tag"
      }
    },
    "friendLink": [           //友链
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",              //左上角的logo
    "search": true,                   //开启搜索
    "searchMaxSuggestions": 10,       //搜索提示条数
    "lastUpdated": "Last Updated",    //更新时间
    "author": "Navy",                 //默认的作者
    "authorAvatar": "/avatar.png",    //头像
    "record": "xxxx",                 //备案记录
    "startYear": "2017"               //年份
  },
  "markdown": {
    "lineNumbers": true               //markdown笔记行数
  }
}