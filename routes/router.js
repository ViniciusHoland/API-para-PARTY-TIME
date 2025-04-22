import { Router } from "express";
import servicesRouter from './services.js'
import partiesRouter from './parties.js'


const router = Router()

router.use("/", servicesRouter)
router.use("/", partiesRouter)


export default router