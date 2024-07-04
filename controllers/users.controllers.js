import { Users } from "../src/models/Users.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

/**
 * Controlador para leer todos los usuarios
 * @param {object} req request
 * @param {object} res response
 * @returns {Array} responde arrlego de objetos con los usuarios de la base de datos
 */
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
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password, salt);
      const newUser = await Users.create({
        nombre,
        mail,
        password: hashPassword,
        rol_id: 1,
      });
      const token = jsonwebtoken.sign(
        {
          email: newUser.mail,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(201).json({ ok: true, token });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * 
 * @param {object} req reques
 * @param {object} res response
 * @returns {json} retorna un json con el token y un booleano en true
 */
export const loginUser = async (req, res) => {
  
  try {
    const { mail, password } = req.body;

    const user = await Users.findOne({
      where: { mail},
    });

    if (!user) {
      return res.status(404).json({ msg: "usuario no registrado" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Credenciales incorrectas" });
    }

    const token = jsonwebtoken.sign(
      {
        email: user.mail,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.json({ok:true,token})

  } catch (error) {
    console.log(error)
    res.status(500).json({error:error.msg})
  }
};

/**
 * 
 * @param {object} req objeto request
 * @param {object} res objeto response
 * @returns retorna un objeto mediante una consulta previa con datos del usuario
 */
export const userProfile = async (req,res)=>{
  try {
    /**
     * Se recupera el mail desde el request enviado desde el middleware jwt.middleware.js
     */
    const mail = req.email
    /**
     *Se realiza la consulta a la BBDD con condicon del mail para recuperar el usuario completo.
     */
    const profile = await Users.findOne({
      where:{mail}
    })
    /**
     *Se desestructura el usuario, obeteniendo el nombre y rol
     */
    const {nombre,rol_id} = profile
    /**
     *Se responde con el nombre y rol
     */
    return res.json({nombre,rol_id})
  } catch (error) {
    res.status(500).json({error:error.msg})
  }
}
