import {Router} from 'express'

import {getPerfilamiento,getPerfilamientos,postPerfilamiento} from '../controllers/perfilamientos.controllers.js'

const router = Router();

//rutas
router.get("/perfilamientos",getPerfilamientos)
router.get("/perfilamiento/:id",getPerfilamiento)
router.post("/perfilamiento",postPerfilamiento)



export default router