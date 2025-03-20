import dotenv from 'dotenv'
dotenv.config()
export const ENV_VARS={ 
    PORT:process.env.PORT || 5002,
    NODE_ENV:process.env.NODE_ENV,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET
}