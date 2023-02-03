import { useEffect, useContext, useState } from 'react'
import logo from './logo.svg'
import React from "react";
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
  useLocation,
} from "react-router-dom";
import { myContext } from "@/redux/reducer";
import routes from "@/route/index";
import Topic from "@/main/menu3/Topic";
import LeftMenu from "mainpath/common/LeftMenu";
import TopMenu from "mainpath/common/TopMenu";

import { Table, Popconfirm, Button } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;






export default function Home() {

  let isShowLeftmenu = true;
  // let collapsed = false;
  // let [isShowLeftmenu, setIsShowLeftmenu] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  let contentStyle = {
    padding: '0px',
    marginLeft: "200px"
  };
  const [mainContentStyle, setMainContentStyle] = useState(contentStyle);
  const [showOverview, setShowOverview] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {

  }, []);

  if (location.pathname == '/overview') {
    isShowLeftmenu = false;
  } else {
    isShowLeftmenu = true;
  }
  const toggleCollapsed = (showLeftMenu) => {
    setCollapsed(collapsed);
    setMainContentStyle(showLeftMenu ? {
      padding: '0px',
      marginLeft: "80px"
    } : {
      padding: '0px',
      marginLeft: "200px"
    });
  };
  let leftSide = { width: 200, background: "#ffffff", };
  let layout;
  if (isShowLeftmenu) {
    layout = <div>
      <LeftMenu pathname={location.pathname} setCollapsed={toggleCollapsed} />
      <div
        style={mainContentStyle}>
        <div
          // className="site-layout-background"
          style={{
            padding: 5,
            margin: 0,
            height: '100%',
            overflowY: "auto",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>;
  } else {
    layout = <div>
      <div>
        <div
          // className="site-layout-background"
          style={{
            padding: 5,
            margin: 0,
            height: '100%',
            overflowY: "auto",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>;
  }
 
  return (
    <div style={{
      height: '100vh',
    }}>
      <div className="div_top_header">
        react
        
      </div>
      <div className="div_top_hmenu">
        <TopMenu pathname={location.pathname} />
      </div>
      {/* <Header >
      <div className="logo" />
      <Menu  mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header> */}

      {layout}
    </div>

  );
}





