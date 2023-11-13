import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'
import md5 from 'md5'

export const msgsService = {
    query,
    save,    
}
const BASE_URL = 'msgs/'
const STORAGE_KEY = 'msgs'



async function query(filterBy) {
    console.log('filterBy:', filterBy)
    let msgs = await httpService.get(BASE_URL) 
    let msgsToReturn = [...msgs]
    if (filterBy.filter) {
        console.log('entered')
        const regex = new RegExp(filterBy.filter, 'i')

        msgsToReturn = msgs.filter(msg => 
            regex.test(msg.text) || regex.test(msg.mail))
    }
    return msgsToReturn
}





async function save(msgToSave) {
    console.log('msgToSave:', msgToSave);
    const emailHash = md5(msgToSave.mail.trim().toLowerCase());
    msgToSave.imgUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
    const updatedMsg = await httpService.post(BASE_URL, msgToSave);
    return updatedMsg;
}


function _loadMsgs() {
    let msgs = storageService.query(STORAGE_KEY)
    console.log('msgs:', msgs)
    if (!msgs || !msgs.length) msgs = gDefaultMsgs
    utilService.saveToStorage(STORAGE_KEY, msgs)
    return msgs
}
