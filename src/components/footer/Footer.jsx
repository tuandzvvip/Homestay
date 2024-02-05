import React from 'react'
import "./footer.css"
import { FcAndroidOs } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcElectronics } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";
import { FcMultipleCameras } from "react-icons/fc";
import { FcReddit } from "react-icons/fc";

function Footer() {
  return (
    <div className='Footer'>
        <div className="contentFooter">
            <h6>Mọi nội dung tại đây © 2005 – 2024 Công ty TNHH Tư nhân OceanBooking.</h6>
            <h6>Bảo Lưu Mọi Quyền.
OceanBooking.com là thành viên của Tập đoàn Booking Holdings, nhà cung cấp dịch vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.</h6>

        </div>
        <div className="aroundFooter">
            <div className="photoFooter">
            <i class="iconFooter"><FcAndroidOs /></i>
            <i class="iconFooter"><FcCurrencyExchange /></i>
            <i class="iconFooter"><FcElectronics /></i>
            <i class="iconFooter"><FcMultipleCameras /></i>
            <i class="iconFooter"><FcReddit /></i>
            <i class="iconFooter"><FcLandscape /></i>
            </div>
        </div>
        <div className="overFooter">
            <h5 className='overcontentFooter'>Nội dung được copyright bởi KingAxe</h5>
        </div>
    </div>
  )
}

export default Footer