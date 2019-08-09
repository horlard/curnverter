import fixerApi from "../api/fixerApi";

const key = "4d24678aadb8c71e6ec4d8d69f3c78d6";

export const convert = (from, to) => async dispatch => {
  const response = await fixerApi.get(`?base=${from}&symbols=${to}`);
  dispatch({
    type: "CONVERT",
    payload: response.data.rates
  });
};
