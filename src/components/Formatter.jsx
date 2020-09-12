const Formatter = new Intl.NumberFormat("en", {
  style: "decimal",
  notation: "compact",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const FormatterForCounts = new Intl.NumberFormat("en");

export { FormatterForCounts };

export default Formatter;
