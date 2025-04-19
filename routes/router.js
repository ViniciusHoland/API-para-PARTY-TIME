import { Router } from "express";
import servicesRouter from './services'


const router = Router()

router.use("/", servicesRouter)


module.exports = router