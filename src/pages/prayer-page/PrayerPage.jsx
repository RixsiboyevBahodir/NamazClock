import { useParams } from "react-router-dom";
import Clock from "../../components/ui/Clock";
import { useContext } from "react";
import { CityContext } from "../../context/CityContext";

export default function PrayerPage() {
    const { key } = useParams();
    const { city, images, prayersUz, selectedTimings, selectedDate } = useContext(CityContext);

    const prayer = selectedTimings?.find(([name]) => name === key) || ["Noma'lum", "00:00"];

    const [name, time] = prayer;

    return (
        <div className="prayer-card">
            <div className="prayer-page">
                <div className="region-card">
                    <p className="title-uz">{prayersUz[name]}</p>
                    <p className="title">{name}</p>
                    <img src={images[key]} alt="" />
                    <p className="clock">{time}</p>
                </div>
                <div className="right-wrapper">
                    <div className="info">
                        <p className="city">{city}</p>
                        <Clock className="big-clock" />
                    </div>
                    <p className="info">
                        {prayersUz[name] === "Quyosh"
                            ? `${selectedDate}dagi ${prayersUz[name]} chiqish vaqti`
                            : `${selectedDate}dagi o'qiladigan ${prayersUz[name]} namoz vaqti`}
                    </p>
                    <table className="howToPray">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Namozlar</th>
                                <th>Sunnat</th>
                                <th>Farz</th>
                                <th>Sunnat</th>
                                <th>Vitri vojib</th>
                                <th>Jami</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Bomdod</td>
                                <td>2</td>
                                <td>2</td>
                                <td>-</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Peshin</td>
                                <td>4</td>
                                <td>4</td>
                                <td>2</td>
                                <td>-</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Asr</td>
                                <td>-</td>
                                <td>4</td>
                                <td>-</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Shom</td>
                                <td>-</td>
                                <td>3</td>
                                <td>2</td>
                                <td>-</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Xufton</td>
                                <td>-</td>
                                <td>4</td>
                                <td>2</td>
                                <td>3</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Jami</td>
                                <td>6</td>
                                <td>17</td>
                                <td>6</td>
                                <td>3</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Juma</td>
                                <td>4</td>
                                <td>2</td>
                                <td>4</td>
                                <td>-</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
