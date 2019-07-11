import axios from "axios";
import { serverConsts } from "../constants";
axios.defaults.baseURL = serverConsts.baseURL;

export default class {
  getNotes(count = 10) {
    return axios.get("posts/").then(res => {
      const resData = {};
      for (let id in res.data) {
        if (count < 0) break;
        resData[id] = res.data[id];
        count -= 1;
      }
      for (let id in resData) {
        const item = { ...resData[id] };
        resData[id] = {
          title: item.title,
          body: item.body,
          bookmark: Math.random() > 0.7,
          labels: ["ex", "ex2"],
          id
        };
      }
      return resData;
    });
  }
  getNote(id) {
    return axios.get("posts/" + id).then(res => {
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
