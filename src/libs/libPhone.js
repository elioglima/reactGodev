const Regex = /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g;

export const PhoneIsValid = (telefone) => {
  if (!telefone)
    return false;

  if (telefone.length > 254)
    return false;

  // var valid = Regex.test(telefone);
  // if (!valid)
  //   return false;

  return true;
}
