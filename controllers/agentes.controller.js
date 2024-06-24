import { pool } from "../src/db.js";
import { Agentes } from "../src/models/Agentes.js";


//Controller to get all agents
export const getAgentes = async (req, res) => {
  try {
    const agentes = await Agentes.findAll({where:{deleted:0}})

    res.json(agentes);
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
};

//Controller to find an Agenten by id
export const getAgente = async (req, res) => {
  try {
    const id = req.params.id;
    const agente = await Agentes.findByPk(id)
    res.json(agente);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller for create an Agente
export const postAgente = async (req, res) => {
  try {
    const {
      usuario_teco,
      nombre,
      apellido,
      legajo,
      score,
      dni,
      mail,
      telefono,
      sups_id,
      } = req.body;
    
    const agente = await Agentes.create({
      nombre,
      apellido,
      usuario_teco,
      legajo,
      score,
      dni,
      telefono,
      mail,
      sups_id,
      deleted:0
    })

    res.json(agente);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller to update info of an agente.
export const updateAgente = async (req, res) => {
  try {
    const { id } = req.params;
    const agente = await Agentes.findOne({
      where:{id}
    })
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
      sups_id

    })

    res.json(respuesta)

  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller to delete an agent, only change 'deteled' field from 0 to 1 (logic ereaser)
export const deleteAgentes = async (req, res) => {
  try {
    const { id } = req.params;
    const agente = await Agentes.findByPk(id)
    agente.update({deleted:1})
    res.status(200).json({
      message:"agente borrado"
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
