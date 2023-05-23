/** @format */

import axios from "../axios";
const addUser = (name) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/users",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name,
          scores: 0,
        },
      });
      resolve(response);
    } catch {
      reject("ERROR");
    }
  });

export default addUser;
