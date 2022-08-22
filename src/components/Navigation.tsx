import React from 'react'

export const Navigation = () => {
  return (
    <nav className='nav'>
        <div className='nav-item active'>
            Personal Info
        </div>
        <div className='nav-item'>
            Billing Info
        </div>
        <div className='nav-item'>
            Confirm Payment
        </div>
    </nav>
  )
}
