import { useEffect, useState, useContext } from 'react'
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
  useLocation
} from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import { myContext } from "@/redux/reducer";
import routes from "@/route/index";
import Topic from "@/main/menu3/Topic";
import LeftMenu from "mainpath/common/LeftMenu";
import { Table, Popconfirm, Button } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
import Home from "mainpath/Home";
import axios from 'axios';
export default function App() {
  const getRoutes = useRoutes(routes);
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useContext(myContext);

  useEffect(() => {
    console.log("app useEffect");
    // let loginStatus = state.user.loginStatus;
    // if (!loginStatus) {
    //   console.log(location);
    //   navigate("/login", {
    //     replace: true,
    //   });
    // }
    if (location.pathname == '/') {
      navigate("/overview", {
      });
    }
  }, []);


  return (
    < div>
      <Outlet />
      {getRoutes}
    </div>

  );
}





