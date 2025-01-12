import React from 'react'
import Search from './Search'
import filter from '../assets/updown.webp'

const Transactions = () => {

  const transactions = [
    {
      orderId: "#281209",
      status: "Successful",
      transactionId: "TRX123456",
      refundDate: "Today, 8:45 PM",
      orderAmount: "₹1125.00"
    },
    {
      orderId: "#281210",
      status: "Processing",
      transactionId: "TRX789012",
      refundDate: "Tomorrow, 10:00 AM",
      orderAmount: "₹950.50"
    },
    {
      orderId: "#281211",
      status: "Successful",
      transactionId: "TRX345678",
      refundDate: "Yesterday, 3:30 PM",
      orderAmount: "₹750.00"
    },
    {
      orderId: "#281212",
      status: "Successful",
      transactionId: "TRX901234",
      refundDate: "Today, 11:20 AM",
      orderAmount: "₹2000.00"
    },
    {
      orderId: "#281213",
      status: "Processing",
      transactionId: "TRX567890",
      refundDate: "Tomorrow, 9:00 AM",
      orderAmount: "₹1800.00"
    },
    {
      orderId: "#281214",
      status: "Processing",
      transactionId: "TRX098765",
      refundDate: "Yesterday, 2:00 PM",
      orderAmount: "₹500.00"
    },
    {
      orderId: "#281215",
      status: "Successful",
      transactionId: "TRX456789",
      refundDate: "Today, 10:30 AM",
      orderAmount: "₹3000.00"
    },
    {
      orderId: "#281216",
      status: "Processing",
      transactionId: "TRX987654",
      refundDate: "Tomorrow, 11:30 AM",
      orderAmount: "₹1200.00"
    },
    {
      orderId: "#281217",
      status: "Processing",
      transactionId: "TRX654321",
      refundDate: "Yesterday, 4:00 PM",
      orderAmount: "₹900.00"
    },
    {
      orderId: "#281218",
      status: "Successful",
      transactionId: "TRX234567",
      refundDate: "Today, 9:45 AM",
      orderAmount: "₹1500.00"
    }
  ];
  


  return (
    <div className='bg-white rounded-sm my-5'>
      <div className='p-2 flex justify-between '>
        <Search placeholder={'Order ID or Transaction ID'} className={' w-1/2 border'} />
        <div className='flex gap-4'>
          <button className='flex border justify-center text-gray-600 items-center rounded-md px-4'>Sort
            <img className=' pl-2' src={filter} alt="" />
          </button>
          <button className='flex border justify-center text-gray-600 items-center rounded-md px-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>

          </button>
        </div>
      </div>
      <div>
        <table className='table-auto w-full text-left font-normal  text-gray-700'>
          <tr className='bg-gray-100 '>
            <th className="font-medium px-4 py-2">Order ID</th>
            <th className="font-medium px-4 py-2">Status</th>
            <th className="font-medium px-4 py-2">Transaction ID</th>
            <th className="font-medium px-4 py-2">Refund Date</th>
            <th className="font-medium px-4 py-2">Order Amount</th>
          </tr>
          {transactions.map((e)=>{
            return <tr className='h-12'>
              <td className='text-blue-700 font-medium px-4 py-2'>{e.orderId}</td>
              <td className="flex px-4 py-2">{e.status == 'Successful' ? <div className='pt-2 pr-1'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10">
  <circle cx="5" cy="5" r="4" fill="rgb(34 197 94/var(--tw-bg-opacity))"/>
</svg></div> : <div className='pt-2 pr-1'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10">
  <circle cx="5" cy="5" r="4" fill="rgb(153 153 153/var(--tw-bg-opacity))"/>
</svg></div>}{e.status}</td>
              <td className="px-4 py-2">{e.transactionId}</td>
              <td className="px-4 py-2">{e.refundDate}</td>
              <td className="px-4 py-2">{e.orderAmount}</td>
            </tr>
          })}
        </table>
      </div>
    </div>
  )
}

export default Transactions
