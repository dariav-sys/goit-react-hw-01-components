import React from "react";
import PropTypes from "prop-types";
import styles from "./Transactions.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead className="transaction-label">
      <tr className="transaction-titles">
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className="transaction-body">
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })
).isRequired;

export default TransactionHistory;
