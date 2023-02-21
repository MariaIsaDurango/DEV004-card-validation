function isValid(crediCard) {
  const separado = crediCard.split("");
  const reversa = separado.reverse();
  let suma = 0;
  // dobla cada dos digito
  for (let i = 1; i < reversa.length; i += 2) {
    const dobla = Number(reversa[i]) * 2;
    //reversa[i] = dobla;
    if (dobla > 9) {
      //console.log(dobla)
      const sumadosdigitos = dobla - 9;
      suma = suma + sumadosdigitos;
    } else {
      suma = suma + dobla;
    }
  }

  //console.log(suma);
  //console.log(reversa);
  for (let index = 0; index < reversa.length; index += 2) {
    //sumar impares
    suma = suma + Number(reversa[index]);
  }
  // console.log("sumafinal", suma);
  if (suma % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

function maskify(text) {
  const UltimosNUmeros = text.substring(text.length - 4);
  if (text.length < 4) {
    return text;
  }
  return (
    Array(text.length - 4)
      .fill("#")
      .join("") + UltimosNUmeros
  );
}

const validator = {
  isValid,
  maskify,
};

export { isValid, validator, maskify };
