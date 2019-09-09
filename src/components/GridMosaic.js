import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "./GridMosaic.css";

function isEven(number){
  return number % 2 == 0
}

function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0);
}

export function GridMosaic(items) {
  for (var item_index in items) {
    items[item_index] = <Col key={item_index} >
      {items[item_index]}
    </Col>
  }

  let i = 0
  let rowItemCount = 2
  let rowItems = []

  const rows = []

  while (i < items.length) {
      if (coinFlip()) {
        rowItemCount = 3
      }
      else {
        rowItemCount = 2
      }
      rowItems = items.slice(i, i + rowItemCount)
      rows.push(
        <Row key={rows.length + 1} className="GridMosaicRow">
          {items.slice(i, i + rowItemCount)}
        </Row>
      )
      i = i + 3;
    }
  return rows
}
