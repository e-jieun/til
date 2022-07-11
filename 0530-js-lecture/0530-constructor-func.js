class Example {
  constructor(name, age, work, job) {
    this.name = name;
    this.age = age;
    this.work = work;
    this.job = job;
  }

  getExampleName(){
    return this.name;
  }
  getExampleAge(){
    return this.age;
  }
  setAgePlus(plus){
    return this.age + plus;
  }
}

// ?More이라는 클래스가 Example을 확장함
// ?여기서 Example을 super class
// ?More을 서브 클래스라고 부른다 => More의 인스턴스는 Example의 메서드를 상속, More은 자신만의 메서드를 정의할 수 있음
// ?그리고 이 중의 일부는 class Example에 있는 같은 이름의 메서드를 덮어쓸 수 있다
// ?=> more의 메서드가 example의 메서드를 덮어쓰는 경우
// ?more에 존재하는 덮어쓰는 메서드가 example에 존재하는 덮어쓰인 메서드를 호출헤 인스턴스가 완전히 초기화 됐나 확인한다
// *ES6에선 extends절을 추가하는 것만으로도 확장이 가능하다

// *super() 사용 주의점
// *extends 키워드로 클래스를 확장하면 클래스 생성자는 슈퍼클레스 셍성자를 호출할 때 반드시 super()을 이용해야한다
// *서브 클래스에 만약 생성자를 정의하지 않으면 자동으로 생성된다, 묵시적으로 정의된 생성자는 전달된 값을 그대로 super()에 전달한다
class More extends Example{
  constructor(more, info){
    // ?Example의 메서드를 상속
    // !super()을 사용해서 슈퍼클래스 생성자 호출 전에는 this 키워드를 사용하지 말아야 한다
    // !이 규칙을 따르면 서브 클래스보다 슈퍼클래스를 먼저 초기화해야한다는 규칙도 지킬 수가 있다
    super('이지은', 28, 'student', 'university');
    // ?More은 자신만의 메서드를 정의할 수 있다
    this.more = more;
    this.info = info;
  }
}

const jieun = new Example('jieun', 28, 'none', 'none');
// console.table(jieun);
console.log(jieun.name);
console.log(jieun.getExampleAge());
console.log(jieun.setAgePlus(2));
console.log(jieun);

const moreJieun = new More('더', '정보를 달라');
console.log(moreJieun); //example의 속성을 모두 상속, 서브 클래스 more의 자신만의 메서드도 정의

console.clear();

// *for in문
// *for of는 반복가능한 객체? => iterable 객체가 와야하지만 for in은 다음에 어떤 객체든 쓸 수 있다
// *지정된 객체의 프로퍼티 이름을 순회
// *for(variable in object){
// *  statement
// *}
for(let key in moreJieun){
  console.log(key); //value만 나온다
  console.log(moreJieun[key]);  //key: value 모두 함께 출력
}