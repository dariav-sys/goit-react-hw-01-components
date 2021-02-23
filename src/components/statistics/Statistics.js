import React from "react";
import PropTypes from "prop-types"; 
import styles from "./Statistics.module.css";
import randomColor from "./RandomColor.js"

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {stats.map((stat) => {
          return (
            <li className={styles.stat} key={stat.id} style={{backgroundColor: randomColor()}}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
).isRequired;

export default Statistics;
