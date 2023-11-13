import { MsgsFilter } from "./MsgsFilter";



export function MsgList({ msgs }) {
    return (
        <div className="chat">
            <MsgsFilter />
            {msgs.map(msg => (
                <section className="msg" key={msg.id}>
                    <img src={`${msg.imgUrl}`} alt="" />
                    <article className="msg-content">
                        <div className="user-mail">{msg.mail}</div>
                        <div className="user-text">{msg.text}</div>
                    </article>
                </section>
            ))}
        </div>
    )
}