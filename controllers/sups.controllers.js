import { where } from "sequelize";
import { Supervisores } from "../src/models/Supervisores.js";

/**
 * Funcion para devolver todos los registros de la tabla supervisores.
 * @param {Request} req Peticion GET para todos los registros
 * @param {Response} res Retorna todos los registros de la tabla Supervisores
 */
export const getSups = async (req, res) => {
  try {
    const supervisores = await Supervisores.findAll({where:{deleted:0}})
    res.json(supervisores);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
/**
 * Funcion para obetener un registro en particular por el ID de la tabla supervisores  
 * @param {Request} req Objeto request
 * @param {Response} res Objeto Response
 */
export const getSup = async (req, res) => {
  try {
    const id = req.params.id;
    const supervisor = await Supervisores.findAll({ where: { id } })
    res.json(supervisor);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

/**
 * Funcion para Crear un registro en la tabla supervisores
 * @param {Request} req Se espera en el request, 'nombre','apellido','mail','telefono' todos Strings
 * @param {Response} res Responsde con el JSON de el supervisore creado.
 */
export const postSup = async (req, res) => {
  try {
    const { nombre, apellido,mail, telefono } =
      req.body;

    const resultado = await Supervisores.create({
      nombre,
      apellido,
      mail,
      telefono,
      deleted:0

    });
    res.send(resultado);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

/**
 * Funcion para actualizar un registro en la tabla supervisores
 * @param {Request} req Se espera nombre,apellido,mail,telefono
 * @param {Response} res Responde con el JSON del supervisor actualizado
 */
export const updateSup = async (req, res) => {
  try {
    const { id } = req.params;
    const supervisor = await Supervisores.findOne({ where: { id } })
    const {
      nombre,
      apellido,
      mail,
      telefono
    } = req.body;
    supervisor.update({
      nombre,
      apellido,
      mail,
      telefono
    })
    res.json(supervisor)

  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

/**
 * Funcion para eliminar logicamente un registro en la tabla supervisores
 * @param {Request} req Se espera el ID Int, del supervisor a borrar
 * @param {Response} res Responde el JSON con el supervisor eliminado   
 */
export const deleteSup = async (req, res) => {
  try {
    const { id } = req.params;
    const supervisor= await Supervisores.findOne({where:{id}})
    supervisor.update({
      deleted:1
    })
    res.json(supervisor);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

