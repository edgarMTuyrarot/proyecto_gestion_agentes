import { pool } from "../src/db.js";
import { Supervisores } from "../src/models/Supervisores.js";

export const getSups = async (req, res) => {
  try {
    const supervisores = await Supervisores.findAll()
    res.json(supervisores);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const getSup = async (req, res) => {
  try {
    const id = req.params.id;
    const supervisor = await Supervisores.findAll({ where: { apellido: id } })
    res.json(supervisor);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

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

//controlador para actualizar los campos del registro que se trae por id.
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

//Controlador para borrar sup de la tabla, solo se cambia el valor del campo deleted del registro a 1
export const deleteSup = async (req, res) => {
  try {
    const { id } = req.params;
    const supervisor= await Supervisores.findOne({where:{apellido:id}})
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

