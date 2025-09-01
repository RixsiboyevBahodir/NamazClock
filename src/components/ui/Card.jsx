export default function Card({ children, title, time, titleUz }) {
    return (
        <div className='card'>
            <p className="title-uz">{titleUz}</p>
            <p className='title'>{title}</p>
            {children}
            <p className='time'>{time}</p>
        </div>
    )
}
