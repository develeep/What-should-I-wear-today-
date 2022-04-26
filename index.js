
function success({ coords, timestamp }) {
  const latitude = coords.latitude; // 위도 
  const longitude = coords.longitude; // 경도 
  getTemp(latitude,longitude)
} 
function getUserLocation() { 
  if (!navigator.geolocation) {
    throw "위치 정보가 지원되지 않습니다."; 
  } 
  navigator.geolocation.getCurrentPosition(success); 
}
const changeC = (temp)=>{
  const C = temp - 273.15
  return Math.round(C)
}
const getTemp = (latitude,longitude)=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(4)}&lon=${longitude.toFixed(3)}&appid=37cfaecb865c98e6403126c59d08862b`)
    .then(res=>res.json())
    .then((data)=>{
      const temp = changeC(data.main.temp)
      topWear(temp)
      bottomWear(temp)
    })
}
const topWear = (temp)=>{
  const top = document.querySelector('#top')
  if(temp>22){
    topWearImg('Short-sleeve-shirt')
    top.textContent = "반팔"
  }
  else if(temp>17){
    topWearImg('long-sleeve-shirt')
    top.textContent = '긴팔'
  }
  else if(temp>12){
    topWearImg('sweatshirt')
    top.textContent = '맨투맨'
  }
  else if(temp>5){
    topWearImg('coat')
    top.textContent = '코트'
  }
  else{
    topWearImg('Padding')
    top.textContent = '패딩'
  }
}
const bottomWear = (temp)=>{
  const bottom = document.querySelector('#bottom')
  if(temp>22){
    bottomWearImg('shorts')
    bottom.textContent = '반바지'
  }
  else{
    bottomWearImg('Jeans')
    bottom.textContent = '청바지'
  }
}
const topWearImg = (search)=>{
  const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=N6WKI-RERoS74zBnaEJNGQ-VpYn5w1mmjupTaD2Zwzg&orientation=landscape&per_page=3`
  fetch(url)
  .then(res => res.json())
  .then(data=>{
    topImgInsert(data.results)
  })
}
const bottomWearImg = (search)=>{
  const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=N6WKI-RERoS74zBnaEJNGQ-VpYn5w1mmjupTaD2Zwzg&orientation=landscape&per_page=3`
  fetch(url)
  .then(res => res.json())
  .then(data=>{
    bottomImgInsert(data.results)
  })
}
const topImgInsert = (results)=>{
  const top1 = document.querySelector('#searchImg1')
  const top2 = document.querySelector('#searchImg2')
  const top3 = document.querySelector('#searchImg3')
  top1.src = results[0].urls.raw 
  top2.src = results[1].urls.raw
  top3.src = results[2].urls.raw
}

const bottomImgInsert = (results)=>{
  const top1 = document.querySelector('#searchImg4')
  const top2 = document.querySelector('#searchImg5')
  const top3 = document.querySelector('#searchImg6')
  top1.src = results[0].urls.raw 
  top2.src = results[1].urls.raw
  top3.src = results[2].urls.raw
}

const btn = document.querySelector('#btn')
btn.addEventListener('click',getUserLocation)