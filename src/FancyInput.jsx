import React from "react";
import FormikHOC from "./FormikHOC";

function FancyInput({ lable, id, name, touched, error, ...rest }) {
  return (
    <div>
      <lable htmlFor={id} className="sr-only">
        {lable}
      </lable>
      <input
        id={id}
        name={name}
        className=" border rounded-md border-violet-400 mb-2"
        {...rest}
      />
      {touched && error && <div className="text-red-700">{error}</div>}
    </div>
  );
}
export const FormikFancyInput = FormikHOC(FancyInput);
export default FancyInput;
