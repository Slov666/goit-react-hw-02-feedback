import React from 'react';
import PropTypes from 'prop-types';

const Statistics = (({good, netural, bad, total, positivePercentage})=>{
    return(
        <>
        <p>Good: {good}</p>
        <p>Netural: {netural}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </>
    )
})
Statistics.propTypes = {
  good: PropTypes.number,
  netural: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}
export default Statistics;