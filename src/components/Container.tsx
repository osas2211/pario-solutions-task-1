import React, { ReactNode } from 'react'

export const Container: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <div className='container'>
        { children }
    </div>
  )
}
