import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

/**
 * Validaciones de parametros antes de pasar al controlador de creacion de agentes
 */
export const agenteCreateValidate = [
  check("nombre")
    .trim()
    .exists()
    .not()
    .isEmpty()
    .withMessage("Verificar Nombre"),
  check("apellido")
    .trim()
    .exists()
    .not()
    .isEmpty()
    .withMessage("Verificar Apellido"),
  check("usuario_teco")
    .trim()
    .exists()
    .not()
    .isEmpty()
    .withMessage("Debe ingresar Usuario")
    .isLength({ min: 7, max: 7 })
    .withMessage("Usuario Invalido"),
  check("legajo")
    .trim()
    .exists()
    .withMessage("Debe ingresar Legajo")
    .not()
    .isEmpty()
    .withMessage("Legajo Vacio"),
  check("score").trim().exists().not().isEmpty().withMessage("Verificar Score"),
  check("dni")
    .trim()
    .exists()
    .withMessage("Debe ingresar DNI")
    .not()
    .isEmpty()
    .withMessage("DNI Vacio")
    .isLength({ min: 8, max: 8 })
    .withMessage("DNI Invalido"),
  check("telefono")
    .trim()
    .exists()
    .not()
    .isEmpty()
    .withMessage("Verificar Telefono"),
  check("mail").trim().exists().isEmail().withMessage("Ingrese mail valido"),
  check("sup_id").trim().exists().isInt().withMessage("Sup ID erroneo"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
