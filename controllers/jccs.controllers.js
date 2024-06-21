import { pool } from "../src/db.js";

export const getJccs = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM jccs WHERE deleted != 1");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};

export const getJcc = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query("SELECT * FROM jccs WHERE id = (?) AND  deleted != 1", id);
    if (rows.length <= 0) {
      res.status(404).json({
        message: "Sin Jcc",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};

export const postJcc = async (req, res) => {
  try {
    const { nombre, apellido, legajo, fecha_ingreso, dni, mail, jcc_id } =
      req.body;
    const [result] = await pool.query(
      "INSERT INTO jccs (nombre,apellido,legajo,fecha_ingreso,dni,mail) VALUES (?,?,?,?,?,?)",
      [nombre, apellido, legajo, new Date(fecha_ingreso), dni, mail]
    );

    res.send(result);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const updateJcc = async (req, res) => {
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
      "UPDATE jccs SET nombre=IFNULL(?,nombre),apellido=IFNULL(?,apellido),legajo=IFNULL(?,legajo),fecha_ingreso=IFNULL(?,fecha_ingreso),dni=IFNULL(?,dni),mail=IFNULL(?,mail) WHERE ID=(?) AND deleted != 1 ",
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
      const [rows] = await pool.query("SELECT * FROM jccs WHERE id=?", id);
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador para borrar sup de la tabla, solo se cambia el valor del campo deleted del registro a 1
export const deleteJcc = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      "UPDATE jccs SET deleted = 1 WHERE id=?",
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

