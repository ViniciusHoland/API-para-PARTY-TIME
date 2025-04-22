import { Router } from "express";
import partyController from "../controllers/partyController.js"


const router = Router()


router.route("/parties").post((req,res) => partyController.create(req,res))
router.route("/parties").get((req,res) => partyController.getAllParties(req,res))


export default router