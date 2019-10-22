import React from "react";
import PropTypes from "prop-types";
const button = props => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="btn btn-outline-success"
    >
      {props.value}
    </button>
  );
};

button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default button;
