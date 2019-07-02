var {Bank} = require('../lib/Bank')

describe('Bank', function() {

  beforeEach(function() {
    bank = new Bank();
  });

  // describe('#print_bank_statement', function() {
  //   it('prints a bank statement in the correct format', function() {

  //   });
  // });

  describe('#deposit', function() {
    it('accepts a deposit', function() {
      bank.deposit(2000)
      var today = new Date();
      var date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
      expect(bank._account).toEqual([{date: date, credit: 2000, debit: 0, balance: 2000}])
    });
  });

  describe('#withdrawal', function() {
    it('accepts a withdrawal', function() {
      bank.withdraw(2000)
      var today = new Date();
      var date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
      expect(bank._account).toEqual([{date: date, credit: 0, debit: 2000, balance: -2000}])
    });
  });

})
