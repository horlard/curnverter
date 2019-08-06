import fixerApi from "../api/fixerApi";

const key = "xTCU53gMJGwSP8P5zS5VgefRVHt9as";

export const convert = (from, to, amount) => async dispatch => {
  const response = await fixerApi.get(
    `?api_key=${key}&from=${from}&to=${to}&amount=${amount}`
  );
  dispatch({
    type: "CONVERT",
    payload: response.data
  });
};
