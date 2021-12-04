
function renderTemplate (template, data) {
  let result = template;
  const keys = Object.keys(data);
  for (const key of keys) {
    result = result.replaceAll("{" + key + "}", data[key]);
  }
  let remain;
  if ((remain = result.match(/\{[a-z]{1,}\}/)) !== null) {
    throw new Error(`The rendering needs ${remain} value.`);
  }
  return result;
}

console.log(renderTemplate("{hello}, {world}, {hoge}", {
//  hello: "hey",
  world: "word",
  hoge: "fuga",
}));

module.exports = renderTemplate;
