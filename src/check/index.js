import React from 'react';
import { Link } from 'react-router-dom';
import './check.scss';

const CheckPage = ({ location }) => {

    return (
        <div className="inner" id="book-check">
            <h2>관람예약 확인</h2>
            <div className="book-check-wrap">
                <p className="book-exh-title">전시명 : {location.state.title}</p>
                <p className="book-name">예약자명 : {location.state.name}</p>
                <p className="book-time">예약 시간 : {location.state.time}</p>
                <p className="book-tel">예약자 전화번호 : {location.state.tel}</p>
                <p className="book-person">예약 인원 : {location.state.person}</p>
                <div className="check-btn-wrap">
                    <Link to="/"><button className="check-btn">홈으로</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CheckPage;