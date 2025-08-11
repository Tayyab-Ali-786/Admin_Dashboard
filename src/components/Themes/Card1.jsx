import React from "react";

export default function Card1({ bgColor, title, value }) {
  return (
    <div className={`p-6 rounded-lg shadow text-white ${bgColor}`}>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-2xl">{value}</p>
    </div>
  );
}
