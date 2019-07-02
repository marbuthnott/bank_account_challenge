function Bank() {
  this._account = [];
  this._balance = 0

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
    var transaction = {};
    this._balance += amount;
    transaction['credit'] = amount;
    transaction['debit'] = '';
    transaction['date'] = this.getDate();
    transaction['balance'] = this._balance;
    this._account.push(transaction)
  };

  this.withdraw = function(amount) {
    var transaction = {};
    this._balance -= amount;
    transaction['credit'] = '';
    transaction['debit'] = amount;
    transaction['date'] = this.getDate();
    transaction['balance'] = this._balance;
    this._account.push(transaction)
  };

  this.getDate = function() {
    var today = new Date();
    var date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    return date
  };
}

module.exports.Bank = Bank;