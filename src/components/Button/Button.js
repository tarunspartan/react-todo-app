import React from 'react';
import styles from './Button.module.css';

const button = (props) => (
    <div  className={styles.Button}>
        <button>{props.children}</button>
    </div>
);

export default button;