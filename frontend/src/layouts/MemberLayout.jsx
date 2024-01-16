import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UserSwitchOutlined,
  BarcodeOutlined,
  BarChartOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme, Tooltip } from "antd";

import { Link, Outlet , useNavigate} from "react-router-dom";

import { logout, setUserDisconnected } from "../features/auth/authSlice";

import { useDispatch } from "react-redux";

const { Header, Sider, Content } = Layout;

const MemberLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [collapsed, setCollapsed] = useState(false);
  const [ConnectedUser, setConnectedUser] = useState(
         localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): " "
         );
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      icon: <BarcodeOutlined />,
      label: <Link to="/dashboard"> Products </Link>,
    },
    {
      key: "2",
      icon: <BarChartOutlined />,
      label: <Link to="statistiques"> Statistiques </Link>,
    },
    {
      key: "3",
      icon: <UserSwitchOutlined />,
      label: "Manage users",
    },
  ];

  const handleLogout = () => {
    
    const email = "ch@gmail.com";
    
    dispatch(logout(email))
      .then((res) => {
        const { msg } = res.payload;
        //console.log(msg);
        //console.log("email");
        console.log(res);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch(setUserDisconnected());
        navigate("/login-member");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout style={{ height: "100vh", padding: "0 0px" }}>
      <Sider
        style={{ backgroundColor: "white" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="demo-logo-vertical"
          style={{
            background: "white",
            padding: "19px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Tooltip placement="rightBottom" title={" Espace Member"}>
            <SettingOutlined />
          </Tooltip>
          {collapsed ? "" : <span> Espace Membre </span>}
        </div>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor:"white",
          }}
        >
         <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
              <div>
                <span style={{marginRight:"10px"}}> Bonjour, {ConnectedUser ? ConnectedUser.name : " "} </span>
                <LoginOutlined 
                 style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                 onClick={() => handleLogout()}
                 
                />
              </div>
              
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />

        </Content>
        
      </Layout>

    </Layout>
  );
};
export default MemberLayout;
