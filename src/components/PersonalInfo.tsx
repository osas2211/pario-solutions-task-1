import React from "react"
import { Form } from "./Form"
import { Input } from "./Input"
import { Button } from "./Button"
import { Select } from "./Select"
import { states } from "../states"
import { useFormFlow } from "../context/formFlow"
import { actions } from "../context/formFlow"

export const PersonalInfo = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [address1, setAddress1] = React.useState("")
  const [address2, setAddress2] = React.useState("")
  const [LGA, setLGA] = React.useState("")
  const {formState, dispatch} = useFormFlow()
  return (
    <Form onSubmit={()=>dispatch({type: actions.showBillInfo})}>
      <Input label="Name" setInput={setName} input={name} type="text" />
      <Input
        label="Email Address"
        setInput={setEmail}
        input={email}
        type="email"
        important={true}
        info={"The purchase reciept would be sent to this address"}
      />
      <Input
        label="Address 1"
        setInput={setAddress1}
        input={address1}
        type="text"
      />
      <Input
        label="Address 2"
        setInput={setAddress2}
        input={address2}
        type="text"
      />

      <div className="location">
        <Input
          label="Local Government"
          setInput={setLGA}
          input={LGA}
          type="text"
          className="lga"
        />
        <Select options={states} label={"State"} className="state"/>
      </div>
      <Button type="submit">Next</Button>
      <Button type="reset" variant="secondary">Cancel Payment</Button>
    </Form>
  )
}
