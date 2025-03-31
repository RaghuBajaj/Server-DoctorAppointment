import mongoose from 'mongoose'

const userSchema = new mongoose.Schema( {
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
    },
    DOB:{
        type: String,
    },
    gender:{
        type: String,
    },
    address:{
        type: String,
    },
    appointments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
    },
}, { timestamps: true } )

export const User = mongoose.model("User", userSchema)