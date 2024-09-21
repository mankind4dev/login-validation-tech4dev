import React, { useState } from "react";

export default function FormInput(props) {
  const { label, errorMessage, id, ...inputProps } = props;
  const [focussed, setFocussed] = useState(false);

  const handleFocus = (e) => {
    setFocussed(true);
  };
  return (
    <section>
      <div className="row">
        <label>{label}</label>
        <input
          {...inputProps}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setValues(true)
          }
          focussed={focussed.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </section>
  );
}
