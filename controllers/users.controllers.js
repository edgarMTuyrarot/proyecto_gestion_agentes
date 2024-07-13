import { Users } from "../src/models/Users.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

/**
 * Funcion para leer todos los registros de la tabla usuarios
 * @param {Request} req request
 * @param {Response} res response
 * @returns {Array} responde arrlego de objetos con los registros de la tabla usuarios
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
/**
 * 
 * @param {Request} req Espera nombre: String, mail:String, password:String 
 * @param {Response} res Responde con un JSON con el token
 */
export const postUsers = async (req, res) => {
  try {
    const { nombre, mail, password } = req.body;
    /**
     * Se valida mediante el modelo Users, que no exista el usuario registrado mediante mail en la tabla.
     */
    const usuarioCreado = await Users.findOne({
      where: { mail },
    });
    /** 
     * Si el usuario existe responde con "USUARIO EXISTENTE"
     */
    if (usuarioCreado) {
      res.send("usuario existente");
    } else {
      /**Si el usuario no existe se crea la Salt, luego se hashea el password, y se crea el registro en la tabla usuarios */
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password, salt);
      const newUser = await Users.create({
        nombre,
        mail,
        password: hashPassword,
        rol_id: 1,
      });
      /**
       * Se utiliza el jsonwebtoken.Sing, para crear el token con validez de una hora(1h)
       * en el cuerpo del toke, se envia el mail del nuevo usuario
       */
      const token = jsonwebtoken.sign(
        {
          email: newUser.mail,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(201).json({ token });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * 
 * @param {Request} req se espera un 'mail' y 'password'
 * @param {object} res 
 * @returns {JSON} retorna un json con el token
 */
export const loginUser = async (req, res) => {
  
  try {

    const { mail, password } = req.body;
    /**Se valida que exista el usuario consulta en la tabla mediante un where=>mail */
    const user = await Users.findOne({
      where: { mail},
    });
    /**Si el usuario no existe se responde con un JSON  */
    if (!user) {
      return res.status(404).json({ msg: "usuario no registrado" });
    }
    /**Si existe el usuario se llama a bcryptjs.compar(), pasando el password del request y pasando el password de la consulta */
    const isMatch = await bcryptjs.compare(password, user.password);
    /**Si no se encuentra coincidencia, retorna false y se responde con un JSON  */
    if (!isMatch) {
      return res.status(401).json({ msg: "Credenciales incorrectas" });
    }
    /**Si tenemos conincidencia, se llama a jsonwebtoken.sing para recuperar el token que luego se devuelve al front. */
    const token = jsonwebtoken.sign(
      {
        email: user.mail,
        rol_id: user.rol_id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.json({token})

  } catch (error) {
    console.log(error)
    res.status(500).json({error:error.msg})
  }
};

/**
 * 
 * @param {Request} req se espera 'email'
 * @param {Response} res 
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
    /**Retorna el erro y msj de error */
    res.status(500).json({error:error.msg})
  }
}
