import React from "react";
import style from "./FeedBackOprions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // я так і не зрозумів як мені тут використоувати опції і функцію.
  const { bth } = style;
  return (
    <div onClick={onLeaveFeedback}>
      <button className={bth} type="button" name="good">
        Good
      </button>
      <button className={bth} type="button" name="netural">
        Netural
      </button>
      <button className={bth} type="button" name="bad">
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
