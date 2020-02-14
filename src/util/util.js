const getConditionalString = (selectedId, circleId, str1, str2 = "") =>
  selectedId === circleId ? str1 : str2;

export default getConditionalString;
