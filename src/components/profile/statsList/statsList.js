import React from 'react';
import styles from '../../profile/Profile.module.css';

const StatList = ({ item }) => {
  return (
    <li>
      <span className={styles.label}>{item.name}</span>
      <span className={styles.quantity}>{item.value}</span>
    </li>
  );
};

export default StatList;
