const request = require('superagent');
const getCharacter = id => {
  // console.log('this is the id', id);
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
    // console.log('this is the name', res.body.name);
      return {} = response.body.name;
    });
      
        

};    
module.exports = {
  getCharacter
};

