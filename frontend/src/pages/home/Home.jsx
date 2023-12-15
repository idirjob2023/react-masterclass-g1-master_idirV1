import { React,useState } from "react";
import { styled } from "styled-components";
import { Form, Select, Checkbox, Input, DatePicker, TimePicker,  Button, Flex, Row  } from 'antd';
import { CalculatorOutlined } from "@ant-design/icons";
import { Card ,  Col  } from 'antd';
import Item from "antd/es/list/Item";

// service
import fabia from "../../assets/img/services/fabia-22.png";
import skoda from "../../assets/img/services/skoda-octavia.png";
import dacia from "../../assets/img/services/dacia-mcv.png";
import hyundai from "../../assets/img/services/hyundai-i10-bva.png";
// autres service
import boiteAuto from "../../assets/img/autresServices/boite-auto.webp";
import chauffeur from "../../assets/img/autresServices/chauffeur.webp";
import gps from "../../assets/img/autresServices/gps.webp";



const HeroSectionS = styled.section`
  background-image: url(https://ik.imagekit.io/z90usd6mcrv7/https://www.tunisia-rent-car.com/images/clio.webp);
  background-size: cover; // 
  background-repeat: no-repeat; // Image ne ce repete pas 
  background-position: center; // centrer Image 
  height: 650px; // taille d une Image 
  
  display: flex; // mettre tous en meme ligne 
  justify-content: start;
  align-items: center;   // centrer le texte 

   .formDiv {
      background-color: rgba(255, 255, 255, 0.85);
      width: 370px; // la taille 
      padding: 15px; 
      margin-left: 15px; // espace a droite
      border-radius: 9px; // rendre la forme en rendre 
      .formLocation {
        padding: 5px; // espace por tous les Cotes
        h3 {
          text-align: center; // cetrer le texte 
          margin-bottom: 15px; // laisser espace en Bas 
          font-size:20px;  // langeur de texte 
        }
      }
    }

  `;
  
  const ServiceSectionS = styled.section`
  background-color: white;
`;
const Home = () => {
  
  
  const agences = [
    {
      value: "1",
      label: "Tunis",
    },
    {
      value: "2",
      label: "Djerba",
    },
    {
      value: "3",
      label: "Nabeul",
    },
  ];

  const services = [
    {
      id: "1",
      image: fabia,
      price: "Prix à partir de 23 € jour",
      details: "SKODA FABIA",
    },
    {
      id: "2",
      image: skoda,
      price: "Prix à partir de 25 € jour",
      details: "VOLKSWAGEN POLO",
    },
    {
      id: "3",
      image: dacia,
      price: "Prix à partir de 27 € jour",
      details: "VOLKSWAGEN POLO SEDAN",
    },
    {
      id: "4",
      image: hyundai,
      price: "Prix à partir de 45 € jour",
      details: "SKODA OCTAVIA",
    },
  ];

  const onFinish = (values) => {
    // call backend table location
    console.log(values);
  };
  
  return (
    <div> 
      
      <section style={{background:'#444', margin:'4px 0px 0px 0px'}}>
        <h1> entete </h1>
      </section>

      <HeroSectionS>
          <div className="formDiv">
            <Form  name="locationForm" layout="vertical" className="formLocation"  autoComplete="off" onFinish={onFinish} > 
              
              <h3>Formulaire de location</h3>

              <Form.Item 
                label="agence de prise en charge"
                name="agencePriseEnCharge"
                rules={[
                  {
                    required:true,
                    message:"Veuillez Choisir l'agence de prise en charge!",
                  }
                ]}
                >
                 <Select allowClear options={agences} />
              </Form.Item>

              <Form.Item 
                label="Agence de restitution"
                name="agenceRestitution"
                rules={[
                  {
                    required:true,
                    message: "Veuillez Choisir l'agence  de restitution!",
                  }
                ]}
              > 
                <Select allowClear options={agences} />
              </Form.Item>

              <Form.Item
               label="Date de retrait"
               name="dateRetrait"
               rules={[
                {
                  required:true,
                  message: "Veuillez Choisir la date de retrait!",
                }
               ]}
               >
                <DatePicker
                  showTime={{
                    format: 'HH:mm',
                  }}
                  style={{width:"100%"}}
                  format="DD-MM-YYYY HH:mm"
                />
              </Form.Item>

              <Form.Item
               label="Date de retour"
               name="dateRetour"
               rules={[
                {
                  required:true,
                  message:"Veuillez Choisir la date de retour!",
                }
               ]}
              >
                <DatePicker
                  showTime={{
                    format: "HH:mm",
                  }}
                  style={{ width: "100%" }}
                  format="DD-MM-YYYY HH:mm"
                />
              </Form.Item>

              <Form.Item style={{ textAlign: "right" }}>
                <Button type="primary" htmlType="submit">
                  Valider
                </Button>
              </Form.Item>

            </Form>
          </div>
          
      </HeroSectionS>
      
      <ServiceSectionS>
        <h1> PROMOTION </h1>
        <h1> Promotion location de voiture en Tunisie </h1>
        <Row gutter={[16, 16]} > 
          {services.map((item) => (
            <Col key={item.id} xs={24} xl={6} className="colService">
              <Card hoverable cover={<img alt="example" src={item.image} />}>
                <div className="price">{item.price}</div>
                <div className="details">{item.details}</div>
              </Card>
            </Col>
          )
          
          )}


        </Row>
      
      </ServiceSectionS>

    </div>
  );
};

export default Home;
