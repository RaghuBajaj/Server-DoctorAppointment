import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema( {
    name:{
        type: String,
        require: true
    },
    qualification:{
        type: String,
        require: true
    },
    experience:{
        type: Number,
        require: true
    },
    description:{
        type: String
    },
    fees:{
        type: String,
        require: true
    },
    appointments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
    },
}, { timestamps: true } )

export const Doctor = mongoose.model("Doctor", doctorSchema)