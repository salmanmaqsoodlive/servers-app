const NodesModel = require('../Models/NodesModel');

module.exports = {
  getStatus: (req, res) => {
    const result = NodesModel.getStatus();

    return res.status(200).send(result);
  },
  getBlocks: (req, res) => {
    const result = NodesModel.getBlocks();

    return res.status(200).send(result);
  }
};
