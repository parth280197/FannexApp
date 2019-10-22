import React from "react";
import PropTypes from "prop-types";
const textbox = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        placeholder={"Please enter " + props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

textbox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default textbox;
