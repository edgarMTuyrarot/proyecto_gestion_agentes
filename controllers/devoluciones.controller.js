import { pool } from "../src/db.js";
import { Devoluciones } from "../src/models/Devoluciones.js";
import { Agentes } from "../src/models/Agentes.js";

/**Funcion para devolver un JSON con todas las devolucion, se incluye nombre y apellido del agente */
export const getDevoluciones = async (req, res) => {
  try {
    const devoluciones = await Devoluciones.findAll({
      include: [
        { model: Agentes,
          attributes:["nombre","apellido"]
        }
      ],
      attributes:["id","plan_de_trabajo","a_mejorar","llamada_id"]
    });
    res.json(devoluciones);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Controlador de un agente en particular requiere el id por parametros
export const getDevolucion = async (req, res) => {
  try {
    const id = req.params.id;
    const devolucion = await Devoluciones.findByPk(id)
    res.json(devolucion);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Create Devolucion
export const postDevolucion = async (req, res) => {
  try {
    const { agente_id, fecha, llamada_id, plan_de_trabajo, a_mejorar } =
      req.body;
    const devolucion = await Devoluciones.create({
      agente_id,
      llamada_id,
      plan_de_trabajo,
      a_mejorar,
    });

    res.send(devolucion);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

//Update Devolucion
export const updateDevolucion = async (req, res) => {
  try {
    const { id } = req.params;
    const devolucion = await Devoluciones.findByPk(id)
    const {
      agente_id,
      llamada_id,
      plan_de_trabajo,
      a_mejorar,
    } = req.body;
    const result = await devolucion.update({
      agente_id,
      llamada_id,
      plan_de_trabajo,
      a_mejorar,
    })
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Controlador para borrar agente de la tabla, solo se cambia el valor del campo deleted del registro a 1
export const deleteDevolucion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Devoluciones.destroy({
      where:{id}
    })
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
