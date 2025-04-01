import express from "express";

const app = express();

import userRoutes from "./Routes/user.route.js";
import doctorRoutes from "./Routes/doctor.route.js";
import appointmentRoutes from "./Routes/appointment.route.js"

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/appoimtments", appointmentRoutes);

export { app };

