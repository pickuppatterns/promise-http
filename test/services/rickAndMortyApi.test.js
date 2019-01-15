const { getCharacter } = require('../../lib/services/rickAndMortyApi');

describe('rick & morty service', () => {
  it.only('gets a character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status:'Alive',
          species: 'Human'
        });
      });
  });
});
