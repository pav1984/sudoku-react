import React from "react";
const SelectLevel = props => {
  return (
    <label>
      <select value={props.value} onChange={props.change}>
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
        <option value="very-hard">very-hard</option>
        <option value="insane">insane</option>
        <option value="inhuman">inhuman</option>
      </select>
    </label>
  );
};

export default SelectLevel;
