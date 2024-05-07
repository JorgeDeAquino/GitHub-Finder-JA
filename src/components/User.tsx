import { MdLocationPin } from 'react-icons/md'
import { UserProps } from '../types/user'
import { Link } from 'react-router-dom'

export default function User({ avatar_url, login, location, followers, following }: UserProps) {
    return (
        <div>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div>
                <div>
                    <p>Seguindores:</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p>{following}</p>
                </div>
            </div>
            <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
        </div>
    )
}
