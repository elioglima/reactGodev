import React, { useState, useEffect } from "react";

import {
  BASE,
  Caption,
  Titulo,
  TituloColuna,
  BaseLinha,
  Linhas,
  LinhasColuna
} from "./styled";

export default props => {
  const [dgColunas, setdgColunas] = useState([]);
  const [dgLinhas, setdgLinhas] = useState([]);
  const [widthAuto, setWidthAuto] = useState(true);

  useEffect(() => {
    setWidthAuto(props.widthAuto);
  }, [props.widthAuto]);

  useEffect(() => {
    setdgLinhas(props.dgLinhas);
  }, [props.dgLinhas]);

  useEffect(() => {
    setdgColunas(props.dgColunas);
  }, [props.dgColunas]);

  return (
    <BASE>
      <Caption>Lista de Usuários</Caption>
      <Titulo>
        {dgColunas.map(c => {
          if (c.hide == true) return;
          return (
            <TituloColuna
              width={
                widthAuto
                  ? 100 / dgColunas.length + "%"
                  : c.width
                  ? c.width
                  : 100 / dgColunas + "%"
              }
            >
              {c.title}
            </TituloColuna>
          );
        })}
      </Titulo>
      <BaseLinha>
        {dgLinhas.map(r => {
          return (
            <Linhas>
              {dgColunas.map(c => {
                return (
                  <LinhasColuna
                    width={
                      widthAuto
                        ? 100 / dgColunas.length + "%"
                        : c.width
                        ? c.width
                        : 100 / dgColunas + "%"
                    }
                  >
                    {r[c.name]}
                  </LinhasColuna>
                );
              })}
            </Linhas>
          );
        })}
      </BaseLinha>
      {/* <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Instrument</th>
                        </tr>
                    </tfoot> */}
    </BASE>
  );
};
