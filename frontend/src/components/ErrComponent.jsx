import React from 'react'

function ErrComponent({message}) {
  return (
    <div className='flex items-center justify-center text-5xl font-roboto font-bold text-blue-600 flex-grow'>
      Error !! {message}
    </div>
  )
}

export default ErrComponent
