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
    padding: 15px;
    background-color: width;
    .filtres{
      padding: 15px;
      .filtresForm{

        .filtresRow{
          .filtresCol{
            background-color: transparent;
            .filtreDiv {
              label {
                font-size: 22px;
                .select {
                  width: 100%;
                }
              }
            }
          }

        }
      }
    }
    .autos{
      padding: 20px;
      background-color: white;
      .price {
        font-size: 20px;
        font-weight: 600;
      }
      .details {
        font-size: 16px;
      }
    }
    `;

  const marques = [
      {
        id: '1',
        value: '1',
        label: 'Forde',
      },
      {
        id: '2',
        value: '2',
        label: 'Toyota',
      },
      {
        id: '3',
        value: '3',
        label: 'Vollswagen',
      },
      {
        id: '4',
        value: '4',
        label: 'peugeot',
      },
      
    ];

    const modeles = [
      {
        id: '1',
        marque_id:'1',
        value: '1',
        label: 'Fiesta',
      },
      {
        id: '2',
        marque_id:'2',
        value: '2',
        label: 'Ranger',
      },
      {
        id: '3',
        marque_id:'3',
        value: '3',
        label: 'Landruvwer',
      },
      {
        id: '4',
        marque_id:'3',
        value: '3',
        label: 'yaris',
      },
      {
        id: '5',
        marque_id:'3',
        value: '3',
        label: 'Golf8',
      },
      {
        id: '6',
        marque_id:'3',
        value: '3',
        label: 'Passet cc',
      },
      
    ];

    const energies = [
      {
        id: '1',
        value: '1',
        label: 'Electric',
      },
      {
        id: '2',
        value: '2',
        label: 'Essence',
      },
      {
        id: '3',
        value: '3',
        label: 'Diesel',
      },
      
    ];

    const couleurs = [
      {
        id: '1',
        value: '1',
        label: 'Blanc',
      },
      {
        id: '2',
        value: '2',
        label: 'Grise',
      },
      {
        id: '3',
        value: '3',
        label: 'Noir',
      },
      
    ];

    const puissances = [
      {
        id: '1',
        value: '1',
        label: '6 cheveau',
      },
      {
        id: '2',
        value: '2',
        label: '8 cheveau',
      },
      {
        id: '3',
        value: '3',
        label: '12 cheveau',
      },
      
    ];

    const transmissions = [
      {
        id: '1',
        value: '1',
        label: 'Automatic',
      },
      {
        id: '2',
        value: '2',
        label: 'Manuelle',
      },
    ];

    const nbrsieges = [
      {
        id: '1',
        value: '1',
        label: '5 sieges',
      },
      {
        id: '2',
        value: '2',
        label: '8 sieges',
      },
      {
        id: '3',
        value: '3',
        label: '9 sieges',
      },
      
    ];

    const categories = [
      {
        id: '1',
        value: '1',
        label: 'Economique',
      },
      {
        id: '2',
        value: '2',
        label: 'compact',
      },
      {
        id: '3',
        value: '3',
        label: 'Berline',
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
        price: "Prix à partir de 23 € jour",
        details: "SKODA FABIA",
      },
      {
        id: "3",
        image: dacia,
        price: "Prix à partir de 23 € jour",
        details: "SKODA FABIA",
      },
      {
        id: "4",
        image: hyundai,
        price: "Prix à partir de 23 € jour",
        details: "SKODA FABIA",
      },
    ];
  return (
  <PrestationS>

    <section className="filtres">  
      <Form layout="vertical" className="filtresForm">
        <Row gutter={[12, 12]} className="filtresRow">

          <Col xs={24} xl={6} className="filtresCol">
              <div className="filtreDiv">
                <Form.Item label="Marque" name="brand">
                  <Select
                    showSearch
                    className="select"
                    placeholder="Veuillez choisir la marque"
                    options={marques}
                  />
                </Form.Item>
              </div>
          </Col>

          <Col xs={24} xl={6} className="filtresCol">
              <div className="filtreDiv">
                <Form.Item label="Modele" name="model">
                  <Select
                    showSearch
                    className="select"
                    placeholder="Veuillez choisir le modele"
                    options={modeles}
                  />
                </Form.Item>
              </div>
          </Col>

          <Col xs={24} xl={6} className="filtresCol">
              <div className="filtreDiv">
                <Form.Item label="Energie" name="energy">
                  <Select
                    showSearch
                    className="select"
                    placeholder="Veuillez choisir l'energie"
                    options={energies}
                  />
                </Form.Item>
              </div>
          </Col>

          <Col xs={24} xl={6} className="filtresCol">
              <div className="filtreDiv">
                <Form.Item label="Coleur" name="coleur">
                  <Select
                    showSearch
                    className="select"
                    placeholder="Veuillez choisir la coleur"
                    options={couleurs}
                  />
                </Form.Item>
              </div>
          </Col>

          <Col xs={24} xl={6} className="filtresCol">
              <div className="filtreDiv">
                <Form.Item label="Puissance" name="horsepower">
                  <Select
                    showSearch
                    className="select"
                    placeholder="Veuillez choisir la puissance"
                    options={puissances}
                  />
                </Form.Item>
              </div>
          </Col>

          <Col xs={24} xl={6} className="filtresCol">
              <div className="filtreDiv">
                <Form.Item label="Transmission" name="transmission">
                  <Select
                    showSearch
                    className="select"
                    placeholder="Veuillez choisir la transmission"
                    options={transmissions}
                  />
                </Form.Item>
              </div>
          </Col>

          <Col xs={24} xl={6} className="filtresCol">
              <div className="filtreDiv">
                <Form.Item label="Nombre de siege" name="nombre_siege">
                  <Select
                    showSearch
                    className="select"
                    placeholder="Veuillez choisir le nombre de siege"
                    options={nbrsieges}
                  />
                </Form.Item>
              </div>
          </Col>

          <Col xs={24} xl={6} className="filtresCol">
              <div className="filtreDiv">
                <Form.Item label="Categorie" name="category">
                  <Select
                    showSearch
                    className="select"
                    placeholder="Veuillez choisir la categorie"
                    options={categories}
                  />
                </Form.Item>
              </div>
          </Col>

        </Row>
      </Form>
     
    </section>
    
    <section className="autos"> 
      <Row gutter={[16, 16]} className="rowService">
        {services.map((item) => (
          <Col key={item.id} xs={24} xl={6} className="colService">
            <Card hoverable cover={<img alt="example" src={item.image} />}>
              <div className="price">{item.price}</div>
              <div className="details">{item.details}</div>
            </Card>
          </Col>
          ))}
      </Row>
    
    </section>
    
  </PrestationS>
  )
};
// 20231224_145132-itop 
export default Prestations;
