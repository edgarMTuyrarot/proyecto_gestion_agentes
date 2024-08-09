import { validationResult } from "express-validator";

/**
 *
 * @param {Request} req parametros a validar
 * @param {Response} res parametros a devolver
 * @param {next} next continuar
 * @returns Devuelve true si pasa las validaciones o un error en caso de no pasarlas
 */
export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};
