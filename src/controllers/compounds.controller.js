const { Compounds } = require("../../models");

const getList = async (req, res) => {
  try {
    const offset = Number(req.query.offset) || 0;
    const limit = Number(req.query.limit) || 10;
    const compounds = await Compounds.findAll({
      offset: offset,
      limit: limit,
    });
    res.status(200).json({
      status: "success",
      message: "successfully retrieved list of compounds",
      compounds: JSON.parse(JSON.stringify(compounds)),
    });
  } catch (error) {
    console.log(`Error in getList: ${error.message}`);
    res.status(500).json({
      status: "error",
      message: "failed to retrieve list of compounds",
      error: error.message,
    });
  }
};

const uploadList = async (req, res) => {
  try {
    const { compounds } = req.body;
    // batch create, if id already exists, update
    await Compounds.bulkCreate(compounds, {
      updateOnDuplicate: ["name", "description", "image"],
    });
    res.status(201).json({
      status: "success",
      message: "successfully uploaded list of compounds",
    });
  } catch (error) {
    console.log(`Error in uploadList: ${error.message}`);
    res.status(500).json({
      status: "error",
      message: "failed to upload list of compounds",
      error: error.message,
    });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    var { name, description, image } = req.body;
    const compound = JSON.parse(JSON.stringify(await Compounds.findByPk(id)));
    if (!compound) {
      return res.status(404).json({
        status: "error",
        message: "compound not found",
      });
    }
    // not all name, description, image would be present, use the existing value if not present
    name = name || compound.name;
    description = description || compound.description;
    image = image || compound.image;
    await Compounds.update(
      {
        name,
        description,
        image,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(201).json({
      status: "success",
      message: "successfully updated compound",
    });
  } catch (error) {
    console.log(`Error in updateById: ${error.message}`);
    res.status(500).json({
      status: "error",
      message: "failed to update compound",
      error: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const compound = JSON.parse(JSON.stringify(await Compounds.findByPk(id)));
    if (!compound) {
      return res.status(404).json({
        status: "error",
        message: "compound not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "successfully retrieved compound",
      compound,
    });
  } catch (error) {
    console.log(`Error in getById: ${error.message}`);
    res.status(500).json({
      status: "error",
      message: "failed to retrieve compound",
      error: error.message,
    });
  }
};

const createOne = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const compound = await Compounds.create({
      name,
      description,
      image,
    });
    res.status(201).json({
      status: "success",
      message: "successfully created compound",
      compound: JSON.parse(JSON.stringify(compound)),
    });
  } catch (error) {
    console.log(`Error in createOne: ${error.message}`);
    res.status(500).json({
      status: "error",
      message: "failed to create compound",
      error: error.message,
    });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const compound = JSON.parse(JSON.stringify(await Compounds.findByPk(id)));
    if (!compound) {
      return res.status(404).json({
        status: "error",
        message: "compound not found",
      });
    }
    await Compounds.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "success",
      message: "successfully deleted compound",
    });
  } catch (error) {
    console.log(`Error in deleteById: ${error.message}`);
    res.status(500).json({
      status: "error",
      message: "failed to delete compound",
      error: error.message,
    });
  }
};

module.exports = {
  getList,
  uploadList,
  updateById,
  getById,
  createOne,
  deleteById,
};
