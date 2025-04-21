import { Router } from "express";
import servicesRouter from './services.js'


const router = Router()

router.use("/", servicesRouter)


export default router