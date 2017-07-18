var mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('multivision bd opened');
  });
  
  var userSchema = mongoose.Schema({
      firstName: String,
      lastName: String,
      userName: String
  });
  var User = mongoose.model('User', userSchema);

  //Tworzy nową tablę w MongoDB i wrzuca tam te 3 wiersze
  User.find({}).exec(function(err, collection) {
      if(collection.length === 0) {
          User.create({firstName: 'Joe', lastName: 'Eames', userName: 'joe'});
          User.create({firstName: 'Jack', lastName: 'Wilshere', userName: 'jack'});
          User.create({firstName: 'Granit', lastName: 'Xhaka', userName: 'granit'});
      }
  });
};