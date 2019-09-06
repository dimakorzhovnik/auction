import React, { Component } from 'react';
import { Indicators, Card, Container } from './item';

export class Statistics extends Component {
  render() {
    const {round, roundAll} = this.props;
    return (
      <Container>
        <Indicators title={`${round} of ${roundAll}`} value='Round' />
        <Indicators title='15 ETH' value='Raised' />
        <Card title='0.01 ETH/GCYB' value='Current price' />
        <Indicators title='1 hour' value='Left in round' />
        <Indicators title='120 ETH' value='THC CAP' />
      </Container>
    );
  }
}
