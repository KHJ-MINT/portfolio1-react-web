import React from 'react';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import './exhibitInfo.scss';

const ExhibitPage = () => {
    return (
        <div className="inner" id="exhibit-info">
            <h2>현재 진행 중인 전시</h2>
            <div className="exhibit-list-wrap">
                <div className="exhibit-info-1 info">
                    <div className="exhibit-img-wrap">
                        <img src="img/exhibit-b-1.jpg" alt="전시이미지" />
                    </div>
                    <div className="exhibit-info-text">
                        <p>전시명 : <span>2021 근현대미술기획《황혜홀혜 恍兮惚兮》</span></p>
                        <p>전시기간 : <span>2021-06-25 ~ 2021-10-10</span></p>
                        <p>전시설명 : <span>전시 제목인 《황혜홀혜 恍兮惚兮》는 노자 도덕경 21장에 나오는 구절로 ‘홀하고 황한 가운데 형상이 있다’는 풀이에 비추어, 해가 뜨고 지는 여명기와 같은 그윽하고 어두운 가운데 실체가 있다는 의미로 해석하며 ‘이상향’ 이라는 보이지 않고, 존재하는 않는 세계를 사유할 수 있는 단서로 작동한다.</span></p>
                        <div className="exh-book-btn"><Link to="/booking">관람예약<span><RightOutlined /></span></Link></div>
                    </div>
                </div>
                <div className="exhibit-info-2 info">
                    <div className="exhibit-img-wrap">
                        <img src="img/exhibit-b-2.jpg" alt="전시이미지" />
                    </div>
                    <div className="exhibit-info-text">
                        <p>전시명 : <span>2021 경남근현대작가조명전《여산 양달석 黎山 梁達錫》</span></p>
                        <p>전시기간 : <span>2021-06-25 ~ 2021-10-10</span></p>
                        <p>전시설명 : <span>“동화를 쓰는 기분으로 그림을 그린다. 마치 아픈 매를 맞으면서도 웃어야 하고 찢어질 듯한 역경에서도 마음만은 행복하게 즐겨야 하는 모순처럼...”</span></p>
                        <div className="exh-book-btn"><Link to="/booking">관람예약<span><RightOutlined /></span></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExhibitPage
