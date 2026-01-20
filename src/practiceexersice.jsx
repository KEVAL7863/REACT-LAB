// create a react class based component
// that will contain a dropdown with items
// each item will have a value / price and label
// beside the dropdown, display + button , quantity and - button
// when user clicks + button , quantity will increase by 1
// when user clicks - button , quantity will decrease by 1
// below the dropdown ,dispaly the total price based on
// selected item price and quantity
// if quantity is 0 then - button should be disabled
// if quantity is more than 10, + button should be disabled
// initial quantity should be 1


import React, { Component } from "react";

class PracticeExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
            quantity: 1,
            items: [
                { id: 1, label: "Apple", price: 1.50 },
                { id: 2, label: "Banana", price: 0.75 },
                { id: 3, label: "Orange", price: 2.00 },
                { id: 4, label: "Grapes", price: 3.50 },
                { id: 5, label: "Mango", price: 2.50 }
            ]
        };
    }

    handleItemChange = (e) => {
        
        const selectedId = parseInt(e.target.value);
        const selectedItem = this.state.items.find(item => item.id === selectedId);
        this.setState({
            selectedItem: selectedItem,
            quantity: 1
        });
    }


    handleIncreaseQuantity = () => {
        if (this.state.quantity < 10) {
            this.setState({
                quantity: this.state.quantity + 1
            });
        }
    }

    handleDecreaseQuantity = () => {
        if (this.state.quantity > 0) {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }

    calculateTotalPrice = () => {
        if (this.state.selectedItem) {
            return (this.state.selectedItem.price * this.state.quantity).toFixed(2);
        }
        return "0.00";
    }

    render() {
        const { selectedItem, quantity, items } = this.state;
        const totalPrice = this.calculateTotalPrice();

        return (
            <div>
                <h2>Product Selector</h2>
                
                <div>
                    <select 
                        value={selectedItem ? selectedItem.id : ""} 
                        onChange={this.handleItemChange}
                    >
                        <option value="">Select an item</option>
                        {items.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.label} - ${item.price.toFixed(2)}
                            </option>
                        ))}
                    </select>
                    
                    <button 
                        onClick={this.handleDecreaseQuantity}
                        disabled={quantity === 0}
                    >
                        -
                    </button>
                    
                    <span>{quantity}</span>
                    
                    <button 
                        onClick={this.handleIncreaseQuantity}
                        disabled={quantity >= 10}
                    >
                        +
                    </button>
                </div>
                
                <div>
                    <h3>Total Price:</h3>
                    <p>${totalPrice}</p>
                    {selectedItem && (
                        <p>
                            {selectedItem.label} × {quantity} = ${selectedItem.price.toFixed(2)} × {quantity}
                        </p>
                    )}
                </div>
            </div>
        );
    }
}

export default PracticeExercise;
