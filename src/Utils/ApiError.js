class ApiError {
    constructor( statusCode, message = "Error occured!", error = [] ){
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.success = false
        this.error = error
    }
};

export { ApiError }