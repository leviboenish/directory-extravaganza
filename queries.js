const database = require('./database-connection');

module.exports = {

  getAll(){
    return database('friends');
  },

  getById(id){
    return database('friends').where('id', id).first();
  },

  delete(id){
    return database('friends').where('id', id).del();
  }

}
