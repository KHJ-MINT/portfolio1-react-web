import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div class="inner">
                <h1 id="footer-logo"><img src="img/logo_kor.gif" alt="로고이미지" /></h1>
                <div id="footer-right">
                    <ul className="footer-nav-wrap">
                        <li>개인정보취급방침</li>
                        <li>저작권정책</li>
                        <li>오시는 길</li>
                        <li>관람안내</li>
                        <li>미술관 소개</li>
                        <li>경남도청 바로가기</li>
                    </ul>
                    <div class="address">
                        <address>(우 51154) 경상남도 창원시 의창구 용지로 296 (경남도립미술관)</address>
                        <p>055-254-4600</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer