import express from 'express'
import { log } from '../../middlewares/logger.middleware.js'
import { getMsgs, addMsg } from './msgs.controller.js'

export const msgRoutes = express.Router()

msgRoutes.get('/', log, getMsgs)
msgRoutes.post('/', addMsg)
