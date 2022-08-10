import React from "react";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import PinInput from "./PinInput";

const Pin = ({ length, setOtp }) => {
  const [inputBoxLength] = useState(new Array(length).fill(1));
  const [inputData] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    inputData[index] = e.target.value;
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtp(inputData.join(""));
  };

  const handleBackSpace = (e, index) => {
    inputData[index] = e.target.value;
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    setOtp(inputData.join(""));
  };

  const handlePaste = (e) => {
    const data = e.ClipboardData.getData("text")
      .split("")
      .filter((_, index) => index < length);
    data.forEach((item, index) => {
      inputRef.current[index].value = item;
      inputData[index] = item;

      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div onPaste={handlePaste}>
      {inputBoxLength.map((_, index) => {
        return (
          <PinInput
            ref={(HTMLElement) => {
              inputRef.current[index] = HTMLElement;
            }}
            key={index}
            singleInputHandler={(e) => changeHandler(e, index)}
            onBackspaceHandler={(e) => handleBackSpace(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  setOtp: PropTypes.func,
};
