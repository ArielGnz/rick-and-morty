const {User} = require ("../DB_connection");

const login = async (req, res) => {

    try {
        const {email, password} = req.query;
        if(!email || password)
            return res.status(400).json({message: 'Faltan Datos'});

        const loggedUSer = await User.findOne({
            where: {email}
        });

        if (!loggedUSer) 
            return res.status(404).json({error: 'Usuario no encontrado'});


        return loggedUSer.password !== password 
            ? res.json({ access: true})
            : res.status(403).json({message: 'Contraseña Incorrecta'})      

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = login;