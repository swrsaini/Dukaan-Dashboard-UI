import React from 'react'

const Search = ({placeholder, className}) => {
  return (
      <div className='flex justify-center w-[50%]'>
                <div className="relative w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute top-1/2 left-3 w-5 h-5 text-gray-500 transform -translate-y-1/2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                    <input
                        className={`h-10 w-full  pl-10 pr-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 ${className}`}
                        type="text"
                        placeholder={placeholder}
                    />
                </div>
            </div>
  )
}

export default Search
