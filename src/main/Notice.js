import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './notice.scss';

/*global kakao*/ 

const Notice = () => {
    useEffect(()=>{
        //지도를 표시할 요소
        let container = document.querySelector('.map');
        //지도로 표시할 위치
        let options = {
            center: new kakao.maps.LatLng(35.23957856576499, 128.69088647127168),
            level:3
        };
        //지도 생성
        let map = new kakao.maps.Map(container,options);
        //마커가 표시될 위치
        let markerPosition = new kakao.maps.LatLng(35.23957856576499, 128.69088647127168);
        //마커 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });
    marker.setMap(map);
    },[])
    
    return (
        <section id="notice" className="inner">
            <div className="notice-left">
                <ul className="notice-nav">
                    <li>공지사항</li>
                    <li>보도자료</li>
                    <li>전시자료</li>
                    <li>교육자료</li>
                </ul>
                <ul className="notice-list">
                    <li>
                        <p className="notice-tit">[공지] 코로나19 백신 예방접종자 대상 무료관람 안내</p>
                        <div className="notice-wrt-date"><span className="notice-wrt">경남도립미술관</span><span className="notice-date">2021-06-08</span></div>
                    </li>
                    <li>
                        <p className="notice-tit">[공지] 경남도립미술관 전시일정 안내</p>
                        <div className="notice-wrt-date"><span className="notice-wrt">경남도립미술관</span><span className="notice-date">2021-06-07</span></div>
                    </li>
                    <li>
                        <p className="notice-tit">[공지] 경남도립미술관 2차 전시 준비에 따른 임시 휴관 안내</p>
                        <div className="notice-wrt-date"><span className="notice-wrt">경남도립미술관</span><span className="notice-date">2021-06-07</span></div>
                    </li>
                    <li>
                        <p className="notice-tit">[공지] 상반기 어린이 교육 프로그램 〈감이의 선물 : 친구...</p>
                        <div className="notice-wrt-date"><span className="notice-wrt">경남도립미술관</span><span className="notice-date">2021-05-06</span></div>
                    </li>
                </ul>
            </div>
            <div className="notice-right">
                <h2>오시는 길</h2>
                <div className="map"></div>
                <ul className="not-btn">
                    <li>소장자료</li>
                    <li><Link to="/booking">관람예약</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Notice