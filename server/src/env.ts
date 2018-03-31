//  Simple heuristic to detect the environment
export const env = process.env.MONGODB_URI ? 'production' : 'development'

// Return if the environment is production
export const isProd = () => env === 'production'
