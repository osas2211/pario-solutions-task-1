import React from 'react'
import { Button } from './Button'

export const ConfirmPayment = () => {
  return (
    <div className='confirmPayment'>
      <div className="header">
        <span>Items</span>
        <span>₦ Price</span>
      </div>
      <div className='items'>
        <div className="item" style={{paddingTop: "3rem"}}>
          <span>Data science and usability</span>
          <span>50,000.00</span>
        </div>
        <div className="item" style={{paddingBottom: "0rem"}}>
          <span>Shipping</span>
          <span style={{color: "#000"}}>0.00</span>
        </div>

        <hr />

        <div className="total">
          <span>Total</span>
          <span>50,000.00</span>
        </div>
      </div>

      <Button type="button">Pay</Button>
      <Button type="reset" variant="secondary">Cancel Payment</Button>
    </div>
  )
}
