import fs from 'fs';
import fetch from 'node-fetch';

export const downloadSrcs = async (srcValues) => {
  srcValues.forEach(async (src, i) => {
    try {
      const response = await fetch(src)
      const fileString = src.toLowerCase().includes('.jpg') ? `./output/image${i}.jpg` : `./output/image${i}.png`
      const dest = fs.createWriteStream(fileString);
      response.body.pipe(dest);
    } catch (error) {console.log(error)}
  });
}
