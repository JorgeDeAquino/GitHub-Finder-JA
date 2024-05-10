import { RepoProps } from "../types/repo";

import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

import classes from "./Repo.module.css";

export default function Repo({
    name,
    language,
    html_url,
    forks_count,
    stargazers_count,
}: RepoProps) {
    return (
        <div>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash />
                {language}
            </p>
            <div>
                <div>
                    <AiOutlineStar />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target="_blank">
                <span>Ver código</span>
                <RiGitRepositoryLine />
            </a>
        </div>
    )
}
