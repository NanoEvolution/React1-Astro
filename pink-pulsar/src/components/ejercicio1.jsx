import React from "react";
export default function ProgramaMayor(props) {
  const numero1 = props.valor_numero;
  const numero2 = 8;
  function compruebaMayor(n1, n2) {
    const resultado =
      n1 > n2 ? `el primero, ${n1} es mayor` : `el segundo, ${n2} es mayor`;
    return resultado;
  }
  return (
    <div>
      <h2>Comprobador de notas</h2>
      <p>{compruebaMayor(numero1, numero2)}</p>
    </div>
  );
}
