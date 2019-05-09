const Subclass = require("../models/Subclass");

const TransactionList = function (data, session) {
  this.data = data.data;
  this.links = data.links;
  this.session = session;

  const self = this;

  this.getAllSubClassInfo = function () {
    const list = [];

    self.data.forEach(function(item) {

      if (item.subClass) {
        var existingSubclass = list.find(function (e) {
          return e.code === item.subClass.code
        })

        if (!existingSubclass) {
          list.push(new Subclass(item))
        } else {
          existingSubclass.countSubclass(parseFloat(item.amount));
        }
      }

    })
    
    return list;
  };

  this.next = function () {
    if (!self.links || !self.links["next"]) {
      return false;
    }

    const next = self.links["next"].substr(self.links["next"].indexOf(".io/") + 4);

    return new Promise(function (res, rej) {
      return session
        .getToken()
        .then(function () {
          return session.API.send(next, "GET");
        })
        .then(function (body) {
          if (body.data && body.data.length === 0) {
            return res(false);
          }

          self.data = body.data;
          self.links = body.links;

          res(true);
        })
        .catch(function (err) {
          rej(err);
        });
    });
  };

  return this;
};

module.exports = TransactionList;
