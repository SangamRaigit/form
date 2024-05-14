import React, { useState, useEffect } from 'react';
import Button from '../component/stepsbutton';

const Sec1: React.FC = () => {
  const initialButtonsState = [
    { color: 'bg-white', textColor: 'text-black', loremTextFont: 'font-normal' },
    { color: 'bg-white', textColor: 'text-black', loremTextFont: 'font-normal' },
    { color: 'bg-white', textColor: 'text-black', loremTextFont: 'font-normal' },
    { color: 'bg-white', textColor: 'text-black', loremTextFont: 'font-normal' }
  ];

  const [buttonsState, setButtonsState] = useState(initialButtonsState);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Set the first button as selected when the component mounts
    handleClick(0);
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  const handleClick = (index: number) => {
    const updatedButtonsState = initialButtonsState.map((buttonState, i) => {
      if (i === index) {
        return {
          ...buttonState,
          color: 'bg-green-950',
          textColor: 'text-white',
          loremTextFont: 'font-bold'
        };
      } else {
        return {
          ...buttonState,
          color: 'bg-white',
          textColor: 'text-black',
          loremTextFont: 'font-normal'
        };
      }
    });

    setButtonsState(updatedButtonsState);
    setCurrentStep(index + 1);
  };

  return (
    <div className='bg-green-900 w-[60%] pl-[4%] py-[11%]'>
      <div className='flex flex-col'>
        <div>
          <p className='text-white font-bold'>Step {currentStep}</p>
        </div>
        <div className='pt-2'>
          <p className={`text-white `}>Lorem epsum</p>
        </div>
        {buttonsState.map((buttonState, index) => (
          <Button
            key={index}
            color={buttonState.color}
            textColor={buttonState.textColor}
            handleClick={() => handleClick(index)}
            buttonText={`${index + 1}`}
            loremText="lorem epsum"
            loremTextFont={buttonState.loremTextFont}
          />
        ))}
      </div>
    </div>
  );
};

export default Sec1;
