import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

export const createSupsValidate = [
  check("nombre")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Debe ingresar un nombre"),
  check("apellido")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Debe ingresar un apellido"),
  check("telefono")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Debe ingresar un telefono"),
  check("mail")
    .exists()
    .not()
    .isEmpty().withMessage("Debe ingresar un email")
    .isEmail()
    .withMessage("Debe ingresar un email valido"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
