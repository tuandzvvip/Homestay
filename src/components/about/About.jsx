import React from 'react'
import myImage from '../../assets/images/img1.jpg'
import "./about.css"
import img1 from '../../assets/images/img5.jpg'

function About() {
  return (
    <section id="about">
        <div className='about'>
        <div className="abouttotal">
            <div className="image">
                <img src={myImage} alt="" className='img2' />
            </div>
            <div className="contentabout">
                <div className="titleabout">
                    <h2>ABOUT US</h2>
                </div>
                <div className="pabout">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
                </div>
                <div className="buttonabout">
                    <button className='buttonAbout'>Discover More</button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default About