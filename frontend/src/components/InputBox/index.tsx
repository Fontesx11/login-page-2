import React from 'react'

interface InputBoxProps {
  type: string;
  placeholder: string;
  icon?: React.ElementType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ type, placeholder, icon: Icon, onChange }: InputBoxProps) => {
  return (
    <div className="input-box">
      <input type={type} placeholder={placeholder} required onChange={onChange}/>
      {Icon &&  <Icon className="icon" />}
    </div>
  )
}
