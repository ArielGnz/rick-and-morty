const axios = require('axios');
const APIKEY = 'pi-arielgnz';
const URL = 'https://rym2.up.railway.app/api/character/';


const getCharById = (req, res) => {

    const id = Number(req.params.id);
    axios(`${URL}${id}?key=${APIKEY}`)
    .then(({data}) => {
        const {name, gender, species, origin, image, status} = data;
        const character = {id, name, gender, species, origin, image, status};
        return (character.name)
            ? res.status(200).json(character) 
            : res.status(404).send('not found');

    })
    .catch((error) => {
        res.status(500).json({error: error.message});
        
        //res.writeHead(500, {'Content-Type': 'text/plain'});
        //return res.end(err.message);
    });
}

module.exports = getCharById;