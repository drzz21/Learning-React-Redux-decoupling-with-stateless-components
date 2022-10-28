import React from 'react';
import ee from '../../eventEmitter'

export const Display = ({ text, clickHandler }) => {
  // ee.addListener('displayUpdate', updateDisplay);
  return <div className="display" onClick={clickHandler ? clickHandler : null}>{text.toString().split(' ').reverse().join(' ')}</div>
}


export default Display;
