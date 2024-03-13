//Controller is used in the interactive parts of the user.
import React, { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

const ListController = () => {
  // States
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  //Accessing the function created in Modal via Controller
  const model = new ListModel();
  //Get data when screen loads
  useEffect(() => {
    model.getPosts().then(data => setPosts(data));
  }, []);
  return (
    <div>
      <ListView
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        posts={posts}
      />
    </div>
  );
};

export default ListController;
