import fetch from 'node-fetch';

export const getHTML = async (url) => {
  const response = await fetch(url);
  const html = await response.text();
  return html;
};
