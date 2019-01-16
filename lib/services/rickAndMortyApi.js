const request = require('superagent');


const getCharacter = id => {
  // console.log('this is the id', id);
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
    // console.log('this is the name', res.body.name); create return empty object to gather consol.log info
      // return {} = response.body.name;
      name: res.body.name,
      status: res.body.status,
      species: res.body.species
    }));
};    
module.exports = {
  getCharacter
};

