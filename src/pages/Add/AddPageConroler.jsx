import React from "react";
import AddPageView from "./AddPageView";
import { v4 } from "uuid";
import AddModel from "./AddPageModel";
import { useNavigate } from "react-router-dom";

const AddPageConroler = () => {
  // Create instance from model
  const model = new AddModel();
  // Navigate Setup
  const navigate = useNavigate();

  // Function that will run when the form is submitted
  const handleSubmit = e => {
    // Page refresh blocked
    e.preventDefault();
    // Taking data from inputs and creating objects
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());
    // Add id
    newPost.id = v4();
    // Save data to api and navigate to ListPage
    model.createPost(newPost).then(() => navigate("/"));
  };
  return <AddPageView handleSubmit={handleSubmit} />;
};

export default AddPageConroler;
