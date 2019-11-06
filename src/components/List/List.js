import React, { Component } from 'react';

import styles from './List.module.css';

class List extends Component {
     render() {
          return (
               <div className={styles.List}>{this.props.children}</div>
          )
     }
}

export default List;