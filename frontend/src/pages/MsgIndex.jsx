import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { loadMsgs } from "../store/msgs.actions"
import { useForm } from "../customHooks/useForm"
import { saveMsg } from "../store/msgs.actions"
import { MsgList } from "../cmps/MsgList"

export function MsgIndex() {
    const dispatch = useDispatch();
    const msgs = useSelector(state => state.msgsModule.msgs);
    const [formFields, handleChange, setFields] = useForm({ mail: '', text: '' })
    const filterBy = useSelector(state => state.msgsModule.filterBy)

    useEffect(() => {
        loadMsgs()
    }, [dispatch, filterBy])

    const handleSubmit = (e) => {
        e.preventDefault()
        saveMsg(formFields)
        setFields({ mail: '', text: '' })
    }



    if (!msgs) return <div>Loading...</div>

    return (
        <section className="layout">
            <form className="add-msg" onSubmit={handleSubmit}>
                <input
                    type="mail"
                    name="mail"
                    value={formFields.mail}
                    onChange={handleChange}
                    placeholder="Your email"
                />
                <textarea
                    name="text"
                    value={formFields.text}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={4}
                />
                <button type="submit">Submit</button>
            </form>
            <MsgList msgs={msgs} />
        </section>
    );
}
