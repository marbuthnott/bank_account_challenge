function Bank() {
  this._account = [];
  this._transaction = {
    date: '',
    credit: 0,
    debit: 0,
    balance: 0
  }

  this.deposit = function(amount) {
    this._transaction.date = this.getDate()
    this._transaction.credit = amount
    this._transaction.balance += amount
    this._account.push(this._transaction)
    this.clearTransaction()
  };

  this.withdraw = function(amount) {
    this._transaction.date = this.getDate()
    this._transaction.debit = amount
    this._transaction.balance -= amount
    this._account.push(this._transaction)
    this.clearTransaction()
  };

  this.getDate = function() {
    var today = new Date();
    var date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    return date
  };

  this.clearTransaction = function() {
    this._transaction = 
    this._transaction = {
      date: '',
      credit: 0,
      debit: 0,
      balance: 0
    }
  };

}

module.exports.Bank = Bank;