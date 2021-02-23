import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.png";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
  <div className={styles.profile}>
    <div className="description" >
        <img src={avatar} alt={tag} className={styles.avatar} width={100} />
        <p className={styles.name}>{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
      </div>
      
      <ul className={styles.stats}>
    <li>
      <span className={styles.label} >Followers</span>
      <span className={styles.quantity} >{followers}</span>
    </li>
    <li>
      <span className={styles.label} >Views</span>
      <span className={styles.quantity} >{views}</span>
    </li>
    <li>
      <span className={styles.label} >Likes</span>
      <span className={styles.quantity} >{likes}</span>
    </li>
  </ul>
  </div>
)};


Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
