import { logger } from '../../services/logger.service.js'
import { msgsService } from './msgs.service.js'
import { socketService } from '../../services/socket.service.js'


export async function getMsgs(req, res) {
    try {
        const msgs = await msgsService.query()
        res.json(msgs)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get boards' })
    }
}


export async function addMsg(req, res) {
    console.log('im here');
    try {
        const msg = req.body
        const addedMsg = await msgsService.add(msg)
        res.json(addedMsg)
    } catch (err) {
        // logger.error('Failed to add car', err)
        res.status(500).send({ err: 'Failed to add board' })
    }
}



