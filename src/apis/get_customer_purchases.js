import axios from 'axios'


const getCustomerPurchases = () => {
  return axios.get('customer_purchases.json')
    .then(response => response.data)
    .catch(error => error.response)
}

export default getCustomerPurchases
