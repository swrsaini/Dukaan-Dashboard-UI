import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import arrow from './assets/down-arrow.svg'
import './App.css'
import RevenueCard from './components/RevenueCard'
import Header from './components/Header'
import Transactions from './components/Transactions'
import Sidebar from './components/Sidebar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-normal'>
      <div className='hidden lg:block w-[15%]'>
        <Sidebar />
      </div>
      <div className='bg-gray-50 w-[85%]'>

        <Header></Header>
        <div className='m-5'>
          <div className='flex justify-between mb-5'>
            <h2 className='text-xl font-medium'>Overview</h2>
            <div className='flex justify-center py-1 px-3 bg-white border border-gray-200 hover:cursor-pointer'>
              <p className='mr-4 text-md text-gray-600'>This Month</p>
              <img className='h-5 pt-1' src={arrow} alt="" /></div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5'>
            <RevenueCard className={"bg-blue-700 text-white"} title={'Next Payout'} amount={'2,312.23'} orderCount={'23'} extraDiv={<div className='flex justify-between text-xs bg-[#0E4F82] rounded px-4 py-2'>
              <div>Next Payment Date:</div>
              <div>Today, 4:00PM</div>
            </div>} />
            <RevenueCard title={'Amount Pending'} amount={'92,312.20'} orderCount={'13'} />
            <RevenueCard className={'sm:col-span-2 lg:col-span-1'} title={'Amount Processed'} amount={'23,92,312.19'} />
          </div>
          <div className='my-5'>
            Transactions | This Month
          </div>
          <div>
            <button className='bg-gray-200 text-gray-600 rounded-xl p-1 px-3 mr-5'>Payouts (22)</button>
            <button className='bg-blue-700 text-white rounded-xl p-1 px-3 mr-5'>Refunds (6)</button>
          </div>
          <Transactions />
        </div>

      </div>
    </div>

  )
}

export default App
