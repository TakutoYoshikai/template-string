
function renderTemplate (template, data) {
  let result = template;
  const keys = Object.keys(data);
  for (const key of keys) {
    result = result.replaceAll("{" + key + "}", data[key]);
  }
  return result;
}

module.exports = renderTemplate;
