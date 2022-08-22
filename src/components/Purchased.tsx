import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

export const Purchased = () => {
  return (
    <div className='purchased'>
      <div className='icon'>
        <div className='done'><DoneIcon /></div>
      </div>
      <h1>Purchase Completed</h1>
      <p style={{marginBottom: "2rem"}}>Please check your email for information concerning this transaction</p>

      <a href="/">Return home</a>
    </div>
  )
}
