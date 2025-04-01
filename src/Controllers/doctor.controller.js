import { asyncHandler } from "../Utils/asyncHandler";
import { ApiError } from "../Utils/ApiError";
import { ApiResponse } from "../Utils/ApiResponse";
import { Doctor } from "../Models/doctor.model";

const getAllDoctors = asyncHandler( async( req, res ) => {
    const allDoctors = await Doctor.find();

    if( !allDoctors ){
        throw new ApiError(405, "No doctor found!")
    }

    return res.status(200).json(
        new ApiResponse(201, allDoctors, "All Doctor's detail sent successfully!")
    )
});

const getDoctorByName = asyncHandler( async( req, res ) => {
    const { name } = req.body;

    if( !name ){
        throw new ApiError(403, "Name of the doctor is required!")
    }

    const doctorDetail = await Doctor.findOne({ name })

    if( !doctorDetail ){
        throw new ApiError(405, "No such doctor is present!")
    }

    return res.status(200).json(
        new ApiResponse(201, doctorDetail, "Doctor's details sent successfully!")
    )
});

const getDoctorBySpeciality = asyncHandler( async( req, res ) => {
    const { speciality } = req.body;

    if( !speciality ){
        throw new ApiError(403,  "Speciality is required!, Not provided!")
    }

    const specialistDoctors = await Doctor.find({ speciality })

    if( !specialistDoctors ){
        throw new ApiError(405, "No such Specialist doctor is present!")
    }

    return res.status(200).json(
        new ApiResponse(201, specialistDoctors, "Specialist doctor is sent successfully!")
    )
});

export { getAllDoctors, getDoctorByName, getDoctorBySpeciality }