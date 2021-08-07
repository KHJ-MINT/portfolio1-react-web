import React from 'react'
import { TeamOutlined, CalendarOutlined, PictureOutlined, ReadOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import './visual.scss';

const Visual = () => {
    return (
        <section id="visual">
            <div className="visual-img"><img src="img/1080px-GAM2009-555wh5.png" alt="비주얼이미지" /></div>
            <div className="time-info">
                <h3>이용안내</h3>
                <div>
                    <p className="info-tit">휴관일</p>
                    <p>매주 월요일, 1월 1일, 설날, 추석</p>
                </div>
                <div>
                    <p className="info-tit">관람시간</p>
                    <p>03월 ~ 10월 : 10 : 00 ~ 19 : 00<br />11월 ~ 02월 : 10 : 00 ~ 18 : 00</p>
                </div>
            </div>
            <ul className="main-service">
                <li>
                    <div className="service">
                        <span><TeamOutlined /></span>
                        <p>관람안내</p>
                    </div>
                </li>
                <li>
                    <Link to="/booking">
                    <div className="service">
                        <span><CalendarOutlined /></span>
                        <p>단체예약</p>
                    </div>
                    </Link>
                </li>
                <li>
                    <div className="service">
                        <span><PictureOutlined /></span>
                        <p>소장자료</p>
                    </div>
                </li>
                <li>
                    <div className="service">
                        <span><ReadOutlined /></span>
                        <p>교육/행사</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Visual