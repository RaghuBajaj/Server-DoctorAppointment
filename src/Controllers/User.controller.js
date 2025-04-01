import { asyncHandler } from "../Utils/asyncHandler";
import { ApiResponse } from "../Utils/ApiResponse";
import { ApiError } from "../Utils/ApiError";
import { User } from "../Models/user.model";

const registerUser = asyncHandler( async( req, res ) => {
    const { name, email, password } = req.body;

    if( [ name, email, password ].some(field => field.trim() == "") ){
        throw new ApiError(400, "All fields are required!")
    }

    const existedUser = await User.findOne({
        $and:[ { name }, { email } ]
    })

    if(existedUser){
        throw new ApiError(401, "User already exists!")
    }

    const newUser = await User.create({
        name, 
        email, 
        password
    })

    const createdUser = await User.findById(newUser._id)

    if(!createdUser){
        throw new ApiError(500, "Some error occured while registering the user!")
    }

    return res.status(200).json(
        new ApiResponse(201, createdUser, "User registered successfully!")
    )
});

const loginUser = asyncHandler( async( req, res ) => {
    const { name, email, password } = req.body;

    if([ name, email, password ].some(field => field.trim() == "")){
        throw new ApiError(400, "All fields are required!")
    }

    const existedUser = await User.findOne({
        $and:[ { name }, { email } ]
    })

    if(!existedUser){
        throw new ApiError(401, "User don't exists!")
    }

    return res.status(200).json(
        new ApiResponse(201, existedUser, "User loged in successfully!")
    )
});

export { registerUser, loginUser }