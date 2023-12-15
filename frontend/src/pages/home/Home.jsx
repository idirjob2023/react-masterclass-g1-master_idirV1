import { React,useState } from "react";
import { styled } from "styled-components";
import { Form, Select, Checkbox, Input, DatePicker, TimePicker,  Button, Flex, Row  } from 'antd';
import { CalculatorOutlined } from "@ant-design/icons";
import { Card ,  Col  } from 'antd';

const { Meta } = Card;

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
        <div style={{backgroundcolor:'#fff'}}> 
          <p style={{Margin: '20px 0 10px 0',  FontWeight: '700', FontSize: '1.4rem', TextTransform: 'uppercase',textAlign: 'center'}}> <br/> PROMOTIONS </p>
          <h2 style={{textAlign: 'center',  margin: '0 0 16px', fontWeight: '400', fontSize: '2.4rem', position: 'relative', 
                      fontFamily: 'poppins', padding: '0 8px 20px',}}>Promotion location de voiture en Tunisie
          </h2>
         
          <p style={{textAlign: 'center', fontSize:'14px'}}> 
              Avec <strong>TUNISIA RENT CAR</strong>, effectuez une location voiture tunisie pas cher. Les meilleures promos de location auto tunisie.<br/>
              Réservez votre voiture à l'aéroport en 3 clics.
          </p>
         
         

        </div>
      
      </ServiceSectionS>

    </div>
  );
};

export default Home;
