import { topWear,bottomWear } from './IMGSearch.js';
import getTemp from './getTemp.js';
function getUserLocation() {
  if (!navigator.geolocation) {
    alert("위치 정보가 지원되지 않습니다.");
  }
  navigator.geolocation.getCurrentPosition(success, () => { alert("GPS를 켜주세요"); });
}

async function success({ coords, timestamp }) {
  const latitude = coords.latitude; // 위도 
  const longitude = coords.longitude; // 경도 
  const temp = await getTemp(latitude, longitude);
  console.log(temp);
  topWear(temp);
  bottomWear(temp);
}
export default getUserLocation