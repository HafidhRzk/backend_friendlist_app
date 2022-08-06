const { friend } = require("../../models");

exports.addFriend = async (req, res) => {
  try {
    await friend.create(req.body);

    res.send({
      status: "success",
      message: "Add friend finished",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getFriends = async (req, res) => {
  try {
    const data = await friend.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getFriend = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await friend.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateFriend = async (req, res) => {
  try {
    const { id } = req.params;

    await friend.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Update friend id: ${id} finished`,
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteFriend = async (req, res) => {
  try {
    const { id } = req.params;

    await friend.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Delete friend id: ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
