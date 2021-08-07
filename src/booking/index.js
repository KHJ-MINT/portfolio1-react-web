import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import './booking.scss'

const BookingPage = () => {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [tel, setTel] = useState("");
    const [person, setPerson] = useState("");
    const [title, setTitle] = useState("");

    const titleChange = (e) => {
        setTitle(e.target.value);
        //console.log(e.target.value);
    }
    const nameChange = (e) => {
        setName(e.target.value);
    }
    const timeChange = (e) => {
        setTime(e.target.value);
    }
    const telChange = (e) => {
        setTel(e.target.value);
    }
    const personChange = (e) => {
        setPerson(e.target.value);
    }
    //console.log(name, time, tel, person)


    return (
        <div className="inner" id="booking-page">
            <h2>관람예약</h2>
            <div className="booking-wrap">
                <form className="booking-form">
                    <div className="booking-form-table">
                        <p className="exhibit-title-text">
                            <span>전시명</span>
                            <select className="exhibit-title" name="title" onChange={titleChange} >
                                <option selected value="전시제목을 선택해주세요.">전시제목을 선택해주세요.</option>
                                <option value="2021 근현대미술기획 《황혜홀혜 恍兮惚兮》" >2021 근현대미술기획 《황혜홀혜 恍兮惚兮》</option>
                                <option value="2021 경남근현대작가조명전《여산 양달석 黎山 梁達錫》">2021 경남근현대작가조명전《여산 양달석 黎山 梁達錫》</option>
                            </select>
                        </p>
                        <p className="booking-name">
                            <span>예약자 성명</span>
                            <input type="text" key="name" name="name" placeholder="이름을 입력해주세요." onChange={nameChange} />
                        </p>
                        <p className="booking-time-wrap">
                            <span>날짜 및 시간</span>
                            <input type="text" key="time" name="time" placeholder="월, 일, 시간을 입력해주세요." onChange={timeChange} />
                        </p>
                        <p className="booking-tel">
                            <span>전화번호</span>
                            <input placeholder="'-'을 빼고 입력해주세요." type="tel" key="telephone" name="telephone" onChange={telChange} />
                        </p>
                        <p className="booking-per">
                            <span>인원</span>
                            <input placeholder="1~5명까지 입력해주세요." type="number" key="person" name="person" onChange={personChange} />
                        </p>
                        <Link to={{
                            pathname: "/check",
                            state: {
                                name: name,
                                title: title,
                                tel: tel,
                                person: person,
                                time: time,
                            },
                        }}>
                            <button className="booking-btn" type="submit">예약하기</button>
                        </Link>
                    </div>
                </form>
                <div className="booking-date">
                    <div className="calendar"><Calendar /></div>
                    <div className="opening-time-box">
                        <p><span>개관일 : </span><span className="open-date">휴관일 제외</span></p>
                        <p><span>휴관일 : </span><span className="close-date">매주 월요일, 1월 1일, 설날, 추석</span></p>
                        <p><span>관람시간 : </span><span className="summer open-time">03월 ~ 10월 : 10 : 00 ~ 19 : 00</span><br /><span className="winter open-time">11월 ~ 02월 : 10 : 00 ~ 18 : 00</span></p>
                        <p><span>전시해설 : </span><span>잠정 중단</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPage;