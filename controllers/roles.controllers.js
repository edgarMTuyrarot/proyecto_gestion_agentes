import { Roles } from "../src/models/Roles.js";

export const getRols = async (req, res) => {
  try {
    const allRols = await Roles.findAll();
    res.json(allRols);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const postRol = async (req, res) => {
  try {
    const { rol } = req.body;
    const newRol = await Roles.create({
        rol,
    })

    res.json(newRol)
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
