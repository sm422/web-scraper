import {checkCommandLineArguments, getPrefilledFunction} from './utilities/index.js';
import {
  downloadSrcs,
  filterElements,
  getAttributes,
  getElements,
  getHTML,
  normalizeSrcs,
  writeAttributeValuesToFile
} from './operations/index.js';

const commandLineArguments = process.argv.slice(2, process.argv.length);

if (!checkCommandLineArguments(commandLineArguments)){
  process.exit();
}

const url = commandLineArguments[0];
const element = commandLineArguments[1];
const attribute = commandLineArguments[2];
const filterValue = commandLineArguments[3];
const shouldDownload = (commandLineArguments[4] === 'download');

const getElementsPrefilled = getPrefilledFunction(getElements, element);
const filterElementsPrefilled = getPrefilledFunction(filterElements, filterValue)
const getAttributesPrefilled = getPrefilledFunction(getAttributes, attribute);
const normalizeSrcsPrefilled = getPrefilledFunction(normalizeSrcs, url);

const scrape = async (url) => {
  const html = await getHTML(url)
  const functions = [
    getElementsPrefilled,
    filterElementsPrefilled,
    getAttributesPrefilled,
    writeAttributeValuesToFile,
    normalizeSrcsPrefilled,
  ];
  shouldDownload && functions.push(downloadSrcs);
  functions.reduce((accumulator, func) => {return func(accumulator)}, html);
};

scrape(url);
