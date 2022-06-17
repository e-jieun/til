import randomNum from "./0617-dice-project.js";

const randomRgb = (elem) => {
  elem.style.backgroundColor = `rgb('${randomNum(0, 255)}', '${randomNum(0, 255)}', '${randomNum(0, 255)}')`;
}

export default randomRgb;