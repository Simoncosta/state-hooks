import { useEffect } from "react"

export default function Destroy() {

    useEffect(() => {
        console.log("CHEGOU");

        return () => {
            console.log("DESTROY");
        }
    }, [])

    return(
        <h1>Component destroy</h1>
    )
}