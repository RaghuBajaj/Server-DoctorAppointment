import { asyncHandler } from "../Utils/asyncHandler";
import { Appointment } from "../Models/appointment.model";
import { ApiError } from "../Utils/ApiError";
import { ApiResponse } from "../Utils/ApiResponse";

const getAllAppointments = asyncHandler( async( req, res ) => {
    const allAppointments = await Appointment.find();

    return res.status(200).json(
        new ApiResponse(201, allAppointments, "All Appointments retrived successfully!")
    )
});

const getAppointmentsByDoctor = asyncHandler( async( req, res ) => {
    const { doctorName } = req.body;

    if( !doctorName ){
        throw new ApiError(403, "Doctor detail is required!")
    }

    const doctorAppointments = await Appointment.find({ doctorName })

    if( !doctorAppointments ){
        throw new ApiError(405, "No appointment of such doctor is present!")
    }

    return res.status(200).json(
        new ApiResponse(201, doctorAppointments, "Doctor appointments are sent successfully!")
    )
});

const getAppointmentsByPatient =asyncHandler( async( req, res ) => {
    const { patientName } = req.body;

    if( !patientName ){
        throw new ApiError(403, "Patient detail is required!")
    }

    const patientAppointments = await Appointment.find({ patientName })

    if( !patientAppointments ){
        throw new ApiError(405, "No appointment of such patient is present!")
    }

    return res.status(200).json(
        new ApiResponse(201, patientAppointments, "Patient appointments sent successfully!")
    )
});

export { getAllAppointments, getAppointmentsByDoctor, getAppointmentsByPatient }