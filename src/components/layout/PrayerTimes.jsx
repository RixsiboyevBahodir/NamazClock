import { useContext } from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import { CityContext } from "../../context/CityContext";
import Spinner from "../Spinner";

export default function PrayerTimes() {

    const { selectedTimings, images, prayersUz, isLoading } = useContext(CityContext)

    if (isLoading) {
        return (
            <Spinner />
        )
    }

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
