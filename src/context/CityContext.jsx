import { createContext, useState } from "react";
import DawnPrayer from "../assets/svg/dawn-prayer.svg";
import NoonPreyer from "../assets/svg/noon-prayer.svg";
import AsrPreyer from "../assets/svg/asr-prayer.svg";
import SunsetPreyer from "../assets/svg/sunset-prayer.svg";
import NightPreyer from "../assets/svg/night-prayer.svg"
import Sunrise from "../assets/svg/sunrise.svg"
import useDataGet from "../hooks/useDataGet";

export const CityContext = createContext()

export const CityContextProvider = ({ children }) => {


    const [city, setCity] = useState("Toshkent")

    const [selectedDate, setSelectedDate] = useState("Bugungi");

    const { data, isLoading } = useDataGet(city, selectedDate)

    const timings = Object.entries(data?.data?.timings || {});
    const selectedTimings = timings.filter(([key]) =>
        ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha", "Sunrise"].includes(key)
    );

    const images = {
        Fajr: DawnPrayer,
        Dhuhr: NoonPreyer,
        Asr: AsrPreyer,
        Maghrib: SunsetPreyer,
        Isha: NightPreyer,
        Sunrise: Sunrise
    }

    const prayersUz = {
        Fajr: "Bomdod",
        Dhuhr: "Peshin",
        Asr: "Asr",
        Maghrib: "Shom",
        Isha: "Xufton",
        Sunrise: "Quyosh"
    }

    return (
        <CityContext.Provider value={{ city, setCity, images, prayersUz, selectedTimings, isLoading, selectedDate, setSelectedDate }}>
            {children}
        </CityContext.Provider>
    )
}
