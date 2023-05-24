/** @format */
import axios from "../axios";

const getQuestions = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/questions",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject("ERROR");
    }
  });

export default getQuestions;
