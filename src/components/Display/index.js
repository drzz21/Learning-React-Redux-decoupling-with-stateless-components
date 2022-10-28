import React, { Component } from 'react';
import ee from '../../eventEmitter'

let state = '0';



const updateDisplay = (newStr) => {
  // console.log(this.state);
  state = ({ text: newStr.toString().split(' ').reverse().join(' ') });
}

// componentWillMount() {

// }

// onClickHandler() {
//   if (this.props.clickHandler) {
//     this.props.clickHandler.call(this);
//   }
// }




export const Display = ({ text, clickHandler }) => {
  ee.addListener('displayUpdate', updateDisplay);
  state = { text: text || '0' };

  return <div className="display" onClick={clickHandler ? clickHandler : null}>{state.text}</div>
}


export default Display;
