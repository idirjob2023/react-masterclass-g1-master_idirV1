import React from "react";
import { styled } from "styled-components";
import { Button, Select, Form, Row, Col, DatePicker, Card } from "antd";
// service
import fabia from "../../assets/img/services/fabia-22.png";
import skoda from "../../assets/img/services/skoda-octavia.png";
import dacia from "../../assets/img/services/dacia-mcv.png";
import hyundai from "../../assets/img/services/hyundai-i10-bva.png";



const Prestations = () => {
  const PrestationS = styled.div`
    padding: 20px;
    background-color: width;
    .Filtres{
      padding: 20px;
      
    }
    .autos{
      padding: 20px;
      background-color: red;
    }
    `;
 
  return (
  
  <PrestationS>
    <section className="Filtres">  Filetes </section>
    <section className="autos"> Autos</section>
    
 
  </PrestationS>
  )
};

export default Prestations;
