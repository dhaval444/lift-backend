import lifttraversalModel from "../models/lifttraversal.model.js";

export const addLiftTraversal = async (req, res) => {
  try {
    const addData = new lifttraversalModel(req.body);
    const liftTraversal = await addData.save();
    res.status(200).json(liftTraversal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getLiftTraversal = async (req, res) => {
  console.log('test')
  try {
    const liftTraversal = await lifttraversalModel.find()
    res.status(200).json(liftTraversal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getLastLiftTraversal = async (req, res) => {
  try {
    const liftTraversal = await lifttraversalModel.findOne().sort({ _id: -1 });
    res.status(200).json(liftTraversal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getLiftTraversalsByNoOfPerson = async (req, res) => {
  const noOfPerson = req.query.person;
  try {
    const liftTraversals = await lifttraversalModel.find({ noOfPerson });
    res.status(200).json(liftTraversals);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const deleteLiftTraversalById = async (req, res) => {
  try {
    const liftTraversal = await lifttraversalModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(liftTraversal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const updateLiftTraversal = async (req, res) => {
  try {
    const liftTraversal = await lifttraversalModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(liftTraversal);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
