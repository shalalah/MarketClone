import React from "react";
import "../../css/productDetail.css";

import itemDetailImg from "../../assets/items/item1-detail-pic.jpeg";

export default function DetailInfos() {
    return (
        <div className="detailInfos">
            <div className="item1-detail-info-container">
                <div className="detail-item1-description">
                    <div className="pic-wrap">
                        <div className="pic">
                            <img src={itemDetailImg} alt="상품 디테일컷" />
                        </div>
                        <div className="pic-context">
                            <h3>미미네 떡볶이</h3>
                            <p className="item1-pic-context">
                                국물 떡볶이집의 원조, 미미네를 모르면 진정한
                                떡볶이 마니아라고 할 수 없어요. 쫄깃하면서도
                                촉촉한 식감을 유지하는 찰 밀떡과 진한 국물 맛을
                                살려주는 부산 어묵, 떡과 어묵을 넉넉하게 재우는
                                풍성한 떡볶이 국물의 조화는 신기하리만큼
                                중독적이죠. 홍대 맛집으로 이름나기 시작해
                                어느덧, 백화점으로까지 당당히 입점한 미미네 국물
                                떡볶이가 드디어, 간편식으로 나왔답니다. 매장
                                레시피를 그대로 담아냈으니 집에서도 '그 맛'을
                                똑같이 즐길 수 있어요. 고추장 베이스로 입맛
                                돋우는 살짝 매콤한 풍미에 깔끔하고도 부드러운
                                감칠맛. 양은 2~3명이 즐길 수 있을 정도로
                                넉넉해요. 떡과 어묵, 소스까지 완벽히 구성돼
                                있으니 기호에 맞게 쫑쫑 썬 대파와 채소, 당면
                                사리 등의 토핑을 추가해도 좋겠죠. 조금 더 품을
                                내어 바삭한 튀김까지 튀겨낸다면, 그리고 이를
                                떡볶이 국물에다 폭 찍어 먹는다면 세상 별미가
                                따로 없답니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="detail-item1-info"></div>
                <div className="detail-item1-review"></div>
                <div className="detail-item1-inquiry"></div>
            </div>
        </div>
    );
}
