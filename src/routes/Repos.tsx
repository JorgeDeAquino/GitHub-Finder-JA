import { RepoProps } from "../types/repo"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import classes from "./Repos.module.css"
import Loader from "../components/Loader"
import BackBtn from "../components/BackBtn"
import Repo from "../components/Repo"

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

            setRepos(data)
        }
        if (username) {
            loadRepos(username)
        }

    }, [])

    if (!repos && isLoading) return <Loader />

    return (
        <div>
            <BackBtn />
            <h2>Explore os repositórios do usuário: {username}</h2>
            {repos && repos.length === 0 && <p>Não há repositórios.</p>}
            {repos && repos.length > 0 && (
                <div>
                    {repos.map((repo: RepoProps) => (
                        <Repo key={repo.name} {...repo} />
                    ))}
                </div>
            )}
        </div>
    )
}
