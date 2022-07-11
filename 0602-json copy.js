// a해당 예제 네트워크 관련, 데이터 통신(json,ajax)
// *외부 API 데이터 수집, 분석, 가공 => 웹사이트 출력
// json(js object notation): 객체 표기 방법, 데이터 저장 확장자 이름
// 단순 간편 정의, XML(HTML의 원형인)의 대체제
// *json => js 표기법을 따름, 다른 언어와 달리 간단

// *JSON은 모두 대문자로 작성, 지원하는 메서드는 단 두개
// *JSON.stringfy(); -> 객체를 JSON 파일로 저장하는 메서드
// *JSON.parse(); -> JSON 확장자 파일을 객체로 파싱해주는 읽어들이는 메서드

// *ajax(asynchronous js ans xml): 비동기 통신 기술 => 다 보여주지 않고 조금씩 보여준다의 개념
// 비동기 통신 기술을 뜻함, 대표적 서비스 검색창의 연관검색에 실시간 변동 인터랙션, 지도 API
// 전체 데이터를 새로 전송할 필요가 없는 일부분일 경우, 조금만 업데이트, 변경을 할 수 없는가에서 시작
// ex) 대전 => 범위에 해당하는 데이터만 우선 전송하고 나머지는 새로운 요청이 있을 때마다 조금씩 더 보여주는 방식

// 서버 관리 측면에선 압도적 성능과 부하비용 절감 => 효율적
// 검색 인터랙션 측면 사용자가 모든 키워드 작성하지 않아도 알아서 찾아주는 방식의 서비스 제공 => 서비스 품질 측면에서 훌륭

// 통신관련 -> 요청(클라이언트)과 응답(호스트, 서버) https://joshua1988.github.io/web-development/http-part1/ 기반 지식이 필요

// fs === file system, node.js 지원 코어 메서드
// fs에 접근하는 모듈을 import한 작성
// import from을 사용하지 않고, 요청하다란 뜻의 require 함수를 사용하는 것 => 버전문제 / import 선언 지원 예상됨
// .require() 함수를 통해 필요한 기능, 모듈(코드모음)을 가져와 활용할 수 있으며 백엔드로서의 자바스크립트 언어에서 매우 중요한 함수 중 하나
const fs = require('fs');

// .readFile(): 파일을 읽는 메서드
fs.readFile('0602-json.JSON', 'utf-8', (error, jsonfile) => {
  if(error){return error;};
  const jsonData = JSON.parse(jsonfile); //js 일반 객체로 보기 위해 JSON.parse() method
  console.log(jsonData);  //.parse()로 json 파일을 객체로 읽어들였으므로 js 객체 방식으로 데이터 조회가 가능해짐
})

// 객체 리터럴: 사용자와 상호작용으로 사용하는 객체의 경우 리터럴로 작성하는 일은 거의 없고, input 데이터를 객체로 처리하는 방식을 사용
const example = {
  name: 'jieun',
  work: 'programming'
}

const exampleJSON = JSON.stringify(example);  //객체를 json 파일로 저장해주는 메서드
// .writeFileSync() 메서드를 통해 동기적으로 json 파일을 생성 => 백엔드 작업
fs.writeFileSync('0602-test.JSON', exampleJSON);
