// *selector
const root = document.getElementById('root');
const caCon = document.getElementById('ca-con');
const caBtn = document.getElementById('ca-plus');
const caBtnItem = caBtn?.children;
console.log(root);
console.log(caCon);
console.log(caBtn);
console.log(caBtnItem);

// *카테고리가 늘어나도록 하는 부분
// todo: #ca-con의 자식으로 생성되도록 해주는 방식
//todo: psuedo 2. 클릭해서 생긴 부분은 형제 중 맨 마지막 요소
//todo: psuedo 3. 클릭하면 input에 입력한 저장이 가능해진다
//todo: psuedo 4. 요소 외의 다른 부분을 클릭하면 input에 입력한 값이 저장이 가능하고, 요소를 클릭하면 요소의 input text를 수정할 수가 있다.

// todo: caBtn 클릭 이벤트
// *ca components
const caItem = caCon?.children;

// *caBtn => ca add btn
// todo: 사실상 작동하는데 없어도 되는 변수여서 나중에 삭제해줄 예정
// todo: isStatus로 현재 클릭한 횟수를 표시
let isStatus:number = 0;
caBtn?.addEventListener('click', (e) => {
  isStatus += 1;
  console.log(isStatus);
  // console.log(e);
  // todo: 클릭할 때마다 생성되도록 한다 =>  1개씩
  //todo: psuedo 1. 클릭할 때마다 category의 div와 그 자식 요소로 input이 들어간 컴포넌트가 하나씩 생성되도록 해준다
  for(let i  = 0; i < 1; i++){
    const caChild = document.createElement('div');
    
    // todo: 추가를 하면 이 부분에 입력받는 것이 올 수 있도록 해야한다, 그리고 다시 수정도 가능하게 해줘야 하는데...
      caChild.innerHTML = `<input type="text"></input>`;
      caChild.classList.add('ca-item');
      console.log(caChild);
      caCon?.appendChild(caChild);
      console.log(caCon);
    }
});

