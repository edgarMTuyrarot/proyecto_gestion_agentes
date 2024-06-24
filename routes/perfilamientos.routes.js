import {Router} from 'express'

import {deletePerfilamiento, getPerfilamiento,getPerfilamientos,postPerfilamiento, updatePerfilamiento} from '../controllers/perfilamientos.controllers.js'

const router = Router();

//rutas
router.get("/perfilamientos",getPerfilamientos)
router.get("/perfilamiento/:id",getPerfilamiento)
router.post("/perfilamiento",postPerfilamiento)
router.put("/perfilamiento/:id",updatePerfilamiento)
router.delete("/perfilamiento/:id",deletePerfilamiento)



export default router