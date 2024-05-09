import { RepoProps } from "../types/repo"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import classes from "./Repos.module.css"
import Loader from "../components/Loader"
import BackBtn from "../components/BackBtn"

export default function Repos() {
    const { username } = useParams()

    return (
        <div>
            Repos {username}
            <BackBtn />
        </div>
    )
}
