const getItemInArray = (array, item) => (value) =>
  array.filter((item_) => item[value] === item_[value])[0];

const getIndexOfItemInArray = (array, item) => array.indexOf(item);

const getDragIndexOfArray = (array, item) => {
  const card = getItemInArray(array, item)('id');
  return getIndexOfItemInArray(array, card);
};

const shuffle = (array) => {
  const copyArray = [...array];
  let currentIndex = copyArray.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = copyArray[currentIndex];
    copyArray[currentIndex] = copyArray[randomIndex];
    copyArray[randomIndex] = temporaryValue;
  }

  return copyArray;
};

const checkCorrectPositionById = (item, index, pattern) => {
  return pattern[index].id.split('_')[0] === item.id.split('_')[0];
};

const checkCorrectPatternById = (curentPattern, correctPattern) => {
  for (const item of curentPattern) {
    const index = getIndexOfItemInArray(curentPattern, item);
    if (item.id) {
      if (!checkCorrectPositionById(item, index, correctPattern)) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

export {
  getItemInArray,
  getDragIndexOfArray,
  getIndexOfItemInArray,
  shuffle,
  checkCorrectPositionById,
  checkCorrectPatternById,
};
