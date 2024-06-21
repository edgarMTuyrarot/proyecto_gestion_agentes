import { pool } from "../src/db.js";

export const getPerfilamientos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM perfilamientos");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const getPerfilamiento = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query("SELECT agentes.nombre,agentes.apellido, clusters.cluster,cuartiles.cuartil FROM perfilamientos INNER JOIN agentes ON agentes.id = perfilamientos.agente_id INNER JOIN cuartiles ON cuartiles.ID = perfilamientos.cuartil_id INNER JOIN clusters ON clusters.ID = perfilamientos.cluster_id WHERE agentes.usuario_teco = (?)", id);
    if (rows.length <= 0) {
      res.status(404).json({
        message: "Sin Perfilamiento",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const postPerfilamiento = async (req, res) => {
  try {
    const { agente_id, mes, cluster_id, cuartil_id} =
      req.body;
    const [result] = await pool.query(
      "INSERT INTO perfilamientos (agente_id,mes,cluster_id,cuartil_id) VALUES (?,?,?,?)",
      [ agente_id, mes, cluster_id, cuartil_id]
    );

    res.send(result);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const updatePerfilamiento = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const {
      nombre,
      apellido,
      legajo,
      fecha_ingreso,
      dni,
      mail
    } = req.body;
    const [result] = await pool.query(
      "UPDATE perfilamientos SET nombre=IFNULL(?,nombre),apellido=IFNULL(?,apellido),legajo=IFNULL(?,legajo),fecha_ingreso=IFNULL(?,fecha_ingreso),dni=IFNULL(?,dni),mail=IFNULL(?,mail) WHERE ID=(?) AND deleted != 1 ",
      [

        nombre,
        apellido,
        legajo,
        new Date(fecha_ingreso),
        dni,
        mail,
        id
      ]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Jcc no encontrado",
      });
    } else {
      const [rows] = await pool.query("SELECT * FROM perfilamientos WHERE id=?", id);
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador para borrar sup de la tabla, solo se cambia el valor del campo deleted del registro a 1
export const deletePerfilamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      "UPDATE perfilamientos SET deleted = 1 WHERE id=?",
      [id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "Jcc no encontrado",
      });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

