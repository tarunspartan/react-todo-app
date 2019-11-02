import React, { Component } from 'react';
import styles from './Input.module.css';

import Button from '../Button/Button';
import List from '../List/List';

class Input extends Component {

    state = {
        items : [],
        inputValue : ''
    }

    buttonClickedHandler = () => {
        let input = this.state.inputValue;
        this.setState({items: this.state.items.concat(input)});
        this.setState({inputValue: ''});
    }

    getValueHandler = (e) => {
        this.setState({inputValue: e.target.value})
    }


    render() {
        const data = this.state.items.map((item,index) => {
            return <p key={index}>{item}</p>;
        })


        return (
            <div >
            <input className={styles.Input} type="text" value={this.state.inputValue} onChange={this.getValueHandler} required></input>
            <Button clicked={this.buttonClickedHandler}><b>+</b></Button>
            <List>{data}</List>
            </div>
        );
        };
}

export default Input;