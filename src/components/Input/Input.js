import React from 'react';
import styles from './Input.module.css';

import Button from '../Button/Button';

const input = (props) => (
    <div className={styles.Input}>
        <input type="text"></input>
        <Button>Add</Button>
    </div>
);

export default input;