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
    padding: 15px;
    h3{
        text-align: center;
        margin:20px 0px 30px 0px;
        font-size: 22px;
    }
    h4{
      text-align: center;
      padding:20px 0px 0px 0px;
      font-size: 15px;
     
    }
    .price{
      text-align: center;
      font-weight: 600;
    }

    .details{
      text-align: center;
      background:#262626;
      color:#ffffff;
      font-size:16px;
    }
    .autresServices{
      h3{
        text-align: center;
        font-size: 22;
        margin: 23px; 
      }
      .rowService{
        margin:0px;
        .colService{
          padding:0px;
          .title{
           font-size: 18px;
           font-weight: 600;
           margin: 0px 0px 0px 0px ;
          }
          .details{
             background:#ffffff;
             color:#000000;
            font-size: 13px;
          }
        }
      }


        
    }

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
  const autresServices = [
    {
      id: "1",
      image: gps,
      title: "Location voiture avec GPS",
      details:"Afin de trouver votre chemin et de gagner du temps, louez un vrai GPS à 2 € / jour",
    },
    {
      id: "2",
      image: chauffeur,
      title: "Location voiture avec CHAUFFEUR",
      details:"Pour faciliter vos deplacements en tunisie, faire des excursions sur mesure.",
    },
    {
      id: "3",
      image: boiteAuto,
      title: "Location voiture boite automatique",
      details:"un grand confort à bord, une motorisation silencieuse: Suzuki swift, Kia picanto, Hyundai i10",
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
        <h4> PROMOTION </h4>
        <h3> Promotion location de voiture en Tunisie </h3>
        <Row gutter={[16, 16]} className="rowService" > 
          {services.map((item) => (
            <Col key={item.id} xs={24} xl={6} className="colService">
              <Card hoverable cover={<img alt="example" src={item.image} />}>
                <div className="details">{item.details}</div>
                <div className="price">{item.price}</div>
              </Card>
            </Col>
          )
          
          )}
        </Row>
      
        <div className="autresServices">
          <h3>Agence de location voiture en Tunisie</h3>
          <Row gutter={[16,16]} className="rowService">
           
            {autresServices.map((item) => (

              <Col key={item} xs={24} xl={8} className="colService" >
                <Card hoverable cover={<img alt="example" src={item.image} />}>
                  <div className="title">{item.title}</div>
                  <div className="details">{item.details}</div>
                </Card>
              </Col>           
           )
           )}
          </Row>
        </div>

        <div className="conditions">
          <h3>Conditions generales</h3>
          <div className="conditionsText">
            <p>
              Tunisia Rent Car est une agence de location voiture Tunisie
              agissant dans le domaine de location de véhicules depuis 2006.
            </p>
            <p>
              Nous fournissons à nos clients un service simple, efficace et
              rapide pour la location de voiture aux aéroports de la Tunisie
              ainsi que toutes les villes touristiques de la Tunisie. Vous
              pourriez nous retrouver facilement à l’aéroport de Tunis Carthage,
              l’aéroport Enfidha, l’aéroport de Monastir et l’aéroport
              International Djerba Midoun.
            </p>
            <p>
              <h2>Profitez de votre voiture à Tunis</h2>, Hammamet ou Djerba
              Tunisia Rent Car est votre partenaire de route, qui vous offre un
              service de location voiture Tunisie loin de tous les tracas
              imprévus qui peuvent survenir.
            </p>
            <p>
              Pour tous vos déplacements en Tunisie, vous pouvez compter sur
              nous, nous vous proposons la location de voitures courte ou longue
              durée, avec ou sans chauffeur.
            </p>
            <p>
              Notre but est de vous assister, lors de vos visites de découverte
              du pays ou aussi pour vous aider lors de vos déplacements
              professionnels.
            </p>
            <p>
              <h2>Louez votre véhicule à un prix pas cher</h2> Tunisia Rent Car
              fait évoluer ses services d’une façon permanente. Nous offrons à
              nos clients des véhicules neufs, bien entretenues avec zéro défaut
              pour que vous n’ayez pas de surprises lors de vos déplacements.
            </p>
            <p>
              En fournissant les meilleurs services de manière transparente,
              nous limitons l’effet des distances entre les villes, en vous
              offrant une tranquillité d’esprit lors de vos déplacements.
            </p>
            <p>
              Ce qui vous permettra de profiter de vos visites professionnelles
              ou de vos vacances en famille en Tunisie. Nous proposons à nos
              clients des prix intéressants et pas cher pour louer une voiture
              tout en garantissant une meilleure qualité de services.
            </p>
          </div> 
        </div>
      </ServiceSectionS>

    </div>
  );
};

export default Home;
