/** @format */
import * as apis from "../api";
export const ADD_USER = (payload) => ({
  type: "ADD_USER",
  payload,
});

export const GET_QUESTIONS = () => async (dispatch) => {
  try {
    const response = await apis.getQuestions();
    if (response?.status === 200) {
      dispatch({
        type: "GET_QUESTIONS",
        payload: response?.data,
      });
    } else {
      dispatch({
        type: "GET_QUESTIONS",
        payload: null,
      });
    }
  } catch (error) {
    dispatch({
      type: "GET_QUESTIONS",
      payload: null,
    });
  }
};

export const Z_INDEX_ITEMS = (payload) => ({
  type: "Z_INDEX_ITEMS",
  payload,
});

export const INCREASE_SCORES = (payload) => ({
  type: "INCREASE_SCORES",
  payload,
});

export const ADD_RANDOM = (payload) => ({
  type: "ADD_RANDOM",
  payload,
});
