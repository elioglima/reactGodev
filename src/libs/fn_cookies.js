module.exports.ler = name => {
  const cookie = require("js-cookie");
  const base64 = require("base-64");

  try {
    let value = cookie.get(base64.encode({ name }));
    let valueDecode = base64.decode(value);
    let objTemp = JSON.parse(valueDecode);
    if (typeof objTemp != "object") return false;
    if (!objTemp.dados) return false;
    return objTemp.dados;
  } catch (error) {
    console.log("erro conversao cookie");
    return false;
  }
};

module.exports.salvar = (name, dados) => {
  const cookie = require("js-cookie");
  const base64 = require("base-64");

  try {
    let value = cookie.get(base64.encode({ name }));
    if (value) {
      let valueDecode = base64.decode(value);
      let objTemp = JSON.parse(valueDecode);
      if (objTemp.dados === dados) {
        return true;
      }
    }

    let objeto = { dados };
    let json = JSON.stringify(objeto);
    let resultado = base64.encode(json);
    cookie.set(base64.encode({ name }), resultado);

    value = cookie.get(base64.encode({ name }));
    if (value) {
      let valueDecode = base64.decode(value);
      let objTemp = JSON.parse(valueDecode);
      if (objTemp.dados === dados) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.log("erro conversao cookie");
    return false;
  }
};
