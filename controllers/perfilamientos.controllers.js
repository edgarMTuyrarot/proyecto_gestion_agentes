import { Clusters } from "../src/models/Cluster.js";
import { Cuartiles } from "../src/models/Cuartiles.js";
import { Agentes } from "../src/models/Agentes.js";
import { pool } from "../src/db.js";
import { Perfilamientos } from "../src/models/Perfilamientos.js";

//Get all perfilamientos, whit name and lastname, joining tables, clusters and cuartiles
export const getPerfilamientos = async (req, res) => {
  try {
    const perfilamientos = await Perfilamientos.findAll({
      include: [
        {
          model: Agentes,
          required: true,
          attributes: ["nombre", "apellido"],
        },
        {
          model: Cuartiles,
          required: true, // Esto asegura que se use INNER JOIN en lugar de LEFT JOIN
          attributes: ["cuartil"],
        },
        {
          model: Clusters,
          required: true, // Esto asegura que se use INNER JOIN en lugar de LEFT JOIN
          attributes: ["cluster"],
        },
      ],
      attributes: ["id"],
    });
    res.json(perfilamientos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//Get perfilamiento by id, whit name and lastname, joining tables, clusters and cuartiles
export const getPerfilamiento = async (req, res) => {
  try {
    const id = req.params.id;
    const perfilamientos = await Perfilamientos.findByPk(id, {
      include: [
        {
          model: Agentes,
          required: true,
          attributes: ["nombre", "apellido"],
        },
        {
          model: Cuartiles,
          required: true, // Esto asegura que se use INNER JOIN en lugar de LEFT JOIN
          attributes: ["cuartil"],
        },
        {
          model: Clusters,
          required: true, // Esto asegura que se use INNER JOIN en lugar de LEFT JOIN
          attributes: ["cluster"],
        },
      ],
      attributes: [],
    });

    res.json(perfilamientos);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Create perfilamiento
export const postPerfilamiento = async (req, res) => {
  try {
    const { agente_id, mes, cluster_id, cuartil_id } = req.body;
    const perfilamiento = await Perfilamientos.create({
      agente_id,
      mes,
      cluster_id,
      cuartil_id,
    });

    res.send(perfilamiento);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Update Perfilamiento by id
export const updatePerfilamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const { agente_id, mes, cluster_id, cuartil_id } = req.body;
    const perfilamiento = await Perfilamientos.findByPk(id)
    const result = await perfilamiento.update({
      agente_id, mes, cluster_id, cuartil_id
    })
    res.json(result)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Controller for delete perfilamiento
export const deletePerfilamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Perfilamientos.destroy({
      where:{id}
    })
    
    res.json(result?"Perfilamiento Borrado":"No se encontro perfilamiento");
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
