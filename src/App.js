import { useState, useEffect } from 'react'
import getCustomerPurchases from './apis/get_customer_purchases';
import logo from './logo.svg';
import './App.css';
import calculateRewardPoints from './utils/calculate_reward_points';
import getMonthDiff from './utils/get_month_diff';

function App() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const getPurchases = async () => {
      try {
        const data = await getCustomerPurchases()
        setPurchases(data)
      }
      catch (error) {
        setError('Oops! Something went wrong getting customer purchases')
      }
      finally {
        setLoading(false)
      }
    }

    getPurchases()
  }, [])

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    return (
      <div>{error}</div>
    )
  }
  
  const purchAwards = purchases.map(item => {
    item.rewards = calculateRewardPoints(item.purchaseAmount)
    return item
  })
  .filter(item => item.rewards && getMonthDiff(item.purchaseDate) < 4)
  .sort((a, b) =>
    a.customerId - b.customerId || new Date(a.purchaseDate) - new Date(b.purchaseDate)
  )

  console.log(purchAwards)

  const awardsSummary = []

  for (let i = 0; i < purchAwards.length; i++) {

  }

  return (
    <>
      <div>Charter Home Assignment</div>
      <table>
        <tr>
          <th>Customer Id</th>
          <th>Purchase Amount</th>
          <th>Purchase Date</th>
          <th>Reward Points</th>
        </tr>
        {purchAwards.map(item =>
          <tr>
            <td>{item.customerId}</td>
            <td>{item.purchaseAmount}</td>
            <td>{item.purchaseDate}</td>
            <td>{item.rewards}</td>
          </tr>
        )}
      </table>
    </>
  );
}

export default App;
