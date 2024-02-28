import User from '../models/userModels.js';
import {Op} from 'sequelize'

export const getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200);
        await res.json(users);
    }
    catch(error) {
        return res.json({ message: error.message })
    }
}

export const userSearch = async (req, res) => {
    const valueSearch = req.query.value;
    try {
        const usersFounds = await User.findAll({
            where: {
                [Op.or]: [{
                    nickname: {
                        [Op.like]:`%${valueSearch}%`}
                    },
                    {email: {
                        [Op.like]: `%${valueSearch}`}
                    }
                ]
                
        }})
        if(usersFounds.length == 0){
            return res.status(404).json("Coincidences not found")
        }
        return res.status(200).json(usersFounds);
    } catch (error) {
        return res.status(500).json("No funca")
    }
}

