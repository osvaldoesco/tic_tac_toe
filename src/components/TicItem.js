import React from 'react';
import {
  value0,
  valueX,
  emptyImg,
  zeroPurpleImg,
  xBlueImg,
  valueXWinner,
  value0Winner,
  xGreenImg,
  zeroGreenImg}
from '../const/Game';

const TicItem = ({value}) => {
  let imagePath = emptyImg;
  switch (value) {
    case value0:
      imagePath = zeroPurpleImg;
      break;
    case valueX:
      imagePath = xBlueImg;
      break;
    case valueXWinner:
      imagePath = xGreenImg;
      break;
    case value0Winner:
      imagePath = zeroGreenImg;
      break;
    default:
  }
  return (
    <div className="tic-item">
      <img
        alt={value}
        title="value"
        src={imagePath}
        className="tic-item-img"  />
    </div>
  );
}

export default TicItem;
