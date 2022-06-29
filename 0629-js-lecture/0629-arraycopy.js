// ?원시값(primitive type): 원시값은 기존의 값, 값 자체를 가지고 있는 값을 의미?
// ?number, string, boolean, null, undefined
let A = 1; //A는 1을 대입
let B = A; //B에 A를 대입 B에 1이 대입
let F = 1; //F에 1을 대입
console.log(A === F);
console.log(A === B);
console.log(B); //1
B++; //A = 1 => B에 대입 B의 현재값은 1 / B++;은 2가 된다
console.log(B); //2
console.log(A); //1
console.log(A === B); //false //1 === 2
// 참조값: 배열, 객체는 값을 저장하고 있는 주소를 가지고 있는 값, 그 값을 참조해서
let C = [1, 2, 3, 4]; //number 4개를 가지고 있는 배열
let D = [...C]; //?전개 연산자: [...arr]에 이=있는 배열의 모든 원소를 배열에 담아줌
// *전개연산자의 원형
// array를 매개변수로 가지는 화살표 함수
let Dstatement = (array) => {
    // 아마도 숫자 배열이 들어가는 빈 배열이 아닐까?
    let arrayData = [];
    // 매개변수로 들어온 배열의 요소마다 반복
    array.forEach(element => {
        // arrayData라는 빈 배열의 마지막 요소로 매개변수로 들어온 배열의 요소를 추가해준다
        arrayData.push(element);
    });
    // 그리고 마지막 요소로 추가해주는 반복문이 끝나고 나서 빈 배열이었지만 지금은 요소가 차곡차곡 추가된 배열을 리턴해준다
    return arrayData;
};
let dValue = Dstatement(C);
// 다시 빈 배열에 C배열을 똑같은 구성으로 넣어준 방법 === 전개 연산자
console.log(dValue); // [1, 2, 3, 4];
// *깊은 복사를 진행한 부분
// ?새로운 배열에 같은 값을 옯겨담는 과정이 있었기 떄문에 기존 배열과 새로운 배열이 다르다고 판단
console.log(C === dValue); //false
// 값이 같음에도 불구하고 같은 값이 아니라고 나온다
let E = C;
console.log(E);
console.log(C);
console.log(E === C); //true
// 값이 같은 E와 C의 값은 같은 값이 맞다고 나온다
// ?빈 배열에 C배열을 push하는 방식으로 똑같이 구성한 변수 dvalue와 배열 C가 다른 이유 => 새로운 배열에 넣어줌으로서 참조값이 다르기 때문, 같은 값을 가리키지만 참조값(값을 가리키는 주소를 다르게 갖고 있기 때문에)이 다르기 때문에 같은 값이 아니다
C.push(5);
// push(5)니까 C배열의 마지막에 5라는 원소가 들어가게 된다
console.log(C); //[1, 2, 3, 4, 5];
console.log(D); //[1, 2, 3 ,4];
console.log(dValue); //[1, 2, 3, 4];
// *얕은 복사를 진행한 부분
// ?변수에 바로 대입, 배열을 변수에 담았다 -> 동일한 배열 데이터를 다른 이름의 변수가 가리키는 것뿐이기 때문에 같은 값으로 판별된다
console.log(E); //E === C(완전히 동일하다)이기 때문 === true
console.log(dValue === D); //dValue === D -> 그러나 다른 방식을 통해 배열에 새로 넣어준 값들이므로 참조값이 달라서 false가 나온다
// ?같은 원소를 가진 배열이어도 데이터가 자리잡은 지점이 다르기 때문에 다른 것으로 프로그래밍은 판별하게 된다
// ?shallow copy => 얕은 복사
// ?여러 표지판이 한 곳을 가리킨다
// ?deep copy => 깊은 복사
// ?같은 값처럼 보이는 곳을 각각 다른 표지판이 가리킨다
