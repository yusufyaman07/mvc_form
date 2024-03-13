// Data related things are defined here.

import axios from "axios";

export default class ListModel {
  // Function that receives data from API
  async getPosts() {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      return res.data;
    } catch (err) {
      alert("Error:", err);
    }
  }
}
