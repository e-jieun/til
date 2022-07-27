// *procedural programming: 절차형 프로그래밍

function proSumMaker(...args) {
  // *args: number || typeof args === number: 배열의 숫자인 원소만을 가려내도록 반복해서 조건문으로 필터링해주는 부분
  let tempResult = 0;
  // *타입이 숫자로 판별된 원소만을 다시 빈 배열의 원소로 재배치해 줄 배열
  let tempArr = [];
  // *숫자가 누적돼 더해지도록 해줄 변수, 0으로 초기화
  if (Array.isArray(args) === true) {
    console.log(args);
    for (let i = 0; i < args.length; i++) {
      // !여기서 절차형으로 사용했기 때문에 배열의 원소가 순서대로 number 타입인지 확인되도록 했어야 했는데 [i] 인덱스를 적어주지 않아서 아래의 식이 동작되지 않았었음
      if (typeof args[i] === 'number') {
        tempArr[tempArr.length] = args[i];
        // console.log(tempArr);
      }
    }
    // *reducer 함수의 역할을 해주는 반복해서 가산해주는 부분
    // !이 부분에서 tempArr의 길이만큼 반복되도록 작성해주지 않은 실수가 있었음
    for (let i = 0; i < tempArr.length; i++) {
      tempResult += tempArr[i];
      console.log('tempResult: ' + tempResult);
    }
    // *누적돼 더해진 결과값을 리턴해주는 부분
    return tempResult;
  }
}

console.log(proSumMaker(1, 2, 3, 4, 5, 6, 7));