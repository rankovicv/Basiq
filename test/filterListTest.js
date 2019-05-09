var TransactionList = require('../src/services/TransactionList'),
Filter = require('../src/helpers/FilterListAvg');
var assert = require('chai').assert;
var testData = require('./test');

describe('Filter AVG test', function(){

  it('should return a correct avg for account', function() {
    var list = new TransactionList(testData, 'string');

    var testFilter = Filter.getAvgForTransactionListByFilter(list.data, "account");
    
    assert.isNotEmpty(testFilter);
    assert.lengthOf(testFilter, 2, 'Array contains 2 objects');
    assert.equal(testFilter[0].average(), 91.73818181818181, 'Should be the same');

    
  })

  it('should return a correct avg for subClass', function() {
    var list = new TransactionList(testData, 'string');

    var testFilter = Filter.getAvgForTransactionListByFilter(list.data, "subClass", "code");
    
    assert.lengthOf(testFilter, 2, "Should return 2");
    assert.equal(testFilter[0].numerOfTransactions, 7, "should be 7");
    assert.equal(testFilter[0].average(), "127.52428571428572", "AVG"); 
    
  })

})