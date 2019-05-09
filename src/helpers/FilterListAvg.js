const getAvgForTransactionListByFilter = function (list, filter, forFilterObejct) {
  filterlist = [];

  for (i = 0; i < list.length; i++) {

    var filtering = list[i][filter];
    if (forFilterObejct && filtering) {
      filtering = list[i][filter][forFilterObejct];
    }

    if (filtering) {
      var existing = filterlist.find(function (e) {
        return e.type === filtering;
      })

      if (!existing) {
        filterlist.push(new FilterObject(filtering, list[i].amount))
      } else {
        existing.count(parseFloat(list[i].amount));
      }
    }
  }

  return filterlist;

}

const FilterObject = function (filter, amount) {
  this.type = filter,
  this.amount = Math.abs(parseFloat(amount)),
  this.numerOfTransactions = 1,

  this.average = function () {
    return this.amount / this.numerOfTransactions;
  }

  this.count = function (amount) {
    this.amount += Math.abs(amount);
    this.numerOfTransactions++;
  }
}

module.exports = {
  getAvgForTransactionListByFilter: getAvgForTransactionListByFilter
}