import { UserProps } from "../types/user"

import Search from "../components/Search"
import { useState } from "react"


const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async (userName: string) => {
    const r = await fetch(`https://api.github.com/users/${userName}`)

    const data = await r.json()

    console.log(data)
  }


  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  )
}

export default Home