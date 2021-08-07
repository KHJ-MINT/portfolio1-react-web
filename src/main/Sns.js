import React from 'react';
import './sns.scss';

const Sns = () => {
    return (
        <section id="sns">
            <h2>미술관 SNS</h2>
            <div className="sns-video">
                <img src="img/youtube.png" alt="유튜브 이미지"/>
            </div>
            <ul id="sns-list">
                <li>
                    <div><img src="img/sns-icon1-ft.png" alt="sns아이콘" /></div>
                    <p>페이스북</p>
                </li>
                <li>
                    <div><img src="img/sns-icon3-ft.png" alt="sns아이콘" /></div>
                    <p>유튜브</p>
                </li>
                <li>
                    <div><img src="img/sns-icon5-ft.png" alt="sns아이콘" /></div>
                    <p>네이버 블로그</p>
                </li>
                <li>
                    <div><img src="img/sns-icon2-ft.png" alt="sns아이콘" /></div>
                    <p>인스타그램</p>
                </li>
                <li>
                    <div><img src="img/sns-icon4-ft.png" alt="sns아이콘" /></div>
                    <p>카카오톡 채널</p>
                </li>
            </ul>
        </section>
    )
}

export default Sns