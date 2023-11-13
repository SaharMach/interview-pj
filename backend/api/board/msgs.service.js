import fs from 'fs'
import mongodb from 'mongodb'
const { ObjectId } = mongodb
import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'

export const msgsService = {
    query,
    add,
}

async function query(filterBy = {}) {
    try {
        //  await dbService.getCollection('board');
        const collection = await dbService.getCollection('msg')
		let msgs = await collection.find('').toArray()
        return msgs
    } catch (err) {
        logger.error('Cannot find boards', err);
        throw err;
    }
}

async function add(msg) {  
    try {
        const collection = await dbService.getCollection('msg')
        await collection.insertOne(msg)
        return msg
    } catch (err) {
        logger.error('cannot insert toy', err)
        throw err
    }
}






