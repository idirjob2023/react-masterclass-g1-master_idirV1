import React from "react";
import { styled } from "styled-components";
import { Form, Select, Checkbox, Input, DatePicker, TimePicker,  Button, Flex  } from 'antd';
import { CalculatorOutlined } from "@ant-design/icons";

const HeroSectionS = styled.section`
  background-image: url(https://ik.imagekit.io/z90usd6mcrv7/https://www.tunisia-rent-car.com/images/clio.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 650px;
  display: flex;
  justify-content: start;
  align-items: center; 
  .formClass {
    background-color: rgba(255, 255, 2555, 0.85);
    width: 370px;
    height: 350px;
    margin-left: 15px;
    border-radius: 9px;

  }
  `;
  
  const ServiceSectionS = styled.section`
  background-color: white;
`;
const Home = () => {
  return (
    <div> 

      <HeroSectionS>
          <div className="formClass"> 
            <h1 style={{fontsize: '22px', padding: '8px 5px 0 15px', margin: '0' }}>Location voiture Tunisie
            </h1>
            <Form.Item>
              <div> 
                <div style={{padding:'20px 10px'}}>
                    
                  <label htmlFor="" style={{fontsize: '13px', height:'6px', color:'#000', fontweight: 'normal', width: '100%', marginbottom:'6px'}}>Agence de prise en charge
                  </label>
                  
                  <Select >              
                    <Select.OptGroup autoSelectChildren label='Aéroport' style={{fontsize:'30'}}>
                      <Select.Option value='4'>Aéroport Djerba</Select.Option>
                      <Select.Option value='3'>Aéroport Enfidha</Select.Option>
                      <Select.Option value='2'>Aéroport Monastir</Select.Option>
                       <Select.Option value='1'>Aéroport Tunis Carthage</Select.Option>
                    </Select.OptGroup> 
            
                    <Select.OptGroup label='Centre ville'>
                      <Select.Option value='24'>Djerba</Select.Option>
                      <Select.Option value='23'>Hammamet</Select.Option>
                      <Select.Option value='22'>La marsa</Select.Option>
                      <Select.Option value='21'>Monastir</Select.Option>
                      <Select.Option value='20'>Nabeul</Select.Option>
                      <Select.Option value='19'>Sousse</Select.Option>
                      <Select.Option value='18'>Tozeur</Select.Option>
                      <Select.Option value='17'>Tunis</Select.Option>
                    </Select.OptGroup>
                  </Select>

                  <div style={{fontsize:'11px', color:'#000',  width: '300'}}> 
                  
                    <input type="Checkbox" id="y" style={{margin:'6px 0px 0px 4px', lineheight: 'normal'}}/>
                    <label style={{color: 'black', margin:'0 0 0 6px' }}>Agence de restitution différente</label>

                  </div>

                </div>
                
                <div>
                  <label htmlFor="" style={{margin:'0px 0px 0px 10px'}}>Date de retrait </label>
                  <label htmlFor="" style={{margin:'0px 0px 0px 90px'}}>Heure </label> <br />
                  <DatePicker style={{margin:'0px 0px 0px 10px'}} />
                  <TimePicker style={{margin:'0px 0px 0px 30px'}}/> 
                </div>
              
                <div>
                  <label htmlFor="" style={{margin:'0px 0px 0px 10px'}}>Date de retour</label>
                  <label htmlFor="" style={{margin:'0px 0px 0px 90px'}}>Heure </label> <br />
                  <DatePicker style={{margin:'0px 0px 0px 10px'}} />
                  <TimePicker style={{margin:'0px 0px 0px 30px'}}/> 
                </div>
                
                <Flex gap="small" wrap="wrap" style={{ justifyContent: 'flex-end', margin:'30px 0px 0px 0px'}}>
                  <Button type="text" style={{cursor:'pointer', backgroundColor:'#ffc53d', margin:'0px 30px 0px 30px' 
                             }}> <CalculatorOutlined />
                     Devis et réservation
                  </Button>
                </Flex>
                
              </div> 
            </Form.Item>

          </div>
      </HeroSectionS>
      
      <ServiceSectionS>hero service</ServiceSectionS>

    </div>
  );
};

export default Home;
