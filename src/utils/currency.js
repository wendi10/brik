export const formatToRupiah = (number) =>
  number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
