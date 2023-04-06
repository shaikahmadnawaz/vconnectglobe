import React from "react";

const FlipBook = () => {
  return (
    <div className="h-96">
      <h2 className="text-xl sm:text-3xl font-bold text-center mb-0 md:mb-3">
        How do I begin my study abroad?
      </h2>
      <iframe
        className="mt-0"
        src="https://vconnectglobe.com/booking/pdf-book/#dearflip-df_1055/1/"
        title="flipbook"
        width="100%"
        height="100%"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default FlipBook;
