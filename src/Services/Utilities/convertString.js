export const stringToArray = (text) => {
  const sta = text.split("/");
  for (let i = 0; i < sta.length; i++) {
    if (sta[i] === "") {
      sta.splice(i, 1);
    }
  }
  return sta;
};

const convertString = { stringToArray };
export default convertString;
