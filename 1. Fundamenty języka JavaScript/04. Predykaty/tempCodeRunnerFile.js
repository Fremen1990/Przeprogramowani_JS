if (!Array.isArray(elements)) {
    throw new Error("elements are not arrays");
  }
  const predykatArray = [];
  for (const element of elements) {
    if (predicate(element)) {
      predykatArray.push(element);
    }
  }
  return predykatArray;