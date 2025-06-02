import express from "express";
import { handelTopCities, handleTopScore } from "./controller";

const router= express.Router();

router.get("/top-cities", handelTopCities);
router.get("/top-score", handleTopScore);


export default router;