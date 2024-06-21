import { pool } from  "../src/db.js";


export const ping = async (req, res) => {
    const [result] = await pool.query(`SELECT 1+1 as result`);
    res.json(result);
  }