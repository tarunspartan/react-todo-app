import React, { useState, useEffect } from 'react';
import styles from './Input.module.css';

import Button from '../Button/Button';
import List from '../List/List';
import DeleteButton from '../DeleteButton/DeleteButton';

const Input = props => {
    const [value , setValue] = useState('');
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoItems")) || ["Hi. I made this app while learning React. This is simple Todo App which can store your Tasks. You can delete task once you completed by tapping red icon on top-right corner of specific task."]);

    useEffect(()=> {
        localStorage.setItem("todoItems",JSON.stringify(todoList));
    },[todoList])

    const getValueHandler = event => {
        setValue(event.target.value);
    }

    const buttonClickedHandler = () => {
        if(value){
            setTodoList(todoList.concat(value));
            setValue('');
        }
    }

    const deleteHandler = (i) => {
        const modifiedList = todoList.filter((data) => data !== todoList[i]);
        setTodoList(modifiedList);
    }

    return (
        <>
            <div className={styles.Main}>
            <input className={styles.Input} type="text" placeholder="Add a to-do list..." value={value} onChange={getValueHandler} required></input>
            <Button className={styles.Button} clicked={buttonClickedHandler}><b>+</b></Button></div>
            
            { todoList[0] ? todoList.map((item,index) => {
                return <List key={index}>{item}<DeleteButton clicked={() => {deleteHandler(index)}}><b>-</b></DeleteButton></List>
            })  : <h1 className={styles.Empty}>Add some Tasks...</h1> }
        </>
    )
};

export default Input;

