import React from 'react';
import Exhibit from './Exhibit';
import Notice from './Notice';
import Sns from './Sns';
import Visual from './Visual';


const MainPage = () => {
    return (
        <div id="wrap">
            {/* 메인비주얼 */}
            <Visual />
            {/* 전시 */}
            <Exhibit />
            {/* sns */}
            <Sns />
            {/* 안내 */}
            <Notice />
        </div>
    )
}

export default MainPage