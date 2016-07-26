for (var i = 0; i < 1000; i++) {
  var sum = 0;
  if (i % 3 === 0) {
    sum += i;
  } else if (i % 5 === 0) {
    sum += i;
  };
  return sum;
};
