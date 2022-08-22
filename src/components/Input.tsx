import React from "react";

interface InputInterface {
  label: string;
  input?: string;
  setInput: Function;
  important?: Boolean;
  info?: string;
  type: string;
  className?: string;
}

export const Input: React.FC<InputInterface> = ({
  label,
  input,
  setInput,
  important = false,
  info,
  type,
  className,
}) => {
  return (
    <div style={{ marginTop: "2rem" }} className={className}>
      <div>
        <label htmlFor={label}>
          {`${label}`} {important && <span style={{ color: "red" }}>*</span>}
        </label>
      </div>
      {info && <p className="info">{info}</p>}
      <input
        id={label}
        type={type}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required={important as boolean}
      />
    </div>
  );
};
