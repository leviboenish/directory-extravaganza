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
  },

  update(id, firstName, lastName, photo, hometownLat, hometownLong, prevOccupation){
    return database('friends').where('id', id).update({
      'firstName': firstName,
      'lastName': lastName,
      'photo': photo,
      'hometownLat': hometownLat,
      'hometownLong': hometownLong,
      'prevOccupation': prevOccupation
    }
    ).returning('*').then(record => {record[0]})
  }

}
