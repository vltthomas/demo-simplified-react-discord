import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { getGuild } from '../api/FetchAPI'
import Guild from '../interfaces/Guild'
import './ServerPage.css'

function ServerPage() {
  const [guild, setGuild] = useState<Guild>()
  const [activeChan, setActiveChan] = useState(0)
  const { id } = useParams()

  useEffect(() => {
    getGuild(Number(id), setGuild)
    setActiveChan(0)
  }, [id])

  return (
    <div className="d-flex w-100">
      <div className="d-flex flex-column server-info">
        {guild && (
          <div className="title text-center p-2 pt-3">
            <h1>{guild.name}</h1>
          </div>
        )}
        {guild && guild.channel && (
          <ul className="p-0">
            {guild.channel.map((chan) => (
              <Link to={'./' + chan.id} className="channel-link" onClick={() => setActiveChan(chan.id)} key={chan.id}>
                <li className={`channel m-2  p-0 px-2 ${activeChan === chan.id ? 'activeChan' : ''}`}>{chan.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <Outlet />
      <div className="d-flex flex-column"></div>
    </div>
  )
}

export default ServerPage
