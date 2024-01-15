import React, { useState } from "react";
import { Button, Form, Input, Flex } from "antd";
import { register, setUserConnected } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";


const LoginPageStyle = {
  backgroundColor: "white",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  backgroundColor: "#fff",
  boxShadow: "1px 1px 5px rgba(0,0,0,0.5)",
  borderRadius: "6px",
  maxWidth: 310,
  minWidth: 300,
  padding: "10px",
};

const RegisterMember = () => {
 
  const dispatch = useDispatch();
  const navegate = useNavigate();
  
  const [loading, setLoading] = useState(false); 

  const handleRegister = (values) => {
    
    setLoading(true);
    dispatch(register(values)).then(res=>{
      const {id:_id, name, email, token } = res.payload.user;
      const {message } = res.payload;
      console.log(message);
      console.log(token);
      localStorage.setItem("token" , token);
      localStorage.setItem("user", JSON.stringify(res.payload.user));
      setLoading(false);
      dispatch(setUserConnected(res.payload.user));
    
      navegate("/dashboard-member")

    }).catch((
      err)=> { console.log(err);
      setLoading(false);
    });
  };

  const onFinish = (values) => {
     console.log("Success:", values);
     handleRegister(values);
  };
 
  return(
    
    <div style={LoginPageStyle}>
    <Form
      name="basic"
      layout="vertical"
      style={formStyle}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div>
        <Link to="/">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <UserAddOutlined style={{ fontSize: "20px", color: "#333" }} />
          </div>
        </Link>

        <div style={{padding:"10px"}}>
           <h3 style={{ textAlign: "center" }} > <span style={{color:"red"}}>I</span>Insription Membre</h3>
        </div>
      </div>

      <Form.Item
        label="Nom"
        name="name"
        rules={[
          {
            required: true,
            message: "Veuillez inserez votre Nom!",
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Veuillez inserez votre email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Veuillez inserez votre mot de passe!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item style={{ textAlign: "right"}}>
       
      <Flex justify="space-between" align="center" >
        
        <div> <Link to="/login-member" style={{ fontSize: "11px" }}>
           Lien pour se connexter </Link> </div>

        <Button 
           size={"small"} 
           type="primary" 
           htmlType="submit"
          
           loading={loading}
           >
          S'inscrire
        </Button>
      </Flex>
      </Form.Item>

    </Form>
    </div>
  );
};
export default RegisterMember;
