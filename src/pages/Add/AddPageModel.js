import axios from "axios";
import { toast } from "react-toastify";

export default class AddModel {
  async createPost(newPost) {
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      toast.success("Data saved !!");
    } catch (err) {
      toast.error("An error occurred while saving data :(");
    }
  }
}
