import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function GridMosaic(items) {
  for (var item_index in items) {
    items[item_index] = <Col key={item_index} >
      {items[item_index]}
    </Col>
  }

  let i = 0
  const rows = []
  while (i < items.length) {
      rows.push(
        <Row key={rows.length + 1}>
          {items.slice(i, i + 3)}
        </Row>
      )
      i = i + 3;
    }
  return rows
}
