import { RepoProps } from "../types/repo"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import classes from "./Repos.module.css"
import Loader from "../components/Loader"
import BackBtn from "../components/BackBtn"

export default function Repos() {
    const { username } = useParams()

    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const loadRepos = async function (username: string) {
            setIsLoading(true)

            const r = await fetch(`https://api.github.com/users/${username}/repos`)

            const data = await r.json()

            setIsLoading(false)

            console.log(data)
        }
        if (username) {
            loadRepos(username)
        }

    }, [])

    return (
        <div>
            Repos {username}
            <BackBtn />
        </div>
    )
}
