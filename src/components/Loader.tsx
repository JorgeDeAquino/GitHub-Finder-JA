import { FaSpinner } from "react-icons/fa";

import classes from "./Loader.module.css";

export default function Loader() {
    return (
        <>
            <FaSpinner className={classes.loader} />
        </>
    )
}
