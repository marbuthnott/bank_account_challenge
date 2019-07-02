function Bank() {
  this._account = [];
  var balance = 0;
  var transaction = {};

  this.printBankStatement = function() {
    var reversedArray = this._account.reverse()
    console.log('date || credit || debit || balance')
    reversedArray.forEach(function(element) {
      console.log(    
        element.date + ' || ' +
        element.credit + ' || ' +
        element.debit + ' || ' +
        element.balance
        )
    });
  };

  this.deposit = function(amount) {
    balance += amount;
    transaction['credit'] = amount;
    transaction['debit'] = '';
    this.addTransactionToAccount(transaction)
  };

  this.withdraw = function(amount) {
    balance -= amount;
    transaction['credit'] = '';
    transaction['debit'] = amount;
    this.addTransactionToAccount(transaction)
  };

  this.getDate = function() {
    var today = new Date();
    var date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    return date
  };

  this.addTransactionToAccount = function(transaction) {
    transaction['date'] = this.getDate();
    transaction['balance'] = balance;
    this._account.push(transaction)
  };
}

module.exports.Bank = Bank;