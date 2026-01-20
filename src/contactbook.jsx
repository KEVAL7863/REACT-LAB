import React, {Component} from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            phone: "",
            contacts: []
        }
    }

    handleFNameChange = (e) => {
        this.setState({fname: e.target.value})
    };

    handleLNameChange = (e) => {
        this.setState({lname: e.target.value})
    };

    handlePhoneChange = (e) => {
        this.setState({phone: e.target.value})
    };

    addtoContact = () => {
        if(
            this.state.fname.trim() === "" || 
            this.state.lname.trim() === "" ||
            this.state.phone.trim() === "" 
        )
        return;
        const newContact = {
            id: Date.now(),
            fname: this.state.fname,
            lname: this.state.lname,
            phone: this.state.phone,
            visible: false,
            update: false
        };

        this.setState((prevState) => ({
            contacts: [newContact, ...prevState.contacts],
            fname: "",
            lname: "",
            phone: ""
        }));
    };

    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((y) => y.id !== id)
        }));
    };

    toggleDisplay = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((y) => y.id === id ? {...y, visible: !y.visible} : y)
        }))
    };

    toggleUpdateDisplay = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((y) => y.id === id ? {...y, update: !y.update} : y)
        }))
    };
    

    render() {
        const {contacts, fname, lname, phone} = this.state;

        return (
            <>
                <input type="text" value={fname} placeholder="First Name" onChange={this.handleFNameChange}/>
                <br />
                <input type="text" value={lname} placeholder="Last Name" onChange={this.handleLNameChange}/>
                <br />
                <input type="text" value={phone} placeholder="Mobile Number" onChange={this.handlePhoneChange}/>
                <br />
                <button onClick={this.addtoContact}>Add Contact</button>
                <br />
                
                <ul>
                    {contacts.map((y) => (
                        <li key={y.id}>
                            {y.fname} <button onClick={() => this.toggleDisplay(y.id)}>View</button> {" "}
                            <button onClick={() => this.deleteContact(y.id)}>Delete</button> {" "}
                            <button onClick={() => this.toggleUpdateDisplay(y.id)}>Update</button>
                            <div style={{ display: y.visible ? "" : "none"}}> 
                                {" "}
                                {y.lname} {"_"} {y.phone}
                            </div>
                            <div style={{ display: y.update ? "" : "none"}}> 
                                {" "}
                                <input type="text" value={fname} placeholder="First Name" onChange={this.handleFNameChange}/> {"_"} 
                                <input type="text" value={lname} placeholder="last Name" onChange={this.handleFNameChange}/> {"_"} 
                                <input type="text" value={phone} placeholder="Phone" onChange={this.handleFNameChange}/> {"_"} 
                            </div>
                        </li>
                    ))}
                </ul>

            </>
        )
    }
}

export default Contact;