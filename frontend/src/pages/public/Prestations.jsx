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

  const Filtereoptions = [
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ];



  return (
  
  <PrestationS>
    <section className="Filtres">  
     <Row>
       <Col>
        <div className="Filtre">
        <Select
          showSearch
          style={{
            width: 200,
          }}
         placeholder="Search to Select"
         optionFilterProp="children"
         
         options={Filtereoptions}
        />
        </div>
      </Col>
     </Row>
    
    

    </section>
    <section className="autos"> Autos</section>
    
 
  </PrestationS>
  )
};

export default Prestations;
