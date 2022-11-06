export const filterElements = (elements, value) => {
  if(value === 'all') {
    return elements;
  }
  return elements.filter((element) => element.includes(value));
}
