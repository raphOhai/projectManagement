"use client";
import React from "react";
import "./styles.scss";
interface CheckBoxProp {
  action: (e: any) => void;
  checked?: boolean;
  id?: string;
  rounded?: boolean;
}
export const CheckBox = ({ rounded, action, checked, id }: CheckBoxProp) => {
  return (
    <div>
      <label className="custom-checkbox pointer">
        <input
          id={id}
          onChange={(e) => action(e)}
          type="checkbox"
          className="hidden-checkbox"
          checked={checked}
        />
        <span
          className={rounded ? "checkbox-mark rounded " : "checkbox-mark"}
        ></span>
        {/* Check me! */}
      </label>
    </div>
  );
};
