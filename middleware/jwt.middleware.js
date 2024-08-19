import jsonwebtoken from "jsonwebtoken";
/**
 * 
 * Se verifica que el token sea validado mediante jwt
 * 
 * @returns {void} avanza si el token es correcto
 */
export const verifyToken = async (req, res, next) => {
    /**
     * se obtiene el token desde el headers.authorization, atravez de Bearer Token
     * se realiza un split por espacio y luego se selecciona el elemento en la posicion 1
     */
  const token = req.headers.authorization.split(" ")[1];
  /** 
   * Se valida que el token exista
   */
  if (!token) {
    return res.json({ msg: "Sin token" });
  }
  /** 
   *Se intenta verificar el token pasando el token obtenido desde el headers y la secret word desde el process.env
   */
  try {
    const { email,rol_id } = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    /**
     * Se desestructura el email, que luego se envia al req, mediante el next
     */
    req.email = email
    req.rol_id =rol_id
    next();
  } catch (error) {
    res.status(400).json(error.message)
  }
};
/**
 * Se tiene que verificar que el rol_id sea igual al administrador
 * @param {Request} req 
 * @param {Response} res 
 * @param {next} next 
 * @returns 
 */
export const verifyAdmin =  async (req,res,next)=>{

  if(req.rol_id == 1 ){
    return next()
  }
  return res.status(403).json({
    "error":"Solo admin"
  })



}