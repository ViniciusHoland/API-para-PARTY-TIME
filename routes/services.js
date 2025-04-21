import { Router } from "express";
import serviceController from '../controllers/serviceController.js'


const router = Router()


router.route("/services").post( (req, res) => serviceController.create(req,res))
router.route("/services").get( (req, res) => serviceController.getAllServices(req,res))
router.route("/services/:idService").get( (req, res) => serviceController.getServiceById(req,res))
router.route("/services/:idService").delete( (req, res) => serviceController.deleteService(req,res))
 


export default router
