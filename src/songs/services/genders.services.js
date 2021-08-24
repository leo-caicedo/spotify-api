// models
const Gender = require("../models/Gender");

class GenderServices {
  // list genders
  async getGenders(req, res, next) {
    try {
      const genders = await Gender.find({}).populate("songs", {
        _id: 0,
        title: 1,
      });
      res.json(genders);
    } catch (err) {
      next(err);
    }
  }

  // get gender
  async getGender(req, res, next) {
    const { id } = req.params;

    try {
      const gender = await Gender.findById(id).populate("songs", { gender: 0 });
      res.json(gender);
    } catch (err) {
      next(err);
    }
  }

  // create gender
  async createGender(req, res, next) {
    const { body: gender } = req;

    try {
      const genderCreated = new Gender(gender);
      await genderCreated.save();
      res.status(201).json(genderCreated);
    } catch (err) {
      next(err);
    }
  }

  // update gender
  async updateGender(req, res, next) {
    const { id } = req.params;
    const { body: gender } = req;

    try {
      const genderUpdated = await Gender.findByIdAndUpdate(id, gender, {
        new: true,
      });
      res.json(genderUpdated);
    } catch (err) {
      next(err);
    }
  }

  // delete gender
  async deleteGender(req, res, next) {
    const { id } = req.params;

    try {
      await Gender.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GenderServices;
