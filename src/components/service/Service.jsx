import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./service.css"


const servicesData = [
  {
    id: 1,
    icon: 'fa-solid fa-ship',
    title: 'Cho thuê du thuyền',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 2,
    icon: 'fa-solid fa-water',
    title: 'Trải nghiệm bể tạo sóng',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'Dịch vụ BBQ ngoài trời',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 4,
    icon: 'fa-brands fa-unity',
    title: 'Trải nghiệm thực tế ảo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 5,
    icon: 'fa-brands fa-korvue',
    title: 'Tham gia lễ hội Hàn Quốc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 6,
    icon: 'fa-solid fa-italic',
    title: 'Trải nghiệm trời Tây',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  }
]

function Service() {
  return (
    <section id="service" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='title'>Our services</h2>
          <div className="subtitle">- services we provide -</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="iconservice">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service;