import React from "react";

const ArticleCard = ({ article }) => {
  const {
    articletitle,
    userName,
    userPhoto,
    image,
    artciledescription,
    timeStamp,
  } = article;
  return (
    <div>
      <div className="shadow-xl h-96 p-3 rounded-lg">
        <img src={image} alt="" />
        <h1 className="text-lg font-semibold mb-2">{articletitle}</h1>

        <p className="text-sm"> {artciledescription}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
