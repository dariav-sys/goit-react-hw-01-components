import React from "react";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" key={id}>
            <span className="status">{isOnline ? "green" : "yellow"}</span>
            <img className="avatar" src={avatar} alt={name} width="320" />
                <p className="name">{ name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
  })
).isRequired;

export default FriendList;
