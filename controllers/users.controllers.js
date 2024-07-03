import { Users } from "../src/models/Users.js";
import bcryptjs from "bcryptjs";


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
      const salt = await bcryptjs.genSalt(10)
      const hashPassword = await bcryptjs.hash(password,salt)
      const newUser = await Users.create({
        nombre,
        mail,
        password:hashPassword,
        rol_id:1
      });
      res.json(newUser.rol_id);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
