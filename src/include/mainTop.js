import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss';

const Header = () => {
    return (
        <header id="header-wrap" className="inner">
            <h1 id="logo"><Link to="/"><img src="img/logo_kor.gif" alt="로고이미지" /></Link></h1>
            <nav>
                <div id="lang">
                    <p className="lang-tit">Language
                        <ul>
                            <li>English</li>
                            <li>Chinese</li>
                            <li>Japanese</li>
                        </ul>
                    </p>
                </div>
                <ul id="main-nav">
                    <li className="nav-tit">미술관 소개
                        <ul id="sub-nav">
                            <li>미술관소개</li>
                            <li>시설안내</li>
                            <li>오시는길</li>
                            <li>주변안내</li>
                        </ul>
                    </li>
                    <li className="nav-tit">전시
                        <ul id="sub-nav">
                            <li>현재전시</li>
                            <li>지난전시</li>
                            <li>예정전시</li>
                        </ul>
                    </li>
                    <li className="nav-tit">교육/행사
                        <ul id="sub-nav">
                            <li>어린이</li>
                            <li>청소년</li>
                            <li>일반인</li>
                            <li>전시연계</li>
                            <li>학술</li>
                        </ul>
                    </li>
                    <li className="nav-tit">소장자료
                        <ul id="sub-nav">
                            <li>저작권 안내</li>
                            <li>소장작품</li>
                            <li>도서자료</li>
                        </ul>
                    </li>
                    <li className="nav-tit">관람/예약
                        <ul id="sub-nav">
                            <li>관람안내</li>
                            <li>사전예약</li>
                            <li>단체예약</li>
                        </ul>
                    </li>
                    <li className="nav-tit">정보마당
                        <ul id="sub-nav">
                            <li>공지사항</li>
                            <li>자료실</li>
                            <li>자원봉사</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header