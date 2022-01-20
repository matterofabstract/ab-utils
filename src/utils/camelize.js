export const camelize = (str) => {
  let s = str.replace(':', '');
  if (s.length < 4) {
    return s.toLowerCase();
  }
  return s.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
