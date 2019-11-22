const modelo = {
  id: {
    type: "number",
    requiredInsert: true,
    requiredUpdate: true,
    msgErroIn: "Erro ao gerar ID",
    msgErroUp: "Id da postagem não informado."
  },
  title: {
    type: "string",
    requiredInsert: true,
    msgErro: "Informe o titulo da postagem.",
    lengthMin: 5,
    lengthMax: 120
  },
  descriptions: {
    type: "string",
    requiredInsert: true,
    msgErro: "Informe no minimo #length.",
    lengthMin: 5,
    lengthMax: 300
  },
  category: {
    type: "string",
    requiredInsert: true,
    msgErro: "Informe a categoria para a postagem.",
    lengthMin: 5,
    lengthMax: 50
  },
  "so-android": {
    type: "boolean",
    msgErro: "Informe a categoria para a postagem.",
    default: true
  },
  "so-ios": {
    type: "boolean",
    msgErro: "Informe a categoria para a postagem.",
    default: true
  },
  github: {
    type: "string"
  },
  autor: {
    type: "string"
  },
  tags: {
    type: "array:string"
  },
  steps: {
    type: "array:obj",
    obj: {
      id: {
        type: "number",
        requiredInsert: true,
        requiredUpdate: true,
        msgErroIn: "Erro ao gerar ID",
        msgErroUp: "Id da postagem não informado."
      },
      titulo: {
        type: "string",
        requiredInsert: true,
        msgErroIn: "Informe o titulo para o item da postagem."
      },
      texto: {
        type: "string",
        requiredInsert: true,
        msgErroIn: "Informe o texto para o item da postagem."
      },
      videos: {
        type: "array:string"
      },
      imagens: {
        type: "array:string"
      },
      refs: {
        type: "array:string"
      },
      tags: {
        type: "array:string"
      }
    }
  }
};
module.exports.modelo = modelo;

module.exports.parse = (dados, compType = false) => {
  const formatacao = (type, value, length = -1) => {
    return { type, value, length };
  };

  let rgs = {};
  const dds = dados[0];
  Object.keys(modelo).filter(e => {
    // percorre objetos do modelo

    Object.keys(dds).filter(d => {
      // percorre objetos de dds
      if (
        d
          .toString()
          .trim()
          .toLowerCase() !=
        e
          .toString()
          .trim()
          .toLowerCase()
      )
        return false;

      // regras de propriedades
      if (compType === true && typeof dds[d] !== e.type) return false;
      const ddsType = typeof dds[d];
      let md = {
        type: "",
        value: "",
        length: 0
      };

      if (ddsType === "number") {
        return (rgs[d] = formatacao(modelo[e].type, dds[d]));
      } else if (ddsType === "string") {
        return (rgs[d] = formatacao(modelo[e].type, dds[d], dds[d].length));
      } else if (ddsType === "boolean") {
        return (rgs[d] = formatacao(modelo[e].type, Boolean(dds[d])));
      } else if (ddsType === "object") {
        if (Array.isArray(dds[d])) {
          if (modelo[e].type === "array:string") {
            let arrTemp = [];
            dds[d].map(t => arrTemp.push(t));
            return (rgs[d] = formatacao(
              modelo[e].type,
              arrTemp,
              arrTemp.length
            ));
          } else if (modelo[e].type === "array:obj") {
            // percorrer objetos
            const arrayNivel1 = dds[d];
            rgs[d] = arrayNivel1.map(n1 => {
              let oType = typeof n1;
              if (oType === "string")
                return (rgs[d] = formatacao(modelo[e].type, n1, n1.length));
              else if (oType === "number")
                return (rgs[d] = formatacao(modelo[e].type, n1, n1.length));
              else if (oType === "boolean")
                return (rgs[d] = formatacao(modelo[e].type, n1, n1.length));
              else if (ddsType === "object") {
                // caso tenha um terceiro nivel

                if (Array.isArray(n1)) {
                  const subRgs = {};
                  if (modelo[e].type === "array:obj") {
                    Object.keys(modelo[e].obj).filter(mdn1 => {
                      n1.map(n2 => {
                        Object.keys(n2).filter(n2obj => {
                          if (mdn1 === n2obj) {
                            const n2VL = n2[n2obj];
                            const n2Type = typeof n2[n2obj];
                            if (n2Type === "string") {
                              return (subRgs[n2obj] = formatacao(
                                n2Type,
                                n2VL,
                                n2VL.length
                              ));
                            } else if (n2Type === "number") {
                              return (subRgs[n2obj] = formatacao(n2Type, n2VL));
                            } else if (n2Type === "boolean")
                              return (subRgs[n2obj] = formatacao(n2Type, n2VL));
                            else if (n2Type === "object") {
                              if (Array.isArray(n2VL)) {
                                if (
                                  modelo[e].obj[mdn1].type === "array:string"
                                ) {
                                  const rsn3 = n2VL.map(n3 => {
                                    return formatacao("string", n3, n3.length);
                                  });
                                  return (subRgs[n2obj] = formatacao(
                                    "array:string",
                                    rsn3,
                                    rsn3.length
                                  ));
                                }
                              } else {
                                console.log("nao implementar 0101");
                                return;
                              }
                            }
                          }
                        });
                      });
                    });
                  }

                  return (rgs[d] = formatacao(
                    modelo[e].type,
                    subRgs,
                    subRgs.length
                  ));
                } else {
                  // incluir field do obejto comum
                  console.log(
                    "implantar",
                    "incluir field do obejto comum - 157"
                  );
                  return;
                }
              }
            });
          } else return false;
        } else {
          // incluir field do obejto comum
          console.log("implantar", "incluir field do obejto comum - 164");
          return false;
        }
      }
    });
  });
  console.log(25, JSON.stringify(rgs, "", 4));
};
