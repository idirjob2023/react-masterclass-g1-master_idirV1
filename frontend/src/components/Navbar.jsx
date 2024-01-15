import React, { useState } from "react";

import { MenuFoldOutlined } from "@ant-design/icons";
import logo from "../assets/img/logo2.png";
import { styled } from "styled-components";
import { Button, Dropdown } from "antd";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const NavbarS = styled.div`
  background-color: white;
  padding: 5px 10px;
  height: 4rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    img {
      height: 36px;
    }
    .text {
      font-weight: 600;
      font-size: 23px;
      color: #444;
    }
  }
  .espaceClient {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      .link {
        font-size: 16px;
        color: #444;
        &:hover {
          color: skyblue;
        }
      }
    }
  }
`;

const Navbar = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
   
    const email = "karim@rent-car.net";
   
    dispatch(logout(email))
      .then((res) => {
        console.log(res);
        //  navigate('/login-member')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
  const items = [
    {
      key: "1",
      label: <Link to="/register-member">Inscription</Link>,
    },
    {
      key: "2",
      label: <Link to="/login-member">Connexion</Link>,
    },
    {
      key: "3",
      label: <Link to="/contact-us">Contacter Nous</Link>,
    },
  ];

  return (
    <NavbarS>
      <div className="brand">
        <img src={logo} alt="logo rentcar" />
        <span className="text">Rental</span>
      </div>

      <div className="espaceClient">
        <Dropdown
          menu={{ 
             items,
          }}
          placement="bottom"
          arrow
        >
          <Button type="primary">Espace client</Button>
        </Dropdown>
      </div>
    
    </NavbarS>
  );
};

export default Navbar;
