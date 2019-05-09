const Subclass = function (data) {
  this.title = data.subClass.title,
  this.code = data.subClass.code,
  this.amount = Math.abs(parseFloat(data.amount)),
  this.numerOfTransactions = 1,
  
  this.print = function () {
    return `Title: ${this.title}, Code: ${this.code}, Avg: ${this.average()}`
  }

  this.average = function () {
    return this.amount / this.numerOfTransactions
  }

  this.countSubclass = function (amount) {
    this.amount += Math.abs(amount);
    this.numerOfTransactions++;
  }

}

module.exports = Subclass;