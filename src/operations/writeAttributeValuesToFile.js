import fs from 'fs';

export const writeAttributeValuesToFile = (attributeValues) => {
  fs.writeFile('./output/output.txt', JSON.stringify(attributeValues), { flag: 'w+' }, err => {console.log(err)});
  return attributeValues;
}
