const judgeVegetable = function (vegetables, metric) {
  let person = '';
  let num = 0;
  for (let i = 0; i < vegetables.length; i++ ) {
    if (vegetables[i][metric] > num) {
      num = vegetables[i][metric];
      person = vegetables[i]['submitter'];
      }
  }
  return person;
}



// another way?

const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter
}