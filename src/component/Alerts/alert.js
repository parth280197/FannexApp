import React from "react";
import PropTypes from "prop-types";
const alert = props => {
  return <div className={`alert alert-${props.type}`}>{props.message}</div>;
};
alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
export default alert;
