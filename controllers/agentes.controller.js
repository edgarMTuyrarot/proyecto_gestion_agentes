import { pool } from "../src/db.js";
import { Agentes } from "../src/models/Agentes.js";


//Controller for find all agents
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

//Controlador de un agente en particular requiere el id por parametros
export const getAgente = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(
      "SELECT * FROM agentes WHERE id = (?) AND deleted != 1",
      id
    );
    if (rows.length <= 0) {
      res.status(404).json({
        message: "Sin Agentes",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
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
      sups_id
    })

    res.json(agente);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador para actualizar algun campo de algun agente en particular, mediante meteodo patch en ruta
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

//Controlador para borrar agente de la tabla, solo se cambia el valor del campo deleted del registro a 1
export const deleteAgentes = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      "UPDATE agentes SET deleted = 1 WHERE id=?",
      [id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Agente no encontrado",
      });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};
