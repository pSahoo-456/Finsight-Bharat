import express from 'express'
import { addTraveledDetails } from '../controller/logistics.controller.js'
import { protectRoute } from '../middleware/protectRoute.js'
const router=express.Router()

router.post('/addDetails',protectRoute,addTraveledDetails)
export default router