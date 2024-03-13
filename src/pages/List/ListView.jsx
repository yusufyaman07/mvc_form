// View is the part that the user will see.
import React from "react";
import PopupController from "../../components/Popup/PopupController";

const ListView = ({ posts, setSelectedUser, selectedUser }) => {
  return (
    <div className="text-white container-sm px-5 py-5 md:px-40 lg:px-52">
      <h1>
        Number of Posts: <span className="font-bold">{posts.length}</span>{" "}
      </h1>

      <div>
        {posts?.length === 0 ? (
          <h1>Loading ...</h1>
        ) : (
          posts.map(post => (
            <div
              key={post.id}
              className="bg-black w-full my-5 p-5 rounded-md shadow shadow-gray-400 cursor-pointer transition hover:shadow-yellow-300"
            >
              <div className="flex justify-between">
                <h3>{post.title} </h3>
                <p
                  onClick={() => setSelectedUser(post.user)}
                  className="text-yellow-500"
                >
                  {post.user}{" "}
                </p>
              </div>
              <p>{post.text} </p>
            </div>
          ))
        )}
        {/* Open Popup for User */}
        {selectedUser && (
          <PopupController
            user={selectedUser}
            close={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ListView;
