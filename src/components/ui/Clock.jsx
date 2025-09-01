import useRealTime from '../../hooks/useRealTime'
import Calendar from '../../assets/svg/calendar.svg'

export default function Clock({ className = "" }) {
    const { time, date } = useRealTime()

    return (
        <div className={`real-time ${className}`}>
            <img src={Calendar} alt="" className="calendar-img" />
            <p className="date">{date}</p>
            <p className="hour">{time}</p>
        </div>
    )
}
