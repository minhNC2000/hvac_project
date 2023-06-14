export default function toCurrency (number) {
  const currency = Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
  return currency.format(number);
}
