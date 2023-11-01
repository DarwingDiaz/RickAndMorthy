const axios = require('axios');

const URL = `https://rickandmortyapi.com/api/character/`;


// ASYNC AWAIT

async function getCharById(req , res) {
    // /rickandmorty/character/:id
    try {
        const {id} = req.params;
        const {data} = await axios (URL + id);
        
        const { name, gender, species, origin, image, status } = data;
        const character = { id, name, gender, species, origin, image, status };
        
        return character.name
        ? res.json(character)
        : res.status(404).send("Character not found");

    } catch (err) {
        return res.status(500).send(err.message);
    }
    
}

module.exports = getCharById;




//? PROMESAS

// const getCharById = (res, id) => {
//   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) => {
//       const { name, gender, species, origin, image, status } = data;
//       const character = { id, name, gender, species, origin, image, status };
      
//       res.writeHead(200, {'Content-type' : 'application/json'})
//       return res.end(JSON.stringify(character)) 
//     })
//     .catch((err) => {
//       res.writeHead(500, {'Content-type' : 'text/plain' })
//       return res.end(err.message)
//     });
// };

// module.exports = getCharById;

//! EXPRESS

// const getCharById = (req, res) => {
  
//   const { id } = req.params;

//   axios(URL + id)
//     .then(({data}) => {
//         const { name, gender, species, origin, image, status } = data;
//         const character = { id, name, gender, species, origin, image, status };
    
//         return character.name
//         ? res.json(character)
//         : res.status(404).send("Character not found");
//     })
//     .catch((err) => {
//         return res.status(500).send(err.message);
//     });
// };

