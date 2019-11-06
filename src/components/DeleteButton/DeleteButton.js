import React from 'react';

import styles from './DeleteButton.module.css'

const deleteButton = (props) => (
    <button className={styles.Button} onClick={props.clicked}>{props.children}</button>
)

export default deleteButton;