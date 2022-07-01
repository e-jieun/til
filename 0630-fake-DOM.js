// 작성한 객체값
const objecLiteral = {
  name: 'literal로 일일이 작성한 객체',
  explainOne: '객체 하나를 직접 만듬',
  explainTwo: '여러 개의 객체를 만들어야 하는 상황을 생각해보면 무한정으로 복붙을 해야한다, 인스턴스',
  explainThree: '직접 작성하는 리터럴 방식으로는 데이터로서 사용하기는 어렵, 값이 바뀔 때마다 다시 만들어줘야함',
  callName: '객체 리터럴'
}

// 요소를 만들어주는 생성자 함수를 만들어 주는 컴포넌트
// 생성자 함수를 선언하는 방식
// 붕어빵 틀
class Element {
  // 생성자 함수 => 인스턴스의 역할
  // 디폴트 파라미터로 타입이 지정되어있다
  // 현재 하나의 태그
  constructor(tagName, id = '', classList = [], children = [], parent = null) {
    this.tagName = tagName;
    this.id = id;
    this.classList = classList;
    this.children = children;
    this.parent = parent;
    this.style = {
      width: '',
      height: '',
      backgroundColor: '',
      color: ''
    }
  }
}

// 인스턴스로 만들어준 새로운 생성자 함수
// const oldElementMaker = new Element(); 
// 생성자 함수와 같은 파라미터를 가지고 있는 OldElementMaker라는 이름을 가진 기명함수 

// console.dir(); 했을 때 보이는 태그란 객체의 속성과 같다
function OldElementMaker(tagName, id = '', classList = [], children = [], parent = null) {
  this.tagName = tagName;
  this.id = id;
  this.classList = classList;
  this.children = children;
  this.parent = parent;
  this.style = {
    width: '',
    height: '',
    backgroundColor: '',
    color: ''
  }
}
// class OldElementMaker {
//   constructor(tagName, id = '', classList = [], children = [], parent = null) {
//     this.tagName = tagName;
//     this.id = '';
//     this.classList = [];
//     this.children = [];
//     this.parent = null;
//     this.style = {
//       width: '',
//       height: '',
//       backgroundColor: '',
//       color: ''
//     }
//   }
// }

// 붕어빵
const Div = new Element('div');
const Section = new Element('section');
const Footer = new Element('footer');
const Ul = new Element('ul');
const Li = new OldElementMaker('li');
const P = new OldElementMaker('p');


