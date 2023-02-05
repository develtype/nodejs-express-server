function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  const result = Array.from(Array(10).keys()).reduce((res) => {
    res += characters.charAt(Math.floor(Math.random() * charactersLength));
    return res;
  }, '');

  return result;
}

export const memotyDataUtil = {
  generateRandomString,
};
