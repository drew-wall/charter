import { useState, useEffect } from 'react'
import getCustomerPurchases from './apis/get_customer_purchases';
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

  const awardsSummary = []
  const getSummary = () => {
    let custId 
    let custAmt = 0
    let custRewards = 0
    let monthAmt = 0
    let monthRewards = 0
    let purchMonth;
    for (let i = 0; i < purchAwards.length; i++) {
      let { customerId, purchaseAmount, purchaseDate, rewards } = purchAwards[i]
      let purchaseMonth = purchaseDate.substr(0, 7)
      let { customerId: prevCustomerId, purchaseDate: prevPurchaseDate } = purchAwards[i-1] || {}
      let prevPurchaseMonth = (prevPurchaseDate || '').substr(0, 7)

      if (prevCustomerId && customerId !== prevCustomerId) {
        awardsSummary.push({ customerId: prevCustomerId, purchaseAmount: monthAmt, purchaseDate: prevPurchaseMonth, rewards: monthRewards})
        awardsSummary.push({ customerId: prevCustomerId, purchaseAmount: custAmt, purchaseDate: 'Customer Totals:', rewards: custRewards })
        custAmt = 0
        custRewards = 0
        monthAmt = 0
        monthRewards = 0    
      }
      else if (prevPurchaseMonth && prevPurchaseMonth !== purchaseMonth) {
        awardsSummary.push({ customerId: prevCustomerId, purchaseAmount: monthAmt, purchaseDate: prevPurchaseMonth, rewards: monthRewards})
        monthAmt = 0
        monthRewards = 0
      }
      custAmt += purchaseAmount
      custRewards += rewards
      monthAmt += purchaseAmount
      monthRewards += rewards
      custId = customerId
      purchMonth = purchaseMonth
    }
    awardsSummary.push({ customerId: custId, purchaseAmount: monthAmt, purchaseDate: purchMonth, rewards: monthRewards})
    awardsSummary.push({ customerId: custId, purchaseAmount: custAmt, purchaseDate: 'Customer Totals:', rewards: custRewards })
  }

  getSummary()

  return (
    <>
      <div>Charter Home Assignment - Andrew Wall</div>
      <table>
        <tr>
          <th>Customer Id</th>
          <th>Purchase Date</th>
          <th>Purchase Amount</th>
          <th>Reward Points</th>
        </tr>
        {awardsSummary.map(item =>
          <tr>
            <td>{item.customerId}</td>
            <td>{item.purchaseDate}</td>
            <td>{item.purchaseAmount}</td>
            <td>{item.rewards}</td>
          </tr>
        )}
      </table>
    </>
  );
}

export default App;
