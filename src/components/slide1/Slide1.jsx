import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./slide1.css"

function Slide1() {

    var heroData = [
        {
          id: 1,
          image: require('../../assets/images/img1.jpg'),
          title: 'The perfect design for your website',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.google.com'
        },
        {
          id: 2,
          image: require('../../assets/images/img2.jpg'),
          title: 'Start Your Future Financial Plan',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.facebook.com'
        },
        {
          id: 3,
          image: require('../../assets/images/img3.jpg'),
          title: 'Enjoy the Difference',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.twitter.com'
        }
      ]
  return (
    <section id='package'>
      <div className="containerslide">
        <div className="content">
            <h1>Các điểm đến thu hút nhất Vinhome Ocean Park</h1>
        </div>
        <div className="slide">
        <Carousel>
        {
            heroData.map(hero => {
                return(
                    <Carousel.Item key={hero.id}>
                    <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                    />
                    <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            })
        }

    </Carousel>
        </div>     
    </div>
    </section>
  )
}

export default Slide1