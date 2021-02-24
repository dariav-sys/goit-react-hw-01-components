import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from "./default.png";
import styles from "./FriendListItem.module.css";


export default function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <li className={styles.item}  key={id}>
            <span className={isOnline ? styles.is_online : styles.is_offline}></span>
            <img className={styles.avatar} src={avatar} alt={name} width={100} />
                <p className={styles.name}>{ name}</p>
          </li>
    )
}


FriendListItem.defaultProps = {
  avatar: defaultImg,  
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};