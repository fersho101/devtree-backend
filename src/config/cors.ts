import { CorsOptions } from 'cors'

export const corsConfig: CorsOptions = {
    origin: function (o, cb) {
        if (o === process.env.FRONTEND_URL) {
            cb(null, true)
        } else {
            cb(new Error('Error de CORS'))
        }
    },
}
