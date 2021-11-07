const availableChars = "abcdefghijklmnopqrstuvwxyz";

const generateUrlKey = (keyLength: Number = 3) => {
  const emptyArray = Array(keyLength).fill(0);

  return emptyArray.map(() => availableChars.charAt(Math.random() * availableChars.length)).join("");
};

export { generateUrlKey };
