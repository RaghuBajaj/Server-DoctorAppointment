import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patientName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    doctorName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    dateSlote:{
        type: String,
        require: true
    },
    timeSlote:{
        type: String,
        require: true
    },
    isPaymentDone:{
        // type: Boolean,
        // default: false
        type: String,
        enum: ['Not Done', 'Done', 'Cancelled'],
        default: 'Not Done'
    },
    cancelled:{
        type: Boolean,
        default: false
    },
    isCheckupDone:{
        // type: Boolean,
        // default: false
        type: String,
        enum: ['Not Done', 'Done', 'Cancelled'],
        default: 'Not Done'
    },
}, { timestamps: true })

export const Appointment = mongoose.model("Appointment", appointmentSchema)