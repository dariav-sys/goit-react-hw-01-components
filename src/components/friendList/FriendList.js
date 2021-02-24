import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";
import FriendListItem from "./friendListItem/FriendListItem.js"

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend}/>;
      })}
    </ul>
  );
};

FriendList.propTypes = PropTypes.arrayOf(PropTypes.object).isRequired;

export default FriendList;
