const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const {name, origin, status, image, species, gender} = req.body;

        if (!name || !origin || status || image ||species ||gender)
            return res.status(401).json({message: 'Faltan Datos'});

        await Favorite.findOrCreate({
            where: {name, origin, status, image, species, gender},
        });

        

    } catch (error) {
        
    }
}

module.exports = postFav;