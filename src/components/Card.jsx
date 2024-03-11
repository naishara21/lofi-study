import React from "react";
import "./styles/quotes.css";

const Card = ({ quote }) => {
  return (
    <div className="flex flex-row justify-start p-6">
      <div className="card-1 block rounded-lg bg-white p-6 dark:bg-neutral-700">
        <p className="text-l font-mono font-bold">{quote.quote}</p>
        <div className="text-xs text-neutral-500 dark:text-neutral-300">
          {" "}
          <span>by {quote.character}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
