export const normalizeSrcs = (srcValues, url) => {
  const urlObj = new URL(url);
  srcValues.forEach((src, i) => {
    if(!src.includes('http') && src.includes(urlObj.host)){
      srcValues[i] = `${urlObj.protocol}//${src}`;
    } else if (!src.includes('http') && !src.includes(urlObj.host)) {
      srcValues[i] = `${urlObj.protocol}//${urlObj.host}${src}`;
    }
  });
  return srcValues;
}
