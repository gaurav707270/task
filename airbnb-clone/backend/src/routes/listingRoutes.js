import express from "express";

import {getListing} from "../controllers/listingController.js";

const router = express.Router();

router.get("/listing",getListing);

export default router;