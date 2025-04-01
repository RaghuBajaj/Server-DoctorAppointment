import { Router } from "express";
import { getAllDoctors } from "../Controllers/doctor.controller.js";
import { getDoctorByName } from "../Controllers/doctor.controller.js";
import { getDoctorBySpeciality } from "../Controllers/doctor.controller.js";

const router = Router();

router.route("/allDoctors").post(getAllDoctors);
router.route("/doctorName").post(getDoctorByName);
router.route("/specialistDoctor").post(getDoctorBySpeciality);

export default router;