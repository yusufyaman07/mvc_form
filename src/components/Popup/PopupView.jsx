import React from "react";

const PopupView = ({ user, close, userdata }) => {
  return (
    <div className="grid place-items-center w-full h-full fixed bg-black bg-opacity-50 inset-0">
      <div className="w-3/4 max-[600px] bg-gray-800 p-5 rounded-md">
        <div className="flex justify-between items-center">
          <h4>
            <span className="font-bold text-yellow-500">{user}</span>'s User
            Post
          </h4>
          <button className="bg-gray-900 p-2 rounded-md" onClick={close}>
            X
          </button>
        </div>
        {userdata.length === 0 ? (
          <p>Loading.....</p>
        ) : (
          userdata.map(post => (
            <div key={post.id} className="bg-black p-3 rounded-md my-4">
              <h2 className="font-bold">{post.title} </h2>
              <p>{post.text} </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;
