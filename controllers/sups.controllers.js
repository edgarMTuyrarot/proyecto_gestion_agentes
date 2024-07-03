import { Supervisores } from "../src/models/Supervisores.js";

//Controller for find Supervisors, response is an array of Supervisors
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
//Controller for find one specific supervisor find by the id, and response is a Supervisor
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

//Controller for create one Supervisor, and response is a Supervisor
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

//Controller for update fields in a specific Supervisor, find by id, and response this supervisor whit the fields updated
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

//controller for delete specific supervisor, find by id, and response a supervisor, this controller change the field "deleted" from 0 to 1
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

