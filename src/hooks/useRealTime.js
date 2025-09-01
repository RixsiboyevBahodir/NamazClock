import { useEffect, useState } from "react"

const useRealTime = () => {
    const [dateTime, setDateTime] = useState({ time: "", date: "" })

    useEffect(() => {
        const update = () => {
            const realTime = new Date().toLocaleTimeString()
            const realDate = new Date().toLocaleDateString()
            setDateTime({ time: realTime, date: realDate })
        }

        update()
        const interval = setInterval(update, 1000)

        return () => clearInterval(interval)
    }, [])

    return dateTime
}

export default useRealTime

