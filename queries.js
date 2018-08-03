const database = require('./database-connection');

module.exports = {

  getAll(){
    return database('friends')
  }

}
