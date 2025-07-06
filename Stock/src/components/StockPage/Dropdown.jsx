import React from 'react'

function DropDown({onChange}) {

  return (
    <div className='mr-2'>
        <label htmlFor="timeframe" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
            Select Timeframe</label>
        <select
            onChange={(e) => onChange(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
            <option value="1D">1 Day</option>
            <option value="5D">5 Days</option>
            <option value="1M">1 Month</option>
            <option value="6M">6 Months</option>
            <option value="1Y">1 Year</option>
            <option value="5Y">5 Years</option>
        </select>


    </div>
  )
}

export default DropDown