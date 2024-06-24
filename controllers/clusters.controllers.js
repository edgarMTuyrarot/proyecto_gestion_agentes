import { Clusters } from "../src/models/Cluster.js";

//Get All Cuartiles
export const getClusters = async (req, res) => {
  try {
    const cuartiles = await Clusters.findAll()
    res.json(cuartiles);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller to get a Cuartil by ID
export const getCluster = async (req, res) => {
  try {
    const id = req.params.id;
    const cuartil = await Clusters.findByPk(id)
    res.json(cuartil);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller to creat a Cuartil
export const postCluster = async (req, res) => {
  try {
    const {
        cluster,
    } = req.body;
    const response = await Clusters.create({
      cluster
    })
    res.send(response);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//Controller to update a Cuartil
export const updateCluster = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      cluster
    } = req.body;
    const response =  await Clusters.findByPk(id)
    const result = await response.update({
      cluster
    })
    
    res.json(result);
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Controller to delete a Cuartil
export const deleteCluster = async (req, res) => {
  try {
    const { id } = req.params;
    const cluster = await Clusters.destroy({where:{id}})
    res.json(cluster);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
