import React, { Component } from 'react';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: false
        };
    }
    // use = when writing custom methods
    toggleEditSaleItem = () => {
        console.log("Hit toggle Edit Sale Item")
        this.setState({editSaleItem: !this.state.editSaleItem})
    };

    handleItemCurrentlyOnSaleChange = (event) => {
        console.log('event.target.value')
        this.setState({
            itemCurrentlyOnSale: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <p>Currently on Sale: {this.state.itemCurrentlyOnSale}!</p>
                <button onClick= {this.toggleEditSaleItem}>
                    { this.state.editSaleItem ? 'Hide' : "Edit Sale Item"}
                </button>
                <div>
                    {this.state.editSaleItem ? <input type="text" placeholder={this.state.itemCurrentlyOnSale} onChange={this.handleItemCurrentlyOnSaleChange}/> : null}
                </div>
            </div>
        );
    }
}

export default Header;
