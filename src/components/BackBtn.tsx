import { useNavigate } from "react-router-dom";


export default function BackBtn() {
    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </>
    )
}
