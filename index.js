
function renderTemplate (template, data) {
  let result = template;
  const keys = Object.keys(data);
  for (const key of keys) {
    result = result.replaceAll("{" + key + "}", data[key]);
  }
  let remain;
  if ((remain = result.match(/\{([a-z]|[A-Z]|_){1,}\}/)) !== null) {
    remain = remain[0];
    throw new Error(`The rendering needs ${remain} value.`);
  }
  return result;
}

module.exports = renderTemplate;
