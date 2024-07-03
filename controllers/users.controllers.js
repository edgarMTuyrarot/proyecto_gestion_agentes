import { Users } from "../src/models/Users.js";


export const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.findAll();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//Create user, if mail dont have already in database
export const postUsers = async (req, res) => {
  try {
    const { nombre, mail, password } = req.body;

    const usuarioCreado = await Users.findOne({
      where: { mail },
    });

    if (usuarioCreado) {
      res.send("usuario existente");
    } else {
      const newUser = await Users.create({
        nombre,
        mail,
        password,
        rol_id: 1,
      });
      res.json(newUser);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
