export const getElements = (html, element) => {
  const regex = new RegExp(`(?<=<${element})(.*?)(?=>)`, 'g');
  const elementsInterator = html.matchAll(regex);
  const elements = [];
  for(const element of elementsInterator){
    elements.push(element[0])
  }
  return elements;
};
