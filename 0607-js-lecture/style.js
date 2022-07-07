document.body.setAttribute('style', 'margin: 0; padding: 0;');

const root = document.getElementById('root');
const header = document.querySelector('header');
const section = document.querySelector('section');
const main = document.querySelector('main');
const topBtn = document.getElementById('top');
console.log(root);
console.log(header);
console.log(section);
console.log(main);
console.log(topBtn);

// root
root.style.height = '100vh';
root.style.display = 'grid';
root.style.gridTemplateRows = '1fr 5fr 5fr';
root.style.width = '100vw';
root.style.overflow = 'hidden';
console.log(root.children);
// console.log(root.style);
const rootChildArr = Array.from(root.children);
console.log(rootChildArr);
rootChildArr.forEach((elem) =>
  {elem.style.border = '1px solid black'}
  );

header.setAttribute('style', 'width: 100vw;background: #c4c4c4; display: flex; justify-content: space-between; align-items: center; padding: 10px;');
console.log(header.children);
const headerChildArr = Array.from(header.children);
headerChildArr.forEach((elem) => {
  elem.setAttribute(`style`,`background: #fff; width: 20%; height: 50%;`);
});

// btnCon 
const btnCon = section.firstElementChild;
console.log(btnCon);
btnCon.setAttribute('style','width: 100vw; height: 50vh; display: flex; justify-content: space-between; align-items: center; padding: 10px; position: absolute;');
const btnConChildArr = Array.from(btnCon.children);
console.log(btnConChildArr);
btnConChildArr.forEach((elem) => {
  elem.setAttribute('style', 'width: 5vmax; height: 5vmax;')
});

// console.log(section.children);
const slide = document.getElementById('slide');
slide.setAttribute('style','display: flex; overflow: hidden;')
// console.log(slide);
const slideChildArr = Array.from(slide.children);
console.log(slideChildArr);
slideChildArr.forEach((elem)=>{
  elem.setAttribute('style', 'width: 100vw; height: 50vh; background: #e3e3e3; border: 1px solid #000;');
});

// 점점점점
const page = document.getElementById('page');
page.setAttribute('style','width: 100vw; display: flex; justify-content: center; column-gap: 10px; position: absolute; top: 50vh;');
// console.log(page);
const pageChildArr = Array.from(page.children);
pageChildArr.forEach((elem)=>{
  elem.style.listStyleType = 'none';
  elem.setAttribute('style','width: 5px; height: 5px; border-radius: 50%;')
  elem.textContent = '';
})

// main
const contentsCon = document.getElementById('contents');
console.log(contents);
contentsCon.setAttribute('style','width: 100vw;height: 40vh; display: flex; align-items: center; justify-content: center; column-gap: 10vw;')

const contentsConChildArr = Array.from(contentsCon.children);
console.log(contentsConChildArr);
contentsConChildArr.forEach((elem) => {
  elem.setAttribute('style',`width: 20vw; height: 20vh; background: #c4c4c4;`);
  elem.innerHTML = `<h3>lorem</h3><p>lorem</p>`;
  console.log(elem.children);
  const elemChildArr = Array.from(elem.children);
  elemChildArr.forEach((elem) => {
    elem.style.position = 'relative';
    elem.style.top = '10vh';
    elem.style.left = '10px';
  });
});

// topBtn
topBtn.setAttribute('style','width: 10vmax; height: 10vmax; background: #414141; position: fixed; bottom: 5vmax; right: 5vmax;');
topBtn.textContent = 'TOP';

// menu
const menu = document.getElementById('menu');
menu.setAttribute('style','display: flex;')
menu.innerHTML = '<ul></ul><ul></ul><ul></ul>';
const ul = Array.from(menu.children);
console.log(ul);
const ulItems = [];
// menu에 자식요소로 ul*3>li*3을 append하려고 한다
ul.forEach((elem, index) => {
  // ulItems.push(`<li>1</li>`);
  elem.innerHTML = ulItems;
  console.log(ulItems);
});
console.log(menu);
