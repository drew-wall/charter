import axios from 'axios'


const getWeather = async () => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: '32.705002,-97.122780'},
    headers: {
      'X-RapidAPI-Key': 'd2884769d5mshbf2af6c96093b19p1f252ajsn28451a12abde',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  try {
    const response = await axios.request(options);
    return response.data
  } catch (error) {
    return error
  }
}
 
export default getWeather