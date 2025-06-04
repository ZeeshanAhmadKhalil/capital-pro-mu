const camelToTitle = (str: string) => {
  let result = str.replace(/([A-Z])/g, ' $1');
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result.split('[')[0];
};

export { camelToTitle };
