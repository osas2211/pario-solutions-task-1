import React, { ReactNode } from 'react'

export const Form: React.FC<{children: ReactNode, onSubmit: Function}> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={(e)=> {
      e.preventDefault()
      onSubmit()
    }}>
      { children }
    </form>
  )
}
