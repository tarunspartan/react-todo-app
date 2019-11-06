import React, { Component } from 'react';
import styles from './Input.module.css';

import Button from '../Button/Button';
import List from '../List/List';
import DeleteButton from '../DeleteButton/DeleteButton';

class Input extends Component {

    state = {
        items : [],
        inputValue : ''
    }

    buttonClickedHandler = () => {
        if(this.state.inputValue){
            let input = this.state.inputValue;
            this.setState({items: this.state.items.concat(input)});
            this.setState({inputValue: ''});
        }
    }

    getValueHandler = (e) => {
        this.setState({inputValue: e.target.value})
    }

    deleteHandler = (i) => {
        const modifiedList = this.state.items.filter(data => data !== this.state.items[i])
        this.setState({items:modifiedList})
    }


    render() {

        const listData = this.state.items.map((item,index) => {
            return <List className={styles.List} key={index}>{item}<DeleteButton clicked={() => {this.deleteHandler(index)}}><b>-</b></DeleteButton></List>
        })

        return (
            <div>
            <div style={{textAlign:"center"}}>
            <input className={styles.Input} type="text" placeholder="Add a to-do list..." value={this.state.inputValue} onChange={this.getValueHandler} required></input>
            <Button className={styles.Button} clicked={this.buttonClickedHandler}><b>+</b></Button></div>
            <div>{listData}</div>
            </div>
        );
    };
}

export default Input;