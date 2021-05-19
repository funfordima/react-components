import React from 'react';
import Button from './Button';

const ButtonSandBox = () => {
  return (
    <div>
      <h1 className='btn__title'>
        Custom Buttons
      </h1>
      <h2>
        <span>
          1. Text and onClick function
        </span>
      </h2>
      <Button onClick={() => console.log('first click')}>
        Button Text
        </Button>

      <h2>
        <span>
          2. Disabled button
        </span>
      </h2>
      <Button onClick={() => console.log('first click')} disabled />

      <h2>
        <span>
          3. Active button:
        </span>
      </h2>
      <Button active onClick={() => console.log('first click')} />

      <h2>
        <span>
          4. Supporting data, type and attributes
        </span>
      </h2>
      <Button data-name='button' />
      <Button type='submit' />

      <h2>
        <span>
          5. Button link
        </span>
      </h2>
      <Button href='test'> Link </Button>
      <Button href='test' disabled> Link </Button>
    </div>
  );
};

export default ButtonSandBox;
