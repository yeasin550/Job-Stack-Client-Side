import React from "react";

const FAQAllQuestion = ({ question, answer }) => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-200 mt-5">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
     {question}
        </div>
        <div className="collapse-content">
          <p>{ answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQAllQuestion;
