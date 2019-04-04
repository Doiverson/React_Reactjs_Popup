import React, { Component } from 'react';


class PopUPDialog extends Component {

    state = {
        selectedItem: null
    }


    // Post Data to Database
    onSubmit = (e) => {
        console.log(this.state.selectedItem);
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({selectedItem: e.target.value});
    }

    render() {
        return (
            <form action="">
                <label><input onChange={this.onChange} type="radio" name="test" value="Invalid Phone"/>Invalid Phone</label><br/>
                <label><input onChange={this.onChange} type="radio" name="test" value="Invalid E-mail"/>Invalid E-mail</label><br/>
                <label><input onChange={this.onChange} type="radio" name="test" value="Duplicate lead"/>Duplicate lead</label><br/>
                <label><input onChange={this.onChange} type="radio" name="test" value="Customer is not moving within 6months"/>Customer is not moving within 6months</label><br/>
                <label><input onChange={this.onChange} type="radio" name="test" value="Only car shipping"/>Only car shipping</label><br/>
                <button onClick={this.onSubmit}>Return</button>
            </form>
        );
    }
}

export default PopUPDialog;

