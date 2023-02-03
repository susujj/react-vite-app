import { useRoutes, Navigate } from 'react-router-dom';
import App from '@/App'
import Page404 from "mainpath/common/NotFind";
import Home from "mainpath/Home";
import About from "@/main/menu3/about";
import Topics from "@/main/menu3/Topics";
import Topic from "@/main/menu3/Topic";
import OverView from "mainpath/OverView";
import Login from "mainpath/Login";
import Test from "@/main/test/index";
import TestUI from "@/main/test/TestUI";
import EchartUI from "@/main/test/EchartUI";
import DemoTest from "@/main/demo/DemoTest";
import FormDemo from "mainpath/demo/FormTest";
import TableDemo from "mainpath/demo/TableTest";
import Hookdemo from "mainpath/demo/Hookdemo";
import MENU3 from '@/main/menu3/index';

const routes = [

    {
        path: '/',
        element: <Home />,
        redirectTo: 'overview',
        meta: {
            title: '首页',
        },
        children: [
            {
                path: 'overview',
                element: <OverView />,
            },

            {
                path: 'test',
                element: <Test />,
                redirect: "testui",
                children: [
                    {
                        path: 'testui',
                        element: <TestUI />,
                        meta: {
                            title: 'TestUI',
                        },

                    },
                    {
                        path: 'EchartUI',
                        element: <EchartUI />,
                        meta: {
                            title: 'EchartUI',
                        },

                    }],
            },
            {
                path: 'demo',
                element: <DemoTest />,
                redirect: "hooktest",
                children: [
                    {
                        path: 'hooktest',
                        element: <Hookdemo />,
                        meta: {
                            title: 'Hookdemo',
                        },

                    },

                    {
                        path: 'table',
                        element: <TableDemo />,
                        meta: {
                            title: 'TableDemo',
                        },

                    },
                    {
                        path: 'form',
                        element: <FormDemo />,
                        meta: {
                            title: 'FormDemo',
                        },

                    },
                ]
            },
            {
                path: '/menu3',

                element: <MENU3 />,
                redirect: "about",
                meta: {
                    title: '设置',
                },
                children: [

                    {
                        path: 'about',
                        element: <About />,
                        meta: {
                            title: 'About',
                        },
                        children: [ {
                            path: 'topics',
                            element: <Topics />,
                            meta: {
                                title: '应用',
                            },
                            children: [
                                {
                                    path: ':topicId',
                                    element: <Topic />,
                                    meta: {
                                        title: 'topic',
                                    }
                                }
                            ]
                        },],

                    },
                   
                ]
            },

        ]

    },


    {
        path: '/login',
        element: <Login />,
        meta: {
            title: '登录',
        },
    },
    // {
    //     path: '/home',
    //     element: <Home/>,


    // },

    // {
    //     path: '/login',
    //     element: <Login />,
    //     meta: {
    //         title: '登录',
    //         noLogin: true,
    //         hideMenu: true
    //     }
    // },
    {
        path: '*',
        element: <Page404 />,
        meta: {
            title: '404',
            noLogin: true,
            hideMenu: true
        }
    },
];
// const getRoutes = () => {
//     const tt = useRoutes(routes);
//     return tt;
// }

// const getRoutes = useRoutes(routes);
export default routes;

