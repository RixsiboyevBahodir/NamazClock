import { useContext } from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import { CityContext } from "../../context/CityContext";

export default function PrayerTimes() {

    const { selectedTimings, images, prayersUz } = useContext(CityContext)

    return (
        <div className="card-wrapper">
            {
                selectedTimings.map(([key, item]) => (
                    <Link to={`/home/${key}`} key={key}>
                        <Card title={key} time={item} titleUz={prayersUz[key]}>
                            <img src={images[key]} alt={key} />
                        </Card>
                    </Link>
                ))
            }
        </div>
    )
}
