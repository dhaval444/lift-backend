import { model, Schema } from "mongoose";

const LiftTraversalModel = new Schema({
  noOfPerson: {
    type: Number,
    required: true,
  },
  fromFloor: {
    type: Number,
    required: true,
  },
  toFloor: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model("lifttraversal", LiftTraversalModel);
