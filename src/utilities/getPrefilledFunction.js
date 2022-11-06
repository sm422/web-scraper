export const getPrefilledFunction = (func, staticParamter) => {
  return (dynamicParam) => func(dynamicParam, staticParamter);
}
