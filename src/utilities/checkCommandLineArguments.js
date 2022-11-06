export const checkCommandLineArguments = (commandLineArguments) => {
  if (commandLineArguments.length != 5) {
    console.error('Invalid number of arguments');
    return false;
  } else if(commandLineArguments[4] === 'download' && commandLineArguments[2] !== 'src'){
    console.error('Invalid attribute argument with "download"')
    return false;
  } else {
    return true;
  }
}
