import React, { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModal";

const PopupController = ({ close, user }) => {
  const [userdata, setUserData] = useState([]);
  const model = new PopupModel();
  useEffect(() => {
    model.getUserPosts(user).then(data => setUserData(data));
  }, []);
  return <PopupView userdata={userdata} close={close} user={user} />;
};

export default PopupController;
