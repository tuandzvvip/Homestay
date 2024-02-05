import React from 'react'
import "./blogs.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Blogs() {
    const servicesData = [
        {
          id: 1,
          img: 'https://pix8.agoda.net/hotelImages/22423667/-1/c8b11fd11884172c23959f0ccb4ebfc0.jpg?ca=19&ce=1',
          icon: 'fa-solid fa-location-dot',
          place: 'Vinhome Ocean Park 1',
          title: 'Nikko Hotel - The Classy Life',
          description: 'Giá mỗi đêm rẻ nhất từ ',
          cost : 'VND 758.997'
        },
        {
            id: 2,
            img: 'https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0',
            icon: 'fa-solid fa-location-dot',
            place: 'Vinhome Ocean Park 1',
            title: 'LuxHomes Saigon - Vinhomes Central Park',
            description: 'Giá mỗi đêm rẻ nhất từ ',
            cost : 'VND 955.556'
        },
        {
            id: 3,
            img: 'https://pix8.agoda.net/hotelImages/1517561/-1/c8d7f0bb4cf45c2493dfaf257b0b1750.jpg?ca=16&ce=1',
            icon: 'fa-solid fa-location-dot',
            place: 'Vinhome Ocean Park 1',
            title: 'Lavis 18 Residence',
            description: 'Giá mỗi đêm rẻ nhất từ ',
          cost : 'VND 1.114.564'
        },
        {
            id: 4,
            img: '	https://pix8.agoda.net/hotelImages/941/9411958/9411958_19082615140080010014.jpg?ca=9&ce=1',
            icon: 'fa-solid fa-location-dot',
            place: 'Vinhome Ocean Park 1',
            title: 'Cozrum Homes Premier Residences',
            description: 'Giá mỗi đêm rẻ nhất từ ',
          cost : 'VND 399.999'
        },
        {
            id: 5,
            img: 'https://pix8.agoda.net/hotelImages/38459075/-1/9974724aaf93398c639aa7c3e9c8d269.jpg?ce=0',
            icon: 'fa-solid fa-location-dot',
            place: 'Vinhome Ocean Park 1',
            title: 'CeLaVie Services Apartment -The Vinhome and Landmark',
            description: 'Giá mỗi đêm rẻ nhất từ ',
          cost : 'VND 1.189.354'
        },
        {
            id: 6,
            img: 'https://pix8.agoda.net/hotelImages/161/16138932/16138932_20070716490091376123.jpg?ca=12&ce=1',
            icon: 'fa-solid fa-location-dot',
            place: 'Vinhome Ocean Park 1',
            title: 'Cozrum Homes Saphera Residence',
            description: 'Giá mỗi đêm rẻ nhất từ ',
            cost : 'VND 395.058'
        },
        {
            id: 7,
          img: 'https://pix8.agoda.net/hotelImages/161/16138932/16138932_20070716490091376123.jpg?ca=12&ce=1',
          icon: 'fa-solid fa-location-dot',
          place: 'Vinhome Ocean Park 1',
          title: 'Cozrum Homes Rivera Corner',
          description: 'Giá mỗi đêm rẻ nhất từ ',
          cost : 'VND 330.498'
        },
        {
            id: 8,
          img: 'https://pix8.agoda.net/hotelImages/5684454/-1/4f528b3f9630fd4839628ae8729e5865.jpg?ce=0',
          icon: 'fa-solid fa-location-dot',
          place: 'Vinhome Ocean Park 1',
          title: 'NTA Sercived Apartments',
          description: 'Giá mỗi đêm rẻ nhất từ ',
          cost : 'VND 1.350.030'
        }
      ]
  return (
    <section id='pages'>
        <div className="headerBlog">
            <div>
                <h2 className='contentBlog'>Những Homestay được đề xuất cho quý khách:</h2>
            </div>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Vin1">
      <Container fluid>
        <div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={3} className='holder' key={services.id}>
                  <div className="imgservices">
                    <img className='imgservice' src={services.img}/>
                  </div>
                  <span className='titleService'>{services.title}</span>
                  <div className="iconBlog">
                    <i className={services.icon}></i>
                    <span className='placeBlog'>{services.place}</span>
                  </div>
                  <div className="cost">
                  <span className='ttblog'>{services.description}</span>
                  <span className='costblog'>{services.cost}</span>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
      </Tab>
      <Tab eventKey="profile" title="Vin2">
      <Container fluid>
        <div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={3} className='holder' key={services.id}>
                  <div className="imgservices">
                    <img className='imgservice' src={services.img}/>
                  </div>
                  <span className='titleService'>{services.title}</span>
                  <div className="iconBlog">
                    <i className={services.icon}></i>
                    <span className='placeBlog'>{services.place}</span>
                  </div>
                  <div className="cost">
                  <span className='ttblog'>{services.description}</span>
                  <span className='costblog'>{services.cost}</span>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
      </Tab>
      <Tab eventKey="contact" title="Vin3">
      <Container fluid>
        <div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={3} className='holder' key={services.id}>
                  <div className="imgservices">
                    <img className='imgservice' src={services.img}/>
                  </div>
                  <span className='titleService'>{services.title}</span>
                  <div className="iconBlog">
                    <i className={services.icon}></i>
                    <span className='placeBlog'>{services.place}</span>
                  </div>
                  <div className="cost">
                  <span className='ttblog'>{services.description}</span>
                  <span className='costblog'>{services.cost}</span>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
      </Tab>
    </Tabs>
        </div>
    </section>
  )
}

export default Blogs