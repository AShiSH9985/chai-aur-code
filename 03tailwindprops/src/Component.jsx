import React from 'react'

function Component({val}) {
  return (
    <div className='text-red p-5 flex justify-center items-center rounded-md bg-blue-900'>
      <h1 className='bg-green-600 p-5 rounded-md text-3xl text-red-900 font-bold'>{val}</h1>
    </div>
  )
}

export default Component