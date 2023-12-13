import { React,useState } from "react";
import { styled } from "styled-components";
import { Form, Select, Checkbox, Input, DatePicker, TimePicker,  Button, Flex, Row  } from 'antd';
import { CalculatorOutlined } from "@ant-design/icons";
import { Card ,  Col } from 'antd';

const { Meta } = Card;
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
  
  const SlectElemS = [
    { label: 'Aéroport',
      options: [
        { label: 'Aéroport Djerba',value: '1',},{label: 'Aéroport Enfidha', value: '2',},{label: 'Aéroport Monastir',value: '3',},
        {label: 'Aéroport Tunis Carthage', value: '4',},
      ],
    },
    { label: 'Centre ville',
      options: [
      {label: 'Djerba',value: '10',},{label: 'Hammamet',value: '11',},{abel: 'La marsa',value: '12',},{label: 'Monastir',value: '13',},
      {label: 'Nabeul',value: '14',},{label: 'Sousse',value: '15',},{label: 'Tozeur',value: '16',},{label: 'Tunis',value: '17',},
      ],
    },

  ];
  
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
     
      <div >  <h1>iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1></div>
       

    } else {
      console.log('Checkbox is NOT checked');
    }
    setIsSubscribed(current => !current);
  }
  
  return (
    <div> 
      
      <section style={{background:'#444', margin:'4px 0px 0px 0px'}}>
        <h1> entete x </h1>
      </section>

      <HeroSectionS>
          <div className="formClass"> 
            <h1 style={{fontsize: '22px', padding: '8px 5px 0 15px', margin: '0' }}>Location voiture Tunisie
            </h1>
            <Form.Item>
              <div> 
                <div style={{padding:'20px 10px'}}>
                    
                  <label htmlFor="" style={{fontsize: '13px', height:'6px', color:'#000', fontweight: 'normal', width: '100%', marginbottom:'6px'}}>Agence de prise en charge
                  </label>
                  
                  <Select  defaultValue=" " style={{ width: 330 }} options={SlectElemS }
                  />              
         
                  <div style={{fontsize:'11px', color:'#000',  width: '300'}}> 
                    <input type="Checkbox" value={ isSubscribed }  onChange={ handleChange }  id="y"  style={{margin:'6px 0px 0px 4px', lineheight: 'normal'}}/>
                    <label htmlFor ='y' style={{color: 'black', margin:'0 0 0 6px' }}> Agence de restitution différente</label>
                  
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
         
          <Row style={{}}>
            <Col span={6}>
              <Card hoverable style={{ width: 280, margin:'20px' }}
               cover={<img alt="example" src="https://ik.imagekit.io/z90usd6mcrv7/https://www.tunisia-rent-car.com/images/car/skoda-fabia-hatch-se-crystal-black-with-black-magic-roof.webp" />} >
                <Meta  title=" " 
                  description=" " />
                <div style={{ width: 250, backgroundColor:'#333',textAlign: 'center', color:'#fff',fontSize:'15px', letterSpacing:'1px', padding:'3px 0px 3px opx'}}>SKODA OCTAVIA</div>
                <div style={{margin:'15px', fontSize:'15px', textAlign:'center'}}>Prix à partir de 
                <span style={{fontsize:'30px', fontWeight:'bolder'}}> 23 €</span> jour
                </div>
               
                <span><Button style={{background:'#ffd666', margin:'25px 0 0 0', width: 200}}>NOUS CONTACTER</Button></span>
              </Card>
            </Col>
              
            <Col span={6}>
              <Card hoverable style={{ width: 280, margin:'20px' }}
               cover={<img alt="example" src="https://ik.imagekit.io/z90usd6mcrv7/https://www.tunisia-rent-car.com/images/car/vw-polo.webp" />} >
                <Meta  title=" " 
                  description=" " />
                <div style={{ width: 250, backgroundColor:'#333',textAlign: 'center', color:'#fff',fontSize:'15px', letterSpacing:'1px', padding:'3px 0px 3px opx'}}>VOLKSWAGEN POLO</div>
                <div style={{margin:'15px', fontSize:'15px', textAlign:'center'}}>Prix à partir de 
                <span style={{fontsize:'30px', fontWeight:'bolder'}}> 25 €</span> jour
                </div>
               
                <span><Button style={{background:'#ffd666', margin:'25px 0 0 0', width: 200}}>NOUS CONTACTER</Button></span>
              </Card>
            </Col>

            <Col span={6}>
              <Card hoverable style={{ width: 280, margin:'20px' }}
               cover={<img alt="example" src="https://ik.imagekit.io/z90usd6mcrv7/https://www.tunisia-rent-car.com/images/car/polo-sedan.webp" />} >
                <Meta  title=" " 
                  description=" " />
                <div style={{ width: 250, backgroundColor:'#333',textAlign: 'center', color:'#fff',fontSize:'15px', letterSpacing:'1px', padding:'3px 0px 3px opx'}}>VOLKSWAGEN POLO SEDAN</div>
                <div style={{margin:'15px', fontSize:'15px', textAlign:'center'}}>Prix à partir de 
                <span style={{fontsize:'30px', fontWeight:'bolder'}}> 27 €</span> jour
                </div>
               
                <span><Button style={{background:'#ffd666', margin:'25px 0 0 0', width: 200}}>NOUS CONTACTER</Button></span>
              </Card>
            </Col>

            <Col span={6}>
              <Card hoverable style={{ width: 280, margin:'20px' }}
               cover={<img alt="example" src="https://ik.imagekit.io/z90usd6mcrv7/https://www.tunisia-rent-car.com/images/car/skoda-octavia.webp" />} >
                <Meta  title=" " 
                  description=" " />
                <div style={{ width: 250, backgroundColor:'#333',textAlign: 'center', color:'#fff',fontSize:'15px', letterSpacing:'1px', padding:'3px 0px 3px opx'}}>SKODA OCTAVIA</div>
                <div style={{margin:'15px', fontSize:'15px', textAlign:'center'}}>Prix à partir de 
                <span style={{fontsize:'30px', fontWeight:'bolder'}}> 45 €</span> jour
                </div>
               
                <span><Button style={{background:'#ffd666', margin:'25px 0 0 0', width: 200}}>NOUS CONTACTER</Button></span>
              </Card>
            </Col>


          </Row>

        </div>
      
      </ServiceSectionS>

    </div>
  );
};

export default Home;
