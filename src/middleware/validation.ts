import { NextFunction, Request, Response } from 'express'
import {validationResult} from 'express-validator'

export const handleInputErrors = (req: Request, res, next: NextFunction) => {
    //Manejo de errores
    let errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()
}