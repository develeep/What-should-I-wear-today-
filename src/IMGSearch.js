import { topWearImg, bottomWearImg } from './apiSearch.js';

const Wear = (temp) => {
  const top = document.querySelector('#top');
  const bottom = document.querySelector('#bottom');
  if (temp > 22) {
    topWearImg('Short-sleeve-shirt');
    bottomWearImg('shorts');
    top.textContent = "반팔";
    bottom.textContent = '반바지';
  }
  else if (temp > 17) {
    topWearImg('long-sleeve-shirt');
    bottomWearImg('Jeans');
    top.textContent = '긴팔';
    bottom.textContent = '긴바지';
  }
  else if (temp > 12) {
    topWearImg('sweatshirt');
    bottomWearImg('Jeans');
    top.textContent = '맨투맨';
    bottom.textContent = '긴바지';
  }
  else if (temp > 5) {
    topWearImg('outerwear');
    bottomWearImg('Jeans');
    top.textContent = '아우터';
    bottom.textContent = '긴바지';
  }
  else {
    topWearImg('padded-jacket');
    bottomWearImg('Jeans');
    top.textContent = '패딩';
    bottom.textContent = '긴바지';
  }
};
const comment = (temp)=>{
  const top = document.querySelector('#top')
  const bottom = document.querySelector('#bottom')
  const text = document.querySelector('#comment')
  text.textContent = `현재 온도는 ${temp}도 이므로 ${top.textContent}와 ${bottom.textContent}를 입는것을 추천드립니다!`
}
export {Wear,comment}