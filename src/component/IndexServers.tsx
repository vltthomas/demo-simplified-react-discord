import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getGuilds } from '../api/FetchAPI'
import logo from '../assets/images/logo.svg'
import Guild from '../interfaces/Guild'
import './IndexServers.css'

function IndexServers() {
  const [guilds, setGuilds] = useState<Array<Guild>>([])
  useEffect(() => {
    getGuilds(setGuilds)
  }, [])

  return (
    <div>
      <nav className="server-list d-flex flex-column">
        <img src={logo} alt="logo" className="logo pb-3 pt-2" />
        <ul className="nav flex-column mb-auto text-center">
          {guilds &&
            guilds.map((guild) => (
              <li className="nav-item">
                <Link to={'/' + guild.id} className="nav-link server pt-3">
                  <img src={guild.icon} alt={'Logo ' + guild.name} />
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default IndexServers
