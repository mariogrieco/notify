import express from 'express'
import sessionsController from '../controllers/sessions'
import { body } from 'express-validator/check'

const router = express.Router()

router.post('/signin', [
  body('username')
    .exists().withMessage('es requerido'),
  body('password')
    .exists().withMessage('es requerido')
], 
sessionsController.signin)

export default router