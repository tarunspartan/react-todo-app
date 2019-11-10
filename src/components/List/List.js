import React, { Component } from 'react';

import styles from './List.module.css';

class List extends Component {
     render() {
          return (
               <p className={styles.List}>{this.props.children}</p>
          )
     }
}

export default List;