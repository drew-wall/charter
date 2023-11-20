import axios from 'axios'


const getUsers = async () => {  
  const resp = {
    data: null,
    error: null,
  }

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    resp.data = response.data
  }
  catch (e) {
    resp.error = 'Failed to get users, try again!'
  }

  return resp;
}

export default getUsers

