// 실행이 되지 않았던 건 script 태그를 안 떼어줬기 때문이었다
const root = document.getElementById('root');
console.dir(root);

// rgb 값에 들어가는 값 정수값
// rgb 값의 특성 rgb(rrr, ggg, bbb);
// 모두 정수 0-255까지
// 0: 검정, 255: 흰색
// 0은 0%, 255는 100%라면 

let bgColorValue = 100;
let bgColor;
//  = `rgb(${bgColorValue}, ${bgColorValue}, ${bgColorValue})`;

// 전체값에 얼마 이상이면 색이 변하고, 피드를 생성해주고, 인터랙션을 주는

/*
* 싫지만 수학공식
1. 전체값에서 일부값 퍼센트 구하기 : 일부값 / 전체값 * 100
2. 전체값에서 몇 퍼센트는 얼마인지 구하기 : 전체값 * 퍼센트 / 100
3. 숫자를 몇 퍼센트 증가시키는 공식 : 숫자 * (1 + 퍼센트 / 100)
4. 숫자를 몇 퍼센트 감소하는 공식 : 숫자 * (1 - 퍼센트 / 100)
*/

// ?  1. 전체값에서 일부값 퍼센트 구하기 : 일부값 / 전체값 * 100
function percentOne(total, value) {
  let result = (value / total) * 100;
  console.log(`전체값 ${total}에서 ${value}만큼의 값은 : ${result}% 입니다.`);
  return result;
}
console.log(percentOne(200, 20));

// ? 2. 전체값에서 몇 퍼센트는 얼마인지 구하기 : 전체값 * 퍼센트 / 100
function percentTwo(total, percent) {
  let result = (total * percent) / 100;
  console.log(`전체값 ${total}에서 ${percent}%의 값은 : ${result}입니다.`);
  return result;
}

// ? 3. 숫자를 몇 퍼센트 증가시키는 공식 : 숫자 * (1 + 퍼센트 / 100)
function percentThree(value, percent) {
  let result = value * (1 + percent / 100);
  console.log(`숫자값 ${value}에서 ${percent}% 증가시키면, 총 ${result}값이 됩니다.`);
  return result;
}

// ? 4. 숫자를 몇 퍼센트 감소하는 공식 : 숫자 * (1 - 퍼센트 / 100)
function percentFour(value, percent) {
  let result = value * (1 - percent / 100);
  console.log(`숫자값 ${value}에서 ${percent}% 감소시키면, 총 ${result}값이 됩니다.`);
  return result;
}

let totalHeight = root.offsetHeight;

root.addEventListener('mousemove', (event) => {
  // console.log(event.offsetX);
  let currentHeight = event.offsetY;
  console.log(event.offsetY);
  // h1.textContent
  // root.children[0].textContent = event.offsetX;
  // root.children[1].textContent = event.offsetY;
  console.log(Math.round(percentOne(totalHeight, currentHeight)));
  const colorChange = Math.round(percentOne(totalHeight, currentHeight));
  // !의사코드 꼭 사용하기
  // ?1-1. 절반(절반의 퍼센트를 구하고)을 넘으면
  if (colorChange >= 50) {
    // ?1-2. 배경색과 색상이 다크모드로 바뀐다(배경색 어둡게, 글씨색 밝게)
    bgColor = `rgb(${colorChange}, ${colorChange}, ${colorChange})`;
    root.style.backgroundColor = bgColor;
    root.style.transition = `1s`;
  } else {
    root.style.backgroundColor = null;
  }


});