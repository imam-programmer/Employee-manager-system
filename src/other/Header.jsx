import React from 'react'

const Header = ({data}) => {
console.log(data)
  return (
    <div className='flex items-center  text-amber-50 justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'></span></h1>
        <button className='bg-red-500 text-lg font-medium text-amber-50 px-5 py-2 rounded'>Log out</button>
    </div>
  )
}

export default Header