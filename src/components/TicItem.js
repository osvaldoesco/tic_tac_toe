import React from 'react';

const TicItem = ({value}) => {
  return ( <div>{value || "-"}</div> );
}

export default TicItem;
