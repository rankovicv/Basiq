var TransactionList = require('../src/services/TransactionList'),
 assert = require('chai').assert,
 testData = require('./test');

describe('TransactionList', function(){

  it('should return a TransactionList created', function() {
    var list = new TransactionList(testData, 'string');

    assert.lengthOf(list.data, 12, 'Array contains 12 objects of transaction');
    assert.isNotEmpty(list.links);
  })

  it('should return a Subclasses from TransactionList', function() {
    var subclasses = new TransactionList(testData, 'string').getAllSubClassInfo();

    assert.lengthOf(subclasses, 2, "Should return 2 subclasses");
    assert.equal(subclasses[0].numerOfTransactions, 7, "should be 7");
    assert.equal(subclasses[0].title, "Supermarket and Grocery Stores");
    assert.equal(subclasses[0].average(), "127.52428571428572", "AVG"); 
  })

})