import axios from "axios";
import { serverConsts } from "../constants";
axios.defaults.baseURL = serverConsts.baseURL;

export default class {
  getNotes() {
    return axios.get("note/").then(res => {});
  }
  getNote(id) {
    return axios.get(`note/${id}`).then(res => {
      const item = { ...res.data };
      return {
        title: item.title,
        body: item.body,
        bookmark: Math.random() > 0.65,
        id
      };
    });
  }
}
