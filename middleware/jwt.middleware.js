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
    const { email } = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    /**
     * Se desestructura el email, que luego se envia al req, mediante el next
     */
    req.email = email
    next();
  } catch (error) {
    res.status(400).json(error.message)
  }
};
