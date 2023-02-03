import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.css';
import './index.css'
import './App.css'
import 'antd/dist/antd.variable.min.css';
import {
  BrowserRouter as Router, Navigate, useRoutes,
  Route, Routes,
  Link, Outlet,
  useParams
} from "react-router-dom";
import { ContextProvider } from "@/redux/reducer";
import { ConfigProvider } from 'antd';
ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Router>
      <ul className="topBar">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/topics">topics</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />}>
            <Route path=":topicId" element={<Topic />} />
          </Route>
  


        </Route>
        <Route path="*" element={<NotFind />} />
      </Routes>
    </Router> */}
    {/* <Route path="/" element={<Navigate to="/home" />}> */}
    <Router>
      <ContextProvider>
        <ConfigProvider>
          <App />
        </ConfigProvider>

      </ContextProvider>
    </Router>
  </React.StrictMode>

)
