import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount, getUser, login, updateProfile, uploadImage } from './handlers'
import { handleInputErrors } from './middleware/validation'
import { authenticate } from './middleware/auth'

const router = Router()

// Autenticacion y registro
router.post(
    '/auth/register',
    body('handle').notEmpty().withMessage('El handle no puede ir vacio'),
    body('name').notEmpty().withMessage('El Nombre no puede ir vacio'),
    body('email').isEmail().withMessage('email no valido'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('El password no puede ir vacio, minimo 8 caracteres'),
    handleInputErrors,
    createAccount
)

router.post(
    '/auth/login',
    body('email').isEmail().withMessage('email no valido'),
    body('password').notEmpty().withMessage('El password es obligatorio'),
    handleInputErrors,
    login
)

router.get('/user', authenticate, getUser)
router.patch(
    '/user',

    body('handle').notEmpty().withMessage('El handle no puede ir vacio'),
    body('description')
        .notEmpty()
        .withMessage('La descripcion no puede ir vacia'),
    handleInputErrors,
    authenticate,
    updateProfile
)

//Imagenes

router.post('/user/image', authenticate, uploadImage )


export default router
