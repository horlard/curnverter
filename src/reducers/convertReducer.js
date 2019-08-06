export default (state = {}, action) => {
  switch (action.type) {
    case "CONVERT":
      return { ...action.payload };
    default:
      return "";
  }
};
