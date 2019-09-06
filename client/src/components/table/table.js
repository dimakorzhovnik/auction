import React, { Component } from 'react';

export class Table extends Component {
    render() {
        const{ data } = this.props;
        const tableRow = data.map((item)=>(
            <div className='table-rows'>
                <div className='number'>{item.round}</div>
                <div className='number'>{item.result}</div>
                <div className='number'>{item.priceEth}</div>
                <div className='number'>{item.userBuysEth}</div>
            </div>
        ))
        return (
            <div className='table'>
                <div className='table-header-rows'>
                    <div className='number'>Round №</div>
                    <div className='number'>ETH</div>
                    <div className='number'>Price ETH</div>
                    <div className='number'>Your contribution</div>
                </div>
                <div className='table-body'>
                    {tableRow}
                </div>
                
            </div>
        )
    }
}