/*
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-08-17 13:13:11
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-08-17 14:04:23
 */
module.exports = {
    title: 'Hello Dave',
    description: 'Hello, my friend!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    themeConfig: {
        sidebar: {
            "/foo/": [
                {
                    title: "pc模块",
                    collapsable: false,
                    path: "/foo/",
                    children: [
                        {
                            title: "我是第二级",
                            collapsable: false,
                            path: "/foo/two",
                        }
                    ]
                }, {
                    title: "moblie模块",
                    collapsable: false,
                    children: [
                        '/foo/',
                        '/foo/one',
                        '/foo/two',
                    ]
                }
            ]
        },
        nav: [
            {
                text: "指南",
                link: "/foo/",
            },
            {
                text: "手册",
                link: "/handbook/",
            },
            {
                text: "gitee",
                link: "https://gitee.com/zzf0529/Dave",
            },
            // {
            //     text: "工具",
            //     items: [{ text: "github", link: "/" }],
            // },
        ],
        // sidebarDepth: 3,
    },
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}