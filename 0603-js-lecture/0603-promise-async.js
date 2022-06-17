function first() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 이행
      resolve('first resolve');
    }, 3000);
  })
}
// ?.then() 메서드는 Promise를 리턴한다, new Promise(resolve, reject)를 인수로 받는데, 하나는 해결됐을 때, 다른 하나는 거부 됐을 때의 콜백함수
// first().then() => first()라는 함수의 Promise() 리턴
first().then(()=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 이행
        resolve('second resolve');
      }, 2000);
    })
// Promise를 리턴 
}).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 이행
        resolve('third resolve');
      }, 1000);
    })
})

// ?async, await
// https://ko.javascript.info/async-await
// todo: async
// ?async => async를 함수 앞에 붙여주면 항상 Promise()를 리턴
// ?프로미스가 아닌 값을 반환하더라도, resolved(이행된) 상태의 프라미스로 값을 감싸서 이행된 프라미스가 반환되도록 한다
// ?async function 선언은 AsyncFunction객체를 반환하는 하나의 비동기 함수를 정의합니다. 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 Promise를 사용하여 결과를 반환합니다. 그러나 비동기 함수를 사용하는 코드의 구문과 구조는, 표준 동기 함수를 사용하는것과 많이 비슷합니다.

async function actionFunc(){
  let result;
  // ?await
  // todo: await
  // ?await은 async 함수 안에서만 동작함
  // ?await연산자는 Promise를 기다리기 위해 사용됩니다. 연산자는 async function 내부에서만 사용할 수 있습니다
  // ?result(프라미스에 의해 만족되는 값이 반환, 프라미스가 아니라면 그 값 자체가 반환) = await 표현될 값(프라미스 혹은 기다릴 어떤 값을 의미);
  // ?await문은 프라미스가 총족되거나 거부될 때까지 async(비동기) 함수의 실행을 정지하고, 프라미스가 충족되면 async(비동기) 함수를 일시 정지한 부분부터 실행한다
  // ?이 때 await의 리턴값은 프라미스에서 충족한 값이 된다
  // ?그러나 프라미스가 거부되면 await문은 거부된 값을 넘겨준다
  // ?await 연산자 다음에 나오는 문의 값(표현될 값)이 프라미스가 아니면 해당 값을 이행된 프라미스로 변환시킨다
  result = await first();
  console.log(result);  // first resolve만 출력이 되고 끝난다
}

// 여기서 호출
actionFunc();


