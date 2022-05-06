const topWear = (temp) => {
  const top = document.querySelector('#top');
  if (temp > 22) {
    topWearImg('Short-sleeve-shirt');
    top.textContent = "반팔";
  }
  else if (temp > 17) {
    topWearImg('long-sleeve-shirt');
    top.textContent = '긴팔';
  }
  else if (temp > 12) {
    topWearImg('sweatshirt');
    top.textContent = '맨투맨';
  }
  else if (temp > 5) {
    topWearImg('coat');
    top.textContent = '코트';
  }
  else {
    topWearImg('padded-jacket');
    top.textContent = '패딩';
  }
};
const bottomWear = (temp) => {
  const bottom = document.querySelector('#bottom');
  if (temp > 22) {
    bottomWearImg('shorts');
    bottom.textContent = '반바지';
  }
  else {
    bottomWearImg('Jeans');
    bottom.textContent = '청바지';
  }
};
const topWearImg = async (search) => {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=N6WKI-RERoS74zBnaEJNGQ-VpYn5w1mmjupTaD2Zwzg&orientation=landscape&per_page=3`;
  const res = await fetch(url);
  const data = await res.json();
  const top1 = document.querySelector('#searchImg1');
  const top2 = document.querySelector('#searchImg2');
  const top3 = document.querySelector('#searchImg3');
  top1.src = data.results[0].urls.raw;
  top2.src = data.results[1].urls.raw;
  top3.src = data.results[2].urls.raw;
};
const bottomWearImg = async (search) => {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=N6WKI-RERoS74zBnaEJNGQ-VpYn5w1mmjupTaD2Zwzg&orientation=landscape&per_page=3`;
  const res = await fetch(url);
  const data = await res.json();
  const bottom1 = document.querySelector('#searchImg4');
  const bottom2 = document.querySelector('#searchImg5');
  const bottom3 = document.querySelector('#searchImg6');
  bottom1.src = data.results[0].urls.raw;
  bottom2.src = data.results[1].urls.raw;
  bottom3.src = data.results[2].urls.raw;
};
export {topWear,bottomWear}