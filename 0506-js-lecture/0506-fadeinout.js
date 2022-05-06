let isStatus = true;
let opacityValue = 0;
let clickValue = 1;
let interval = 100;
let timer;

// fadein
if(clickValue === 1){
    isStatus = false;
    // console.log(isStatus);
  if(isStatus === false){
    // console.log(isStatus);
    opacityValue = 0;
    let timer = setInterval(function(){
      opacityValue = opacityValue+0.1;
      console.log(opacityValue);
      if(opacityValue >= 1){
        clearInterval(timer);
      }
    }, interval);
    // clickValue = 0;
    clickValue = 0;
    console.log(clickValue);
  }
}
// if(clickValue === 0){
//   isStatus = false;
//   console.log(isStatus);
// if(isStatus === false){
//   console.log(isStatus);
//   opacityValue = 0;
//   let timer = setInterval(function(){
//     opacityValue = opacityValue+0.1;
//     console.log(opacityValue);
//     if(opacityValue >= 1){
//       clearInterval(timer);
//     }
//   }, interval);
// }
// }