import { Router } from "express";
import { getAllAppointments } from "../Controllers/appointment.controller.js";
import { getAppointmentsByDoctor } from "../Controllers/appointment.controller.js";
import { getAppointmentsByPatient } from "../Controllers/appointment.controller.js";

const router = Router();

router.route("/allAppointments").post(getAllAppointments);
router.route("/appointmentsOfDoctor").post(getAppointmentsByDoctor);
router.route("/appointmentsOfPatient").post(getAppointmentsByPatient);

export default router;