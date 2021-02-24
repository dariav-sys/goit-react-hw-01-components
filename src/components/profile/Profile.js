import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.png';
import styles from './Profile.module.css';
import StatList from './statsList/statsList.js';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const getData = (data) => {
    const key = Object.keys(data).map(key => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: data[key]
    }))
    return key;
  }
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt={tag} className={styles.avatar} width={100} />
        <p className={styles.name}>{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={styles.stats}>        
        {getData(stats).map((item, index) => <StatList key={index} item={item}/>)}
      </ul>
    </div>
  );
};

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
