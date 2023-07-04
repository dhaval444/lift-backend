import { Router } from "express";
import {
  addLiftTraversal,
  deleteLiftTraversalById,
  getLastLiftTraversal,
  getLiftTraversal,
  getLiftTraversalsByNoOfPerson,
  updateLiftTraversal,
} from "../controllers/lifttraversal.controller.js";

const router = new Router();

router.get("/lasttraversal", getLastLiftTraversal);
router.get("/alltraversal",getLiftTraversal);
router.get("/lifttraversals", getLiftTraversalsByNoOfPerson);
router.post("/lifttraversal", addLiftTraversal);
router.put("/lifttraversal/:id", updateLiftTraversal);
router.delete("/lifttraversal/:id", deleteLiftTraversalById);

export default router;
