import randomNum from "./0617-dice-project.js";

function makeElem(number, elem, contents = ''){
  let string = '';
  for(let i = 0; i < number; i++){
    string += `<${elem}>${contents}</${elem}>`
  }
  console.log(string);
  // ?string을 리턴해주지 않아서 잘 안 붙는 거였다
  return string;
}

function setSize(elem, width, height){
  elem.style.width = width;
  elem.style.height = height;
}

// todo: 요소가 생기도록 해줄 부분
const root = document.getElementById('root');
console.log(root);


// todo: random을 통해 나오는 숫자의 결과만큼 요소를 반복해서 생성해서 붙여준다
// todo: 이벤트 핸들러를 달아준다
root.addEventListener('click', function(){
  this.innerHTML = makeElem(randomNum(1, 6), 'div', randomNum('',6));
  console.log(root);

})

// todo: 나타나도록 css 설정해주기 => 우선 그냥 숫자만 나타내줬다
const rootChild = Array.from(root.children);
setSize(root, '100vw', '100vh');
root.style.display = 'flex';
root.style.columnGap = '2vw';


