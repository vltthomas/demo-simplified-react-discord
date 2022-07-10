import { getChannels, getGuilds } from '../../api/FetchAPI'
import Channel from '../../interfaces/Channel'
import Guild from '../../interfaces/Guild'

test('get guilds from fetch api', () => {
  getGuilds((result: Array<Guild>) => {
    expect(result).toBeDefined()
    expect(result.length).toBeGreaterThan(0)
  })
})

test('get channels from fetch api', () => {
  getChannels(0, (result: Array<Channel>) => {
    expect(result).toBeDefined()
    expect(result.length).toBeGreaterThan(0)
  })
})
