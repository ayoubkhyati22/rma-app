import React from 'react'
import './clients-wrapper.scss'

const ClientsWrapper = props => {
  return (
    <div className='clients-wrapper'>
        {props.children}
    </div>  
)
}

export default ClientsWrapper

export const ClientsWrapperMain = props => {
    return (
      <div className='clients-wrapper__main'>
          {props.children}
      </div>
    )
}

export const ClientsWrapperRight = props => {
    return (
      <div className='clients-wrapper__right'>
          {props.children}
      </div>
    )
}