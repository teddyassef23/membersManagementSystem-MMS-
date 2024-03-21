const { User, Application } = require('../models');

module.exports = {
  // Get all members
  async members(req, res) {
    try {
      const members = await this.members.find();
      res.json(members);
    } catch (err) {
      res.status(500).json(err);
    }
  }
