import Channel from '../interfaces/Channel'
import Guild from '../interfaces/Guild'
import ResponseAPI from '../interfaces/ResponseAPI'

/**
 * Simulate the return of a guilds list from a json file.
 * Subparameters of each guild are already setted, but it probably wouldn't be the case from a real API call.
 *
 *  @param callback state parameter to callback
 */
function getGuilds(callback: (g: Array<Guild>) => any) {
  fetch('./dataset/datas.json')
    .then((response) => response.json())
    .then((response: ResponseAPI) => callback(response.guild))
    .catch((exception) => console.log(exception))
}

/**
 * Simulate the return of all channels associated to a guild from a json file.
 *
 * @param idGuild Guild ID from which channels are returned
 
 * @param callback state parameter to callback
 */
function getChannels(idGuild: number, callback: (g: Array<Channel>) => any) {
  fetch('../../dataset/datas.json')
    .then((response) => response.json())
    .then((jsonResponse) => JSON.parse(jsonResponse))
    .then(
      (response: ResponseAPI) =>
        response.guild.find((guild) => guild.id === idGuild)?.channel
    )
    .then((channelList) => {
      if (channelList) {
        callback(channelList)
      } else {
        throw new Error('Id not found')
      }
    })
    .catch((exception) => alert(exception))
}

export { getGuilds, getChannels }
