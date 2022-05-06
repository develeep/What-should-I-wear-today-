const changeC = (temp) => {
  const C = temp - 273.15;
  return Math.round(C);
};
const getTemp = async (latitude, longitude) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(4)}&lon=${longitude.toFixed(3)}&appid=37cfaecb865c98e6403126c59d08862b`);
  const data = await res.json();
  const temp = changeC(data.main.temp);
  return temp;
};
export default getTemp;