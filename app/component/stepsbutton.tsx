import React from 'react';

interface ButtonProps {
  color: string;
  textColor: string;
  handleClick: () => void;
  buttonText: string;
  loremText: string;
  loremTextFont: string;
}

const Button: React.FC<ButtonProps> = ({ color, textColor, handleClick, buttonText, loremText, loremTextFont }) => {
  return (
    <div className='pt-16 flex flex-row items-center'>
      <button
        className={`w-10 h-10 ${color} ${textColor} rounded-full flex items-center justify-center`}
        onClick={handleClick}
      >
        <span className='text-xl'>{buttonText}</span>
      </button>
      <div className={`pl-4 text-white ${loremTextFont}`}>{loremText}</div>
    </div>
  );
};

export default Button;
