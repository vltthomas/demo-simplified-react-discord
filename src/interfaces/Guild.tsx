import Channel from './Channel'
import Member from './Member'

interface Guild {
  id: number
  name: string
  icon: string
  channel: Array<Channel>
  member: Array<Member>
}

export default Guild
