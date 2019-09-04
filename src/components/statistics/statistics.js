import React, { Component } from 'react';
import { Indicators, Card, Container } from './item';

export class Statistics extends Component {
  render() {
    return (
      <Container>
        <Indicators title='1 of 90' value='Round' />
        <Indicators title='1 hour' value='Round left' />
        <Card title='0.01 ETH/GCYB' value='Current price' />
        <Indicators title='15 ETH' value='Raised' />
        <Indicators title='120 ETH' value='THC CAP' />
      </Container>
    );
  }
}
