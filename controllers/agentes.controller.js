import { Agentes } from "../src/models/Agentes.js";
import {Supervisores} from '../src/models/Supervisores.js'

//**Se establece una funcion mediante GET para devolver todos los registros de la tabla agentes, donde 'deleted'==0 */
export const getAgentes = async (req, res) => {
  try {
    const agentes = await Agentes.findAll({
      where: { deleted: 0 },
      include: {
        model: Supervisores,
        attributes: ['nombre', 'apellido'],
        required: true // Esto asegura que se haga un INNER JOIN
      },
    });

    res.json(agentes);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

/**
 * 
 * @param {Request} req Se espera un ID int
 * @param {Response} res Se devuelve un JSON con el registro asociado en la tabla agentes.
 */
export const getAgente = async (req, res) => {
  try {
    /**se recupera el id a buscar y se ejecuta la funcion*/
    const id = req.params.id;
    const agente = await Agentes.findByPk(id);
    res.json(agente);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

/**
 * Funcion para crear un registro en la tabla agentes, se establece un valor default de sup_id en 0
 * indicando esperando que tengamos un registro en la tabla sups, con ID 0 como "sup n/a"
 * @param {Request} req Espera, usuario_teco,nombre,apellido,legajo,score,dni,mail,telefono
 * @param {Response} res Responde con JSON del registro creado
 */
export const postAgente = async (req, res) => {
  try {

    /**Se lee los parametros del request */
    const {
      usuario_teco,
      nombre,
      apellido,
      legajo,
      score,
      dni,
      mail,
      telefono,
    } = req.body;
    /**Se ejecuta la accion create del modelo Agentes */
    const agente = await Agentes.create({
      nombre,
      apellido,
      usuario_teco,
      legajo,
      score,
      dni,
      telefono,
      mail,
      sups_id:1,
      deleted:0,
    });
    /**Se retorna el agente creado */
    res.json(agente);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

/**
 * Funcino para actualizar un registro en la tabla agentes, mediante el ID
 * @param {Request} req Se espera usuario_teco,nombre,apellido,legajo,score,dni,mail(Strings) y sups_id(Int)
 * @param {Response} res Retorna un JSON con el registro actualizado 
 */
export const updateAgente = async (req, res) => {
  try {
    const { id } = req.params;
    const agente = await Agentes.findOne({
      where: { id },
    });
    const {
      usuario_teco,
      nombre,
      apellido,
      legajo,
      score,
      dni,
      mail,
      sups_id,
    } = req.body;

    const respuesta = await agente.update({
      usuario_teco,
      nombre,
      apellido,
      legajo,
      score,
      dni,
      mail,
      sups_id,
    });

    res.json(respuesta);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

/**
 * Funcion para eliminar logicamente un registro en la tabla agentes, pasa el campo deleted a 1
 * @param {Request} req Se espera el ID Int, del agente a borrar
 * @param {Response} res Responde el JSON con el agente eliminado   
 */
export const deleteAgentes = async (req, res) => {
  try {
    const { id } = req.params;
    const agente = await Agentes.findByPk(id);
    agente.update({ deleted: 1 });
    res.status(200).json({
      message: "agente borrado",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
