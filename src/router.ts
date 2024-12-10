import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount, login } from './handlers'
import { handleInputErrors } from './middleware/validation'

const router = Router()

// Autenticacion y registro
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El Nombre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('email no valido'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('El password no puede ir vacio, minimo 8 caracteres'),
    handleInputErrors,
    createAccount
)

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('email no valido'),
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio'),
    handleInputErrors,
    login
)

export default router 