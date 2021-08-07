import React from 'react';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import './exhibit.scss';

const Exhibit = () => {
    return (
        <section id="exhibit" className="inner">
            <div className="exh-tit">
                <h2>현재 진행 중인 전시</h2>
                <Link to="/exhibit"><span><RightOutlined /></span></Link>
            </div>
            <div className="exh">
                <ul className="exh-list-wrap">
                    <li className="exh-list">
                        <div className="exh-img">
                            <img src="img/exhibit1.jpg" alt="전시이미지" />
                        </div>
                        <div className="exh-txt">
                            <p className="exh-title">2021 근현대미술기획《황혜홀혜 恍兮惚兮》</p>
                            <p className="exh-date">2021-06-25 ~ 2021-10-10</p>
                            <div className="exh-book-btn"><Link to="/booking">관람예약<span><RightOutlined /></span></Link></div>
                        </div>
                    </li>
                    <li className="exh-list">
                        <div className="exh-img">
                            <img src="img/exhibit2.jpg" alt="전시이미지" />
                        </div>
                        <div className="exh-txt">
                            <p className="exh-title">2021 경남근현대작가조명전《여산 양달석 黎山 梁達錫》</p>
                            <p className="exh-date">2021-06-25 ~ 2021-10-10</p>
                            <div className="exh-book-btn"><Link to="/booking">관람예약<span><RightOutlined /></span></Link></div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Exhibit