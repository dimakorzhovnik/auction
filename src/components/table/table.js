import React, { Component } from 'react';

export class Table extends Component {
    render() {
        return (
            <div className='table'>
                <div className='table-header-rows'>
                    <div>Raund №</div>
                    <div>ETH</div>
                    <div>Price</div>
                    <div>Your contribution</div>
                </div>
                <div className='table-body'>
                <div className='table-rows'>
                    <div>1</div>
                    <div>200</div>
                    <div>35</div>
                    <div>10</div>
                </div>
                <div className='table-rows'>
                    <div>2</div>
                    <div>200</div>
                    <div>35</div>
                    <div>2</div>
                </div>
                <div className='table-rows'>
                    <div>3</div>
                    <div>200</div>
                    <div>35</div>
                    <div>20</div>
                </div>
                <div className='table-rows'>
                    <div>4</div>
                    <div>200</div>
                    <div>35</div>
                    <div>12</div>
                </div>
                <div className='table-rows'>
                    <div>5</div>
                    <div>200</div>
                    <div>35</div>
                    <div>6</div>
                </div>
                </div>
                
            </div>
        )
    }
}