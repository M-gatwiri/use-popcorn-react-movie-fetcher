import React, { useState } from "react";
// import PropTypes from "prop-types";
import { FaStar, FaRegStar } from "react-icons/fa";

const containerStyle = { display: "flex", alignItems: "centre", gap: "16px" };
const starContainerStyle = { display: "flex" };
function StarRating({
  maxsRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = {},
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <div style={containerStyle} className={className}>
      StarRating
      <div style={starContainerStyle}>
        {Array.from({ length: maxsRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxsRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <FaStar fill={color} stroke={color} />
      ) : (
        <FaRegStar stroke={color} />
      )}
    </span>
  );
}
export default StarRating;
