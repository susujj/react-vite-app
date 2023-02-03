
import {
    LaptopOutlined,
    NotificationOutlined, UserOutlined, SettingOutlined,
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined
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
const { Header, Content, Sider } = Layout;
export const withNavigation = (Component) => {
    return (props) => <Component {...props} navigate={useNavigate()} />;
};
const items = [
    {
        // label: <Link to="/home">home</Link>,
        label: "概览",
        key: "/overview",
        icon: <AppstoreOutlined />,
        meta: { path: "/overview" },
    },
    

    {
        // label: <Link to="/about">About</Link>,
        label: "菜单一",
        key: "/test",
        icon: <AppstoreOutlined />,
        // disabled: true,
    },
    {
        label: '菜单二',// - Submenu
        key: '/demo',
        icon: <SettingOutlined />,
        // children: [
        //   {
        //     type: 'group',
        //     label: 'Item 1',
        //     children: [
        //       {
        //         label: 'Option 1',
        //         key: 'setting:1',
        //       },
        //       {
        //         label: 'Option 2',
        //         key: 'setting:2',
        //       },
        //     ],
        //   },
        //   {
        //     type: 'group',
        //     label: 'Item 2',
        //     children: [
        //       {
        //         label: 'Option 3',
        //         key: 'setting:3',
        //       },
        //       {
        //         label: 'Option 4',
        //         key: 'setting:4',
        //       },
        //     ],
        //   },
        // ],
    },
    {
        // label: <Link to="/about">About</Link>,
        label: "菜单三",
        key: "/menu3",
        icon: <AppstoreOutlined />,
        // disabled: true,
    },
    // {
    //   label: (
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //       Navigation Four - Link
    //     </a>
    //   ),
    //   key: 'alipay',
    // },
];
class TopMenu extends React.Component<any, any> {

    constructor(props) {
        super(props);
        let dMenu = [];
        if (this.props.pathname) {
            let pathname = this.props.pathname;
            let pathnames = pathname.split("/");
            dMenu.push( "/" + pathnames[1]);
        }
        this.state = { selectMenu: dMenu };
        this.toView = this.toView.bind(this);

    }

    componentDidUpdate(prevProps) {
        if (this.props.pathname !== prevProps.pathname) {
            let dMenu = []
            if (this.props.pathname) {
                let pathname = this.props.pathname;
                let pathnames = pathname.split("/");
                dMenu.push( "/" + pathnames[1]);   
            }

            this.setState({ selectMenu: dMenu });
        }
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    toView = ({ item, key, keyPath, domEvent }) => {
        this.props.navigate(key);
    };

    render() {
        return (
            <Menu onClick={this.toView} mode="horizontal" 
            defaultSelectedKeys={["/overview"]}
            selectedKeys={this.state.selectMenu}  items={items} />
        );
    }
}

export default withNavigation(TopMenu);