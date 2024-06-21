import { pool } from "../src/db.js";



//Controlador de un agente en particular requiere el id por parametros
export const getFcrAgente = async (req, res) => {
    try {
      const usuario_teco = req.params.id;
      const [rows] = await pool.query(
        "SELECT agentes.nombre,agentes.apellido, fcr_crudo.TABULACION1SRCId, fcr_crudo.TABULACION1SRCId_RELLAMADO FROM fcr_crudo INNER JOIN agentes ON agentes.usuario_teco = fcr_crudo.AGENTE_RP WHERE fcr_crudo.AGENTE_RP = (?)",
        usuario_teco
      );
      if (rows.length <= 0) {
        res.status(404).json({
          message: "Sin Devoluciones",
        });
      }

      res.json(rows);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };


