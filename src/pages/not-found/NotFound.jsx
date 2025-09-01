import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/home")
        }, 5000)
    })

    return (
        <div className="not-found">
            <h1>404</h1>
            <p className="not-text">NOT FOUND</p>
            <Link to={"/"}>To Home</Link>
        </div>
    )
}
