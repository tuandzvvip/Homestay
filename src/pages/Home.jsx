import React from 'react'
import Slide1 from "../components/slide1/Slide1";
import Footer from "../components/footer/Footer";
import Service from "../components/service/Service";
import About from "../components/about/About";
import Blogs from "../components/blogs/Blogs";
import Contact from "../components/contact/Contact";
import Video from "../components/Video/Video";
import Header from "../components/header/Header";

function Home() {
  return (
    <div>
        <header id='header'>
        <Header />
      </header>
      <main>
        <Video />
        <Slide1 />
        <Service />
        <About />
        <Blogs/>
        <Contact />
        

      </main>
      <footer id="footer">
        <Footer/>
      </footer>
    </div>
  )
}

export default Home