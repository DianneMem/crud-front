import React from 'react'

export default function Container({children}) {
  return (
    <div className='container p-4'>
        <div className=''>

        {children}
        </div>
    </div>
  )
}
