const topWearImg = async (search) => {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=N6WKI-RERoS74zBnaEJNGQ-VpYn5w1mmjupTaD2Zwzg&orientation=landscape&per_page=3`;
  const res = await fetch(url);
  const data = await res.json();
  const span = document.querySelector('.img-top');
  span.innerHTML = "";
  data.results.forEach(result => {
    const img = document.createElement('img');
    img.src = result.urls.raw;
    img.className = 'searchImg';
    span.append(img);
    console.log(result);
  });
};
const bottomWearImg = async (search) => {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=N6WKI-RERoS74zBnaEJNGQ-VpYn5w1mmjupTaD2Zwzg&orientation=landscape&per_page=3`;
  const res = await fetch(url);
  const data = await res.json();
  const span = document.querySelector('.img-bottom');
  span.innerHTML = "";
  data.results.forEach(result => {
    const img = document.createElement('img');
    img.src = result.urls.raw;
    img.className = 'searchImg';
    span.append(img);
  });
};
export {topWearImg,bottomWearImg}