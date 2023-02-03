
import {
    LaptopOutlined, NotificationOutlined, UserOutlined,
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    useNavigate, Navigate,
    Route, Routes,
    Link, Outlet,
    useParams,
    useLocation
} from "react-router-dom";
import { Button, Menu, Layout } from 'antd';
import React, { useState } from 'react';
import Item from 'antd/lib/list/Item';
const { Header, Content, Sider } = Layout;
export const withNavigation = (Component) => {
    return (props) => <Component {...props} navigate={useNavigate()} />;
};

class LeftMenu extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.initMenu();
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
        this.toView = this.toView.bind(this);

    }

    initMenu() {

        console.log("initMenu:" + this.props.pathname);
        let leftMenu = "", dMenu = "";
        if (this.props.pathname) {
            var pathname = this.props.pathname;
            var pathnames = pathname.split("/");

            dMenu = pathnames[1];
            if (pathnames.length > 2) {
                leftMenu = "/" + pathnames[1];
                leftMenu = pathname;
            }
        }
        let items2 = this.getSiderMenu(dMenu);
        let newcollapsed = false;
        let newsiderstyle = newcollapsed ? {
            width: "80px",
            height: "100vh"
        } : {
            width: "200px",
            height: "100vh"
        };

        this.state = {
            siderstyle: newsiderstyle,
            collapsed: newcollapsed,
            show: this.props.isShowLeftmenu, items2, leftMenu
        }

        console.log("leftMenu:" + leftMenu);
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentDidMount() {
        console.log(this.props.pathname);
        if (this.props.pathname === "/demo") {
            // var pathname = this.props.pathname;
            // var pathnames = pathname.split("/");
            // if (pathnames.length == 2) {

            // }
            this.props.navigate("/demo/table");
        }


    }

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate:" + this.props.pathname);
        let leftMenu = "", dMenu = ""
        if (this.props.pathname !== prevProps.pathname) {
            if (this.props.pathname) {
                var pathname = this.props.pathname;
                var pathnames = pathname.split("/");

                dMenu = pathnames[1];
                if (pathnames.length > 2) {
                    leftMenu = "/" + pathnames[1] + "/" + pathnames[2];
                }

            }
            let items2 = this.getSiderMenu(dMenu);
            this.setState({ items2: items2, leftMenu });

        }
        if (this.state.leftMenu === "") {
            this.props.navigate(this.state.items2[0].key);
        }
    }

    getSiderMenu(dMenu) {
        let items2 = [ ];
        if (dMenu == 'demo') {
            items2 = [
                {
                    label: '侧边菜单21' + dMenu,
                    key: '/demo/table',
                    icon: <AppstoreOutlined />,
                    children: [
                        {
                            type: 'group',
                            label: 'Item 1',
                            children: [
                                {
                                    label: 'TABLE',
                                    key: '/demo/table',
                                },
                                {
                                    label: 'FORM',
                                    key: '/demo/form',
                                },
                            ],
                        },
                        {
                            type: 'group',
                            label: 'Item 2',
                            children: [
                                {
                                    label: 'hooktest',
                                    key: '/demo/hooktest',
                                },
                                {
                                    label: 'Option 4',
                                    key: 'setting:4',
                                },
                            ],
                        },
                    ],
                }];
        } else if (dMenu == 'test') {
            items2 =[{
                label: '侧边菜单11',
                key: '/test/testui',
                icon: <AppstoreOutlined />
            }, {
                label: '侧边菜单12',
                key: '/test/EchartUI',
                icon: <AppstoreOutlined />
            }
            ];
        } else if (dMenu == 'menu3') {
            items2 = [{
                label: '侧边菜单31',
                key: '/menu3/about',
                icon: <AppstoreOutlined />
            }];
        }else{
            items2 = [{
                label: '侧边菜单11',
                key: '/test/testui',
                icon: <AppstoreOutlined />
            }, {
                label: '侧边菜单12',
                key: '/test/EchartUI',
                icon: <AppstoreOutlined />
            }
            ];
        }


        return items2;
    }
    handleToggleClick() {
        this.setState(prevState => ({
            show: !prevState.isShowLeftmenu
        }));
    }
    toggleCollapsed = () => {
        let newcollapsed = !this.state.collapsed;
        let newsiderstyle = newcollapsed ? {
            width: "80px",
            height: "100vh"
        } : {
            width: "200px",
            height: "100vh"
        };
        this.props.setCollapsed(newcollapsed);
        this.setState({ collapsed: newcollapsed, siderstyle: newsiderstyle });

    };
    toView = ({ item, key, keyPath, domEvent }) => {
        this.props.navigate(key);
    };
    render() {
        // if (!this.props.isShowLeftmenu) {
        //     return null;
        // }
        return (
            <div className="main_aside" style={this.state.siderstyle}>
                {/* <aside  style={this.state.collapsed ? { width: "80px", height: "100vh", background: "blue", } :
                    { width: "200px", height: "100vh", background: "blue", }} > */}
                <Menu
                    onClick={this.toView}
                    defaultSelectedKeys={[this.state.items2[0].key]}
                    defaultOpenKeys={[this.state.items2[0].key]}
                    selectedKeys={this.state.leftMenu}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                    items={this.state.items2}
                />
                <div style={{
                    margin: '20px 0',

                    textAlign: 'center'
                }}>
                    <Button
                        type="primary"
                        onClick={this.toggleCollapsed}

                    >
                        {this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button></div>

                {/* </aside> */}
            </div >



        );
    }
}

export default withNavigation(LeftMenu);