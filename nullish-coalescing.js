// *1. use default parameter
function printMsg(text = 'this isn\'t text'){
  console.log(text);
}

printMsg('hi'); //hi
printMsg(undefined);  //default parameter
printMsg(null); //null
printMsg(1);  //1

// *2. use nullish coalescing operator(널 병합 연산자)
// *왼쪽 코드 ?? 오른쪽 코드;: 왼쪽 코드가 null || undefined인 경우에만 오른쪽 코드가 실행되는 방식이다
function printMsgNullish(text){
  let msg = text ?? 'this is not text';
  console.log(msg);
}

printMsgNullish(1); //1
printMsgNullish(undefined); //this is not text
printMsgNullish(null);  //this is not text
printMsgNullish('hello'); //hello

// *2-1 use logical OR operator(논리합 연산자)
// *왼쪽 코드 || 오른쪽 코드;: 왼쪽 코드가 false에 해당하는 경우(0, -0, undefined, null, NaN, false, 빈 문자열('', "", ``))
function printMsgOR(text){
  let msg = text || 'this is not text';
  console.log(msg);
}
printMsgOR(undefined);  //this is not text
printMsgOR('text'); //text