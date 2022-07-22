"use strict";
// *selector
const root = document.getElementById('root');
const caCon = document.getElementById('ca-con');
const caBtn = document.getElementById('ca-plus');
const caBtnItem = caBtn === null || caBtn === void 0 ? void 0 : caBtn.children;
console.log(root);
console.log(caCon);
console.log(caBtn);
console.log(caBtnItem);
// *카테고리가 늘어나도록 하는 부분
// todo: #ca-con의 자식으로 생성되도록 해주는 방식
//todo: psuedo 2. 클릭해서 생긴 부분은 형제 중 맨 마지막 요소
//todo: psuedo 3. 클릭하면 input에 입력한 저장이 가능해진다
//todo: psuedo 4. 요소 외의 다른 부분을 클릭하면 input에 입력한 값이 저장이 가능하고, 요소를 클릭하면 요소의 input text를 수정할 수가 있다.
//todo: psuedo 1. 클릭할 때마다 category의 div와 그 자식 요소로 input이 들어간 컴포넌트가 하나씩 생성되도록 해준다
// todo: caBtn 클릭 이벤트
// todo: isStatus로 현재 클릭한 횟수를 표시
// todo: isStatus만큼 클릭할 때마다 생성되도록 한다
// *ca components
const caItem = caCon === null || caCon === void 0 ? void 0 : caCon.children;
// *caBtn => ca add btn
let isStatus = 0;
caBtn === null || caBtn === void 0 ? void 0 : caBtn.addEventListener('click', (e) => {
    isStatus += 1;
    console.log(isStatus);
    // console.log(e);
    for (let i = 0; i < 1; i++) {
        const caChild = document.createElement('div');
        caChild.innerHTML = `<input type="text"></input>`;
        caChild.classList.add('ca-item');
        console.log(caChild);
        caCon === null || caCon === void 0 ? void 0 : caCon.appendChild(caChild);
        console.log(caCon);
    }
});
