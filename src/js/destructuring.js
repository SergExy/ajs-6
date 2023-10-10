function destructuring(character) {
  const res = [];
  const { special } = character;
  special.forEach((el) => {
    const {
      id,
      name,
      description = 'Описание недоступно',
      icon,
    } = el;

    res.push({
      id,
      name,
      description,
      icon,
    });
  });

  return res;
}

export default destructuring;
