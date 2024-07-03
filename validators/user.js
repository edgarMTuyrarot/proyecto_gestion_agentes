import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

export const validateCreate = [
    check('nombre')
    .exists()
    .not().withMessage('Debe ingresar un nombre')
    .isEmpty().withMessage('El nombre no debe estar vacio'),
    check('mail')
    .exists().withMessage('Debe ingresar un email')
    .isEmail().withMessage('Debe ingresar un email valido'),
    check('password')
    .exists()
    .not().withMessage('Debe ingresar un passowrd')
    .isEmpty().withMessage('Password no debe estar vacio')
    .isLength({min:6}).withMessage('Password debe tener mas de 6 caracteres'),
    (req,res,next)=>{
        validateResult(req,res,next)
    }


]

