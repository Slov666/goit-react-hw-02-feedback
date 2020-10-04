import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
