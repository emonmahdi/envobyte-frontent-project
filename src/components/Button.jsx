import React from 'react'

const Button = ({children}) => {
  return (
    <button className="w-[238px] h-[50px] flex items-center justify-center bg-[#FF693B] text-white rounded-lg hover:bg-opacity-90">{children}</button>
  )
}

export default Button