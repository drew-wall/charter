import axios from 'axios'


const getJoke = async () => {  
  const resp = {
    data: null,
    error: null,
  }

  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke')
    resp.data = response.data
  }
  catch (e) {
    resp.error = 'Failed to get joke, try again!'
  }

  return resp;
}

export default getJoke
