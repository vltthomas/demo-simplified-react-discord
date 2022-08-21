import { format } from 'date-fns'
import parse from 'date-fns/parse'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getChannel, getMembers } from '../api/FetchAPI'
import sendIcon from '../assets/images/send-message.svg'
import Channel from '../interfaces/Channel'
import Member from '../interfaces/Member'
import Message from '../interfaces/Message'
import './MessagePanel.css'

function MessagePanel() {
  const [channel, setChannel] = useState<Channel>()
  const [members, setMembers] = useState<Array<Member>>([])
  const [messageFormValue, setMessageFormValue] = useState<string>('')

  const { id, idChan } = useParams()

  useEffect(() => {
    getChannel(Number(id), Number(idChan), setChannel)
    getMembers(Number(id), setMembers)
  }, [id, idChan])

  function addNewMessage(event: any) {
    console.log(event)
    if (channel && event.target.messageForm.value.trim().length !== 0) {
      const newMessage: Message = { id: channel.message.length, idMember: 1, content: event.target.messageForm.value, date: new Date().toISOString() }
      setChannel({ ...channel, message: [...channel.message, newMessage] })
      setMessageFormValue('')
    }

    event.preventDefault()
  }

  return (
    <div className="d-flex flex-column message-panel">
      <div className="channel-title p-2 pt-3">{channel && <h2>{channel.name}</h2>}</div>
      <div className="chatbox">
        {channel &&
          members &&
          channel.message.map((message) =>
            members
              .filter((m) => m.id === message.idMember)
              .map((member) => (
                <div className="message py-2 d-flex" key={message.id}>
                  <img src={member.avatar} alt="avatar" className="avatar mx-3" />
                  <div>
                    <span className="fw-bold me-2">{member.username}</span>
                    <span className="date-message">{format(parse(message.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date()), 'dd/MM/yyyy')}</span>
                    <br />
                    <span>{message.content}</span>
                  </div>
                </div>
              ))
          )}
      </div>
      <div className="formbox mt-auto mx-auto mb-4">
        <form autoComplete="off" className="d-flex" onSubmit={addNewMessage}>
          <input
            type="text"
            name="messageForm"
            className="textform ps-4 w-100"
            placeholder="Send a message"
            value={messageFormValue}
            onChange={(e) => setMessageFormValue(e.target.value)}
          />
          <button type="submit" className="submitbutton">
            <img src={sendIcon} alt="send" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MessagePanel

// {
//
//   m &&
