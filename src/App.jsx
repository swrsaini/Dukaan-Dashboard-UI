import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevenueCard from './components/RevenueCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-1'>
      <RevenueCard title={'Next Payout'} amount={'2,312.23'} orderCount={'23'}/>
      <RevenueCard title={'Amount Pending'} amount={'92,312.20'} orderCount={'13'}/>
      <RevenueCard className={'sm:col-span-2 lg:col-span-1'} title={'Amount Processed'} amount={'23,92,312.19'} />
    </div>
      
    </>
  )
}

export default App
