import React from 'react';
import {BsQuestionCircle} from 'react-icons/bs'

const QuestionsAnswers = () => {
    return (
      <div className="max-w-screen-xl px-5 mx-auto my-20 mb-20">
        {/* title and descption */}
        <div className="text-center md:w-6/12 mx-auto">
          <h1 className="text-3xl font-semibold">Questions & Answers</h1>
          <p className="text-lg mt-3">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        {/* main part */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold">How our Jobstack work ?</h1>
              <p className="text-justify">
                Due to its widespread use as filler text for layouts,
                non-readability is of great importance: human perception is
                tuned to recognize certain patterns and repetitions in texts.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold">
                What is the main process open account ?
              </h1>
              <p className="text-justify">
                words is random, the reader will not be distracted from making a
                neutral judgement on the visual impact.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold">
                How to make unlimited data entry ?
              </h1>
              <p className="text-justify">
                Furthermore, it is advantageous when the dummy text is
                relatively realistic so that the layout impression of the final
                publication is not compromised.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold">
                Is Jobstack safer to use with my account ?
              </h1>
              <p className="text-justify">
                The most well-known dummy text is the 'Lorem Ipsum', which is
                said to have originated in the 16th century. Lorem Ipsum is
                composed in a pseudo-Latin language which more or less
                corresponds to 'proper' Latin.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuestionsAnswers;