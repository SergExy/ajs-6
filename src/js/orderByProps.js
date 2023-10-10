function orderByProps(obj, props) {
  const orderProps = [];
  const other = [];
  const keys = Object.keys(obj);

  props.forEach((prop) => {
    if (prop in obj) {
      orderProps.push({
        key: prop,
        value: obj[prop],
      });
    }
  });

  keys.forEach((prop) => {
    if (!props.includes(prop)) {
      other.push({
        key: prop,
        value: obj[prop],
      });
    }
  });

  other.sort((a, b) => {
    const aKey = a.key.toLowerCase();
    const bKey = b.key.toLowerCase();
    if (aKey < bKey) return -1;
    return 1;
  });

  return [...orderProps, ...other];
}

export default orderByProps;
