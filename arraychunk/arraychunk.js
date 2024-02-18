const chunk = (array, size) => {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if(!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;

// Watch this video again at some point because the explianing of array chunking in this case was confusing