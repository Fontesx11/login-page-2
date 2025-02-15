import React from 'react'

interface InputBoxProps {
  type: string;
  placeholder: string;
  icon?: React.ElementType;
}

export const InputBox = ({ type, placeholder, icon: Icon }: InputBoxProps) => {
  return (
    <div className="input-box">
      <input type={type} placeholder={placeholder} required />
      {Icon &&  <Icon className="icon" />}
    </div>
  )
}
