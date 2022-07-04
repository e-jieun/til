// this는 말 그대로 이것, 해당 스코프의 객체를 가리키는 것
// 유연해서 어렵다 => this는 무엇일지 모르니 콘솔을 자주 확인하기

// *대부분 이벤트의 콜백함수를 사용할 때 화살표 함수를 쓰는 것도, function(){}을 쓰는 것도 이유가 있다
// !function(){} => funtion 역으로 가는 경우가 아니라면 this를 섞어 쓰지는 않는다
// this가 헷갈리는 주 원인? => 화살표 함수()=>{}가 가지는 편의성
// 사용을 다르게 하기 위해 this 역할을 바꿔놓음

// 선언문: function(){}
// 리터럴(표현식): this

// !this? -> 자주 사용 여러 함수를 한번에 묶어서 처리할 때, 바인딩한다
// this를 쓸 때는 유연하므로 조심해서 사용하자
// this => event.deltaY/event.target 등의 event.object 안에 this가 들어있음
// this는 어지간하면 쓰지 말자
// ?this를 무조건 써야만 할 때 외에는 쓰지 말자 => 개발자가 힘들어서

// ?this를 사용하지 않을 때는 arrow function을 많이 사용한다

function one(elem){
  elem.addEventListener('click', function(){
    console.log(this);
    // this는 주체가 되는 것을 가리킨다
    // this는 elem을 가리킨다
  })
}

function two(elem){
  elem.addEventListener('click', () => {
    console.log(this);  //상위 객체를 가리킨다
  })
}

function three(elem){
  let getValue = elem.map(elem => elem);
}

// 화살표 함수는 매개변수가 하나일 때 소괄호를 안 써도 된다
// 두 개 부터는 소괄호를 쓴다
// 1. 어지간하면 쓴다
// 2. 리턴을 키워드를 안 써도 리턴이 되는  경우가 있다 -> .map()
// {return data} -> 아무런 변형 없이 리턴만 할 것이라면 키워드를 삭제해도 된다

// 앞 중괄호 다음에 return이 붙어있다면 리턴을 지워도 된다
// 비권장

