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
      <nav className="server-list flex-column ">
        <ul className="nav mb-auto text-center">
          <Link to="/" className="d-block m-auto">
            <img src={logo} alt="logo" className="logo pb-3 pt-2" />
          </Link>
          {guilds &&
            guilds.map((guild) => (
              <li className="nav-item" key={guild.id}>
                <Link to={'/' + guild.id + '/0'} className="nav-link server pt-3">
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
