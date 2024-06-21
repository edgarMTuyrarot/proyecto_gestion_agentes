import { pool } from "../src/db.js";

//Controlador Get de todos los agentes de la tabla
export const getCuartiles = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM cuartiles");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador de un agente en particular requiere el id por parametros
export const getCuartil = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(
      "SELECT * FROM cuartiles WHERE id = (?)",
      id
    );
    if (rows.length <= 0) {
      res.status(404).json({
        message: "Sin Cuartil",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador para agregar agentes a la tabla
export const postCuartil = async (req, res) => {
  try {
    const {
      cuartil,

    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO cuartiles (cuartil) VALUES (?)",
      [
        cuartil,
      
      ]
    );

    res.send(result);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador para actualizar algun campo de algun agente en particular, mediante meteodo patch en ruta
export const updateCuartil = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const {
      cuartil
    } = req.body;
    const [result] = await pool.query(
      "UPDATE cuartil SET cluster=IFNULL(?,cuartil) WHERE ID=(?)",
      [cuartil, id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Cuartil no encontrado",
      });
    } else {
      const [rows] = await pool.query("SELECT * FROM cuartiles WHERE id=?", id);
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador para borrar agente de la tabla, solo se cambia el valor del campo deleted del registro a 1
export const deleteCuartil = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("delete cuartiles  WHERE id=?", [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Cuartil no encontrado",
      });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
