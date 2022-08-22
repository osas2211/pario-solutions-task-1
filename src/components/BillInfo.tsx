import React from 'react'
import { Input } from './Input'
import { Select } from './Select'
import { Button } from './Button'
import { Form } from './Form'
import { actions } from '../context/formFlow'
import { useFormFlow } from '../context/formFlow'

export const BillInfo = () => {
  const {formState, dispatch} = useFormFlow()
  const [name, setName] = React.useState("")
  const [number, setNumber] = React.useState("")
  const [cvv, setCVV] = React.useState("")
  return (
    <Form onSubmit={()=>dispatch({type: actions.showConfirmPayment})}>
      <Input
        label="Name on Card"
        setInput={setName}
        input={name}
        type="text"
        important={true}
      />
      <Select options={["Master Card", "Visa", "Verve"]} label={"Card Type"} important={true}/>
      <div className='card-details'>
        <Input
          label="Card Details"
          setInput={setNumber}
          input={number}
          type="number"
          important={true}
          className="card-number"
      />
      <Input
        label="Expiry Date"
        setInput={()=> null}
        type="date"
        important={true}
        className="expiry-date"
      />
      <Input
        label="CVV"
        setInput={setCVV}
        input={cvv}
        type="number"
        important={true}
        className="cvv"
      />
      </div>

      <Button type="submit">Next</Button>
      <Button type="reset" variant="secondary">Cancel Payment</Button>
    </Form>
  )
}
