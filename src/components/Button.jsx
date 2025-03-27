import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  disabled = false,
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg transition-all duration-200 ease-in-out 
        ${bgColor} ${textColor} ${disabled ? "opacity-50 cursor-not-allowed" : "hover:brightness-110"} 
        ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
