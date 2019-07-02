var { Bank } = require('../lib/Bank')

describe('Bank', function() {

  describe('#print_bank_statement', function() {
    beforeEach(function() {
      bank = new Bank();
      bank._account = [
        {date: '02/07/2019', credit: 1500, debit: '', balance: 1500},
        {date: '04/07/2019', credit: '', debit: 650, balance: 850}
      ];
      spyOn(console, "log");
    });
    
    it('prints a bank statement in the correct format', function() {
      bank.printBankStatement();
      expect(console.log).toHaveBeenCalledWith(
        "date || credit || debit || balance"
      );
      expect(console.log).toHaveBeenCalledWith(
        "04/07/2019 ||  || 650 || 850"
      );
      expect(console.log).toHaveBeenCalledWith(
        "02/07/2019 || 1500 ||  || 1500"
      );
    });
  });

  describe('#deposit', function() {
    beforeEach(function() {
      bank = new Bank();
    });

    it('accepts a deposit', function() {
      bank.deposit(2000)
      var today = new Date();
      var date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
      expect(bank._account).toEqual([{date: date, credit: 2000, debit: '', balance: 2000}])
    });

    it("accepts empty values as ''", function() {
      bank.deposit(2000)
      expect(bank._account[0].debit).toEqual('')
    });
  });

  describe('#withdraw', function() {
    it('accepts a withdrawal', function() {
      bank = new Bank();

      bank.withdraw(2000)
      var today = new Date();
      var date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
      expect(bank._account).toEqual([{date: date, credit: '', debit: 2000, balance: -2000}])
    });
  });
})
