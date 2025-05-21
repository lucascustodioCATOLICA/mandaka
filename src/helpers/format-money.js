export const formatMoney = (value) => {
  return value.toFixed(2).toString().replace(".", ",");
};
