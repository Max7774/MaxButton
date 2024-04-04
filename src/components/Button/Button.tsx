import React from "react";
export interface ButtonProps {
  label: string;
}
const MaxButton = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};
export default MaxButton;
