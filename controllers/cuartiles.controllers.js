import { pool } from "../src/db.js";
import { Cuartiles } from "../src/models/Cuartiles.js";

//Get All Cuartiles
export const getCuartiles = async (req, res) => {
  try {
    const cuartiles = await Cuartiles.findAll()
    res.json(cuartiles);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller to get a Cuartil by ID
export const getCuartil = async (req, res) => {
  try {
    const id = req.params.id;
    const cuartil = await Cuartiles.findByPk(id)
    res.json(cuartil);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller to creat a Cuartil
export const postCuartil = async (req, res) => {
  try {
    const {
      cuartil,
    } = req.body;
    const response = await Cuartiles.create({
      cuartil
    })
    res.send(response);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller to update a Cuartil
export const updateCuartil = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      cuartil
    } = req.body;
    const response =  await Cuartiles.findByPk(id)
    const result = await response.update({
      cuartil
    })
    
    res.json(result);
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Controller to delete a Cuartil
export const deleteCuartil = async (req, res) => {
  try {
    const { id } = req.params;
    const cuartil = await Cuartiles.destroy({where:{id}})

    res.json(cuartil);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
