import React from 'react'
import "./video.css"
import video from "../../assets/video.mp4"
import { GrLocation } from "react-icons/gr";
import { CiPenpot } from "react-icons/ci";

function Video() {
  return (
    <section id='home'>
        <div className='video'>
        <div className="overplay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent">
            <div className="textDiv">
                <span className='smallText'>
                     Our Packages
                </span>

                <h1 className='homeTitle'>
                    Search your Holiday
                </h1>
            </div>

            <div className="carDiv">
                <div className="destinationInput">
                    <label htmlFor="city">Search your destination:</label>
                    <div className="input1">
                        <input type="text" placeholder='Enter name here...' />
                        <GrLocation className="icon"/>
                    </div>
                </div>

                <div className="dateInput">
                    <label htmlFor="date">Select your date</label>
                    <div className="input">
                        <input type="date" placeholder='Enter name here...' />
                    </div>
                </div>

                <div className="priceInput">
                    <div className="label_total">
                        <div className="pricetotal">
                        <label htmlFor="price">Max price:</label>
                        <h3 className='total'>$5000</h3>
                        </div>
                        <div className="input">
                            <input type="range" max="5000" min='1000' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="moreOption">
            <div className="Option">
            <CiPenpot />
            <label htmlFor="text">More Filter</label>
            </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Video