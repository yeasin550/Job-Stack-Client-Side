import React from 'react';

const Comment = ({ commentInfo }) => {
    const { userPhoto, userName, comment } = commentInfo;
  return (
    <div className="flex items-center gap-2 mt-3">
      <div >
        <img className="h-10 w-10 rounded-full" src={userPhoto} alt="user Photo" />
      </div>
      <div className="">
        <h1 className='font-bold text-lg'>{userName}</h1>
        <p className='-mt-1'>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;