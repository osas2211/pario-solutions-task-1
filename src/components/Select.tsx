import React from 'react'

interface SelectInterface {
  options: string[]
  className?: string
  label: string
  important?: Boolean;
}

export const Select:React.FC<SelectInterface> = ({ options, className, label, important }) => {

  return (
    <div className={className} style={{ marginTop: "2rem" }}>
          <div>
            <label htmlFor={label}>
              {`${label}`} {important && <span style={{ color: "red" }}>*</span>}  
            </label>
          </div>
          <div>
            <select name={label} id={label}>
              {options.map(option=>(
                <option value={option as string} key={option as string}>{option}</option>
              ))}
            </select>
          </div>
        </div>
  )
}
