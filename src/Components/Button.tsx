import React from "react";

export default function Button(props: {
  onClick?: () => void,
  disabled?: boolean,
  children: React.ReactChild | React.ReactChild[],
  className?: string
}) {
  return (
    <button className={`px-8 py-4 font-medium text-white text-center
     rounded-full bg-cyan ${props.className}`}>
      {props.children}
    </button>
  );
}
