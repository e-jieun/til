// 요소를 만들어주는 클래스
class Element {
  // 생성자 함수
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

const Div = new Element('div');
const Section = new Element('section');
const Footer = new Element('footer');
const Ul = new Element('ul');
const Li = new OldElementMaker('li');
const P = new OldElementMaker('p');


