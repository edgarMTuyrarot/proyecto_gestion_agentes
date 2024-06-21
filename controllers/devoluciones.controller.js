import { pool } from "../src/db.js";


//Controlador Get de todos los agentes de la tabla
export const getDevoluciones = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM devoluciones WHERE deleted !=1 "
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador de un agente en particular requiere el id por parametros
export const getDevolucion = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(
      "SELECT * FROM devoluciones WHERE id = (?) AND deleted != 1",
      id
    );
    if (rows.length <= 0) {
      res.status(404).json({
        message: "Sin Devoluciones",
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
export const postDevolucion = async (req, res) => {
  try {
    const {
      agente_id,
      fecha,
      llamada_id,
      plan_trabajo,
      a_mejorar,
      nps,
      fcr,
      reten,
      tmo,
    } = req.body;
    let fecha_reg = new Date(fecha)
    const [result] = await pool.query(
      "INSERT INTO devoluciones(agente_id,llamada_id,plan_trabajo,a_mejorar,nps,fcr,rente,tmo,deleted) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        agente_id,
        llamada_id,
        plan_trabajo,
        a_mejorar,
        nps,
        fcr,
        reten,
        tmo,
        0,
      ]
    );

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador para actualizar algun campo de algun agente en particular, mediante meteodo patch en ruta
export const updateDevolucion = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const {
      usuario_teco,
      nombre,
      apellido,
      legajo,
      fecha_ingreso,
      score,
      dni,
      mail,
      sup_id,
    } = req.body;
    const [result] = await pool.query(
      "UPDATE devoluciones SET usuario_teco=IFNULL(?,usuario_teco),nombre=IFNULL(?,nombre),apellido=IFNULL(?,apellido),legajo=IFNULL(?,legajo),fecha_ingreso=IFNULL(?,fecha_ingreso),score=IFNULL(?,score),dni=IFNULL(?,dni),mail=IFNULL(?,mail),sup_id=IFNULL(?,sup_id) WHERE ID=(?) AND deleted != 1 ",
      [
        usuario_teco,
        nombre,
        apellido,
        legajo,
        new Date(fecha_ingreso),
        score,
        dni,
        mail,
        sup_id,
        id,
      ]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "devolucion no encontrada",
      });
    } else {
      const [rows] = await pool.query(
        "SELECT * FROM devoluciones WHERE id=?",
        id
      );
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controlador para borrar agente de la tabla, solo se cambia el valor del campo deleted del registro a 1
export const deleteDevolucion = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      "UPDATE devoluciones SET deleted = 1 WHERE id=?",
      [id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "devolucion no encontrada",
      });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "algo salio mal",
    });
  }
};
