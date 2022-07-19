import Channel from '../interfaces/Channel'
import Guild from '../interfaces/Guild'
import Member from '../interfaces/Member'
import ResponseAPI from '../interfaces/ResponseAPI'

/**
 * Simulate the return of a guilds list from a json file.
 * Subparameters of each guild are already setted, but it probably wouldn't be the case from a real API call.
 *
 *  @param callback state parameter to callback
 */
function getGuilds(callback: (param: Array<Guild>) => any) {
  fetch('/dataset/datas.json')
    .then((response) => response.json())
    .then((response: ResponseAPI) => callback(response.guild))
    .catch((exception) => console.log(exception))
}

/**
 * Simulate the return of a guild from a json file.
 *
 * @param idGuild Guild ID from which channels are returned
 
 * @param callback state parameter to callback
 */
function getGuild(idGuild: number, callback: (param: Guild) => any) {
  fetch('/dataset/datas.json')
    .then((response) => response.json())
    .then((response: ResponseAPI) =>
      response.guild.find((guild) => guild.id === idGuild)
    )
    .then((guild) => {
      if (guild) {
        callback(guild)
      } else {
        throw new Error('Id not found')
      }
    })
    .catch((exception) => console.log(exception))
}

/**
 * Simulate the return of a Channel from a json file.
 *
 * @param idGuild Guild ID from which channels are returned
 
 * @param callback state parameter to callback
 */
function getChannel(
  idGuild: number,
  idChannel: number,
  callback: (param: Channel) => any
) {
  fetch('/dataset/datas.json')
    .then((response) => response.json())
    .then((response: ResponseAPI) =>
      response.guild
        .find((guild) => guild.id === idGuild)
        ?.channel.find((chan) => chan.id === idChannel)
    )
    .then((chan) => {
      if (chan) {
        callback(chan)
      } else {
        throw new Error('Id not found')
      }
    })
    .catch((exception) => console.log(exception))
}

/**
 * Simulate the return of a Channel from a json file.
 *
 * @param idGuild Guild ID from which channels are returned
 
 * @param callback state parameter to callback
 */
function getMembers(idGuild: number, callback: (param: Array<Member>) => any) {
  fetch('/dataset/datas.json')
    .then((response) => response.json())
    .then(
      (response: ResponseAPI) =>
        response.guild.find((guild) => guild.id === idGuild)?.member
    )
    .then((members) => {
      if (members) {
        callback(members)
      } else {
        throw new Error('Id not found')
      }
    })
    .catch((exception) => console.log(exception))
}

/**
 * Simulate the return of all channels associated to a guild from a json file.
 *
 * @param idGuild Guild ID from which channels are returned
 
 * @param callback state parameter to callback
 */
function getChannels(
  idGuild: number,
  callback: (param: Array<Channel>) => any
) {
  fetch('/dataset/datas.json')
    .then((response) => response.json())
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
    .catch((exception) => console.log(exception))
}

export { getGuilds, getGuild, getChannel, getChannels, getMembers }
