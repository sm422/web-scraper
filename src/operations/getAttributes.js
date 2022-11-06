export const getAttributes = (elementsArray, attribute) => {
  const regex = new RegExp(`(?<=${attribute}=")(.*?)(?=")`);
  const attributeValues = [];
  elementsArray.forEach((element) => {
    const match = element.match(regex);
    match !== null && attributeValues.push(match[0]);
  });
  return attributeValues;
};
