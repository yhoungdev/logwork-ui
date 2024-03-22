import React, { FC, ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
}
const Button: FC<IButton> = ({ children, className }: IButton) => {
  return (
    <button
      className={` bg-accent
      text-white py-3 px-4 rounded-md
      hover:bg-accent/70 transition-colors
      font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
