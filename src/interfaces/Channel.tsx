import Message from './Message'

interface Channel {
  id: number
  name: string
  message: Array<Message>
}

export default Channel
